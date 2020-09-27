import React from 'react';
import ReactGA from 'react-ga';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Paper, Fab, Typography, Button, Box } from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CardComponent, { MyCard } from './Card';


export enum PickerStatus {
    INIT,
    READY,
    RUNNING,
    FINISHED
}

type RpapProps = {
    pickerStatus: PickerStatus;
    cardData: MyCard[];
    currentCardIdx: number;
    title: string;
    classes: Record<any, string>;
    setPickerStatus: (p: PickerStatus) => void;
    setCurrentCardIdx: (n: number) => void;
}

function Rpap({ pickerStatus, cardData, currentCardIdx, title, classes, setPickerStatus, setCurrentCardIdx }: RpapProps) {
    const handle = useFullScreenHandle();

    const InitialPage = () => (
        <Typography variant="h5">
            Click button on the left to start RPAP!
        </Typography>
    )

    const PickerPage = () => {
        if (pickerStatus === PickerStatus.READY) {
            return (
                <Button 
                    variant="outlined"
                    color="primary"
                    onClick={startRpap}
                >
                    Let's Start
                </Button>
            )
        }
        else if (pickerStatus === PickerStatus.FINISHED) {
            return (
                <Typography variant="h5">
                    Finished
                </Typography>
            )
        }
        else {
            return (
                <div>
                    <Box mb="3rem">
                        <Typography variant="h4" color="primary" gutterBottom>
                            {title}
                        </Typography>
                    </Box>
                    <CardComponent card={cardData[currentCardIdx]} />
                    <Box mt="2rem">
                        <Typography variant="h6">
                            {currentCardIdx + 1} / {cardData.length}
                        </Typography>
                    </Box>
                    <Box mt="2rem">
                        <Button 
                            variant="contained"
                            onClick={getNextCard}
                            endIcon={<NavigateNextIcon />}
                        >
                            Next
                        </Button>
                    </Box>
                </div>
            )
        }
    }

    function startRpap() {
        setPickerStatus(PickerStatus.RUNNING);
        ReactGA.event({
            category: 'User',
            action: "Click Let's Start",
        });
    }

    function getNextCard(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (currentCardIdx === cardData.length - 1) {
            setPickerStatus(PickerStatus.FINISHED)
            ReactGA.event({
                category: 'User',
                action: "RPAP FINISHED",
            });
        }
        else {
            setCurrentCardIdx(currentCardIdx + 1);
            ReactGA.event({
                category: 'User',
                action: "Get next card",
            });
        }
    }

    return (
        <Paper className={`${classes.paper} ${classes.centerContent}`} style={{minHeight: 550, position: 'relative'}}>
            <Fab className={classes.fab} color="primary" aria-label="full screen" size="small">
                <FullscreenIcon onClick={handle.enter} />
            </Fab>
            <FullScreen handle={handle}>
                {pickerStatus === PickerStatus.INIT ? <InitialPage /> : <PickerPage />}
            </FullScreen>
        </Paper>
    );
}

export default Rpap;
                