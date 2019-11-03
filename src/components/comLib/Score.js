import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    space: {
        marginBottom: '30px'
    },
    scoreIMGSize: {
        width: '80px'
    },
    textRound: {
        fontWeight: 'bold',
        fontSize: '2rem',
        textTransform: 'uppercase'
    },
    score:{
        fontSize: '2rem',
        padding: '5px'
    },
    divider:{
        marginTop: '10px',
        fontSize: '2rem',
        fontWeight: 'bold'
    }
})

const Score = (props) => {
    const { classes, round, scoreUser, scoreCom } = props;
    return (
        <Grid container direction="row" justify="space-around">
            <Grid item className={classes.space}>
                <img className={classes.scoreIMGSize} src={ require('../../assets/img/user.jpg') } />
            </Grid>
            <Grid item className={classes.space}>
            <Grid item><Typography className={classes.textRound}>Round {round}</Typography></Grid>
            <Grid item>
            <Grid container direction="row" justify="space-around">
            <Grid item>
            <Paper><Typography className={classes.score}>{scoreUser}</Typography></Paper>
            </Grid>
            <Grid item className={classes.divider}>:</Grid>
            <Grid item> <Paper><Typography className={classes.score}>{scoreCom}</Typography></Paper></Grid>
            </Grid>
            </Grid>
            </Grid>
            <Grid item className={classes.space}>
             <img className={classes.scoreIMGSize} src={ require('../../assets/img/android.jpg') } />
            </Grid>
        </Grid>
    );
};
export default withStyles(styles)(Score)  