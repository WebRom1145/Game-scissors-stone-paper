import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    space: {
        marginBottom: '30px'
    },
    scoreIMGSize: {
        width: '140px'
    }
})

const ScoreArea = (props) => {
    const { classes, selectUserActions, selectComActions } = props;
    return (
        <Grid container direction="row" justify="space-around">
            <Grid item className={classes.space}>
            <img className={classes.scoreIMGSize} src={ selectUserActions } />
            </Grid>
            <Grid item className={classes.space}>
            <img className={classes.scoreIMGSize} src={ require('../../assets/img/versus.png') } /> 
            </Grid>
            <Grid item className={classes.space}>
            <img className={classes.scoreIMGSize} src={ selectComActions } />
            </Grid>
        </Grid>
    );
};
export default withStyles(styles)(ScoreArea)  