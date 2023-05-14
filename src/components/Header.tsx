import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    appBar: {
        marginBottom: theme.spacing(3),
    },
    toolBar: {
        justifyContent: "space-between",
    },
    noTransform: {
        textTransform: 'none',
    },
}));


function Header() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    // const theme = useTheme();
    // const isXsSize = useMediaQuery(theme.breakpoints.down('xs'));

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Button color="inherit" className={classes.noTransform} target="_blank" href="https://sidepunch.co">sidepunch.co</Button>
                <Typography component="h1" variant="h6" >
                    RPAP
                </Typography>
                <Button color="inherit" className={classes.noTransform} onClick={handleClickOpen}>How to use</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"How to use RPAP"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <img src="/assets/how_to_use.gif" alt="how to use" width="100%" />
                            <Typography gutterBottom>
                                1. Copy data from Excel <br/>
                                2. Paste it in the input box <br/>
                                3. Enter a title <br/>
                                4. Click "SHUFFLE & RUN" button <br/>
                                5. Click the "LET'S START" button on the right <br/>
                                (You can click "Fullscreen" button on the top right first) <br/>
                                6. Click the "Next" button to see the next winner. <br/>
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Toolbar>
        </AppBar>
    );
}
    
export default Header;
