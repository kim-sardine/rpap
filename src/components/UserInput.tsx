import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';

type UserInputProps = {
    userInputData: string;
    onChangeInputData: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    userInputTitle: string;
    onChangeInputTitle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmitData: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    classes: Record<any, string>;
}

function UserInput(props: UserInputProps) {

    return (
        <Paper className={props.classes.paper} style={{minHeight: 480}}>
            <TextField
                label="Title"
                value={props.userInputTitle} 
                onChange={props.onChangeInputTitle}
                fullWidth
                margin="normal"
                autoFocus
                variant="outlined"
            />
            <TextField
                label="Data : copy from Excel and paste it here"
                value={props.userInputData} 
                onChange={props.onChangeInputData}
                fullWidth
                multiline
                margin="normal"
                rows={20}
                variant="outlined"
            />
            <Button onClick={props.onSubmitData} variant="contained" color="primary">
                Shuffle & Run
            </Button>
        </Paper>
    );
}

export default UserInput;
                