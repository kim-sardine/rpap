import React, { useState } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Card, { MyCard } from './Card';
import './App.css';

enum PickerStatus {
  INIT,
  READY,
  RUNNING,
  FINISHED
}

function App() {
  const [userInputData, setUserInputData] = useState('');
  const [cardData, setCardData] = useState([new MyCard([])]);
  const [pickerStatus, setPickerStatus] = useState(PickerStatus.INIT);
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const handle = useFullScreenHandle();

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInputData(e.target.value);
  };

  const onSubmitData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let t_cardData: MyCard[] = [];
    let rows = userInputData.split("\n");
    for(let row of rows) {
      if (row !== "") {
        let cells = row.split("\t");
        t_cardData.push(new MyCard(cells));
      }
    }

    if (t_cardData.length === 0) {
      setCardData([new MyCard([])])
    }
    else {
      shuffleCards(t_cardData);
      setCardData(t_cardData);
      setPickerStatus(PickerStatus.READY);
      setCurrentCardIdx(0);
    }
  };

  const InitialPage = () => (
    <div>
      Paste Excel data and Click Run
    </div>
  )

  const PickerPage = () => {
    if (pickerStatus === PickerStatus.READY) {
      return (
       <div>
         <button onClick={() => setPickerStatus(PickerStatus.RUNNING)}>Let's Start</button>
       </div>
     )
    }
    else if (pickerStatus === PickerStatus.FINISHED) {
      return (
       <div>
         Finished
       </div>
     )
    }
    else {
      return (
       <div>
         <Card card={cardData[currentCardIdx]} />
         <button onClick={getNextCard}>Next</button>
       </div>
     )
    }
  }

  
  function shuffleCards(cards: MyCard[]) {
    for(let i = cards.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = cards[i]
      cards[i] = cards[j]
      cards[j] = temp
    }
  }

  function getNextCard(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (currentCardIdx === cardData.length - 1) {
      setPickerStatus(PickerStatus.FINISHED)
    }
    else {
      setCurrentCardIdx(currentCardIdx + 1);
    }
  }

  return (
    <div>
      <div>
        <textarea value={userInputData} onChange={onChangeInput} />
        <button onClick={onSubmitData}>Run</button>
      </div>

      <div>
        <button onClick={handle.enter}>
          Enter fullscreen
        </button>
        <FullScreen handle={handle}>
          {pickerStatus === PickerStatus.INIT ? <InitialPage /> : <PickerPage />}
        </FullScreen>
      </div>
    </div>
  );
}

export default App;
