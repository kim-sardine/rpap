import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
}));


function Header() {
    const classes = useStyles();

    return (
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
                Random Picker and Presenter
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
                With RPAP, you can randomly draw and announce the winners during the event.
            </Typography>
        </Container>
    );
}
    
export default Header;
