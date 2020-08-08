import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

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

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Button color="inherit" className={classes.noTransform}>How to use</Button>
                <Typography variant="h6">
                    RPAP - Random Pick and Presenter
                </Typography>
                <Button color="inherit" className={classes.noTransform} target="_blank" href="https://sidepun.ch">Side-Punch</Button>
            </Toolbar>
        </AppBar>
    );
}
    
export default Header;
