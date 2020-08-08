import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';

type UserInputProps = {
    userInputData: string;
    onChangeInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmitData: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    classes: Record<any, string>;
}

function UserInput(props: UserInputProps) {

    return (
        <Paper className={props.classes.paper} style={{minHeight: 480}}>
            <TextField
                id="user_input"
                label="Copy from Excel and Paste it here"
                value={props.userInputData} 
                onChange={props.onChangeInput}
                fullWidth
                multiline
                margin="normal"
                autoFocus
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
                