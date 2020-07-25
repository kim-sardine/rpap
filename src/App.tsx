import React, { useState } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import './App.css';

function App() {
  const [data, setData] = useState('');
  const handle = useFullScreenHandle();

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  const onSubmitData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Generate FullScreen presenter from data
    console.log(data);
  };

  return (
    <div>
      <div>
        <textarea value={data} onChange={onChangeInput} />
        <button onClick={onSubmitData}>Run</button>
      </div>

      <div>
        <button onClick={handle.enter}>
          Enter fullscreen
        </button>
        <FullScreen handle={handle}>
          <div className="title">
            {data}
          </div>
        </FullScreen>
      </div>
    </div>
  );
}

export default App;
