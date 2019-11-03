import React from 'react';
import { Grid, Paper, Typography, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paper: {
            height: "110px",
            padding: "10px",
            minWidth: "98px"
    },
    space: {
        marginBottom: '30px'
    },
    scoreIMGSize: {
        width: '80px'
    }
  })

const Control = (props) => {
    const { classes, onclickStone, onclickScissors, onclickPaper, notActive } = props;
    return (
        <Grid container direction="row" justify="space-around">
            <Grid item className={classes.space}>
                <Button disabled={notActive} color="primary" onClick={onclickStone}>
                    <Paper className={classes.paper} >
                    <img className={classes.scoreIMGSize} src={ require('../../assets/img/stein-grau.png') } />
                    <Typography>Stone</Typography>
                    </Paper>
                </Button>
            </Grid>
            <Grid item className={classes.space}>
                <Button disabled={notActive} color="primary" onClick={onclickScissors}>
                    <Paper className={classes.paper} >
                    <img className={classes.scoreIMGSize} src={ require('../../assets/img/schere-grau.png') } />
                    <Typography>Scissors</Typography>
                    </Paper>
                </Button>
            </Grid>
            <Grid item className={classes.space}>
                <Button disabled={notActive} color="primary" onClick={onclickPaper}>
                    <Paper className={classes.paper} >
                    <img className={classes.scoreIMGSize} src={ require('../../assets/img/papier-grau.png') } />
                    <Typography>Paper</Typography>
                    </Paper>
                </Button>
            </Grid>
        </Grid>
    );
};
export default withStyles(styles)(Control)  