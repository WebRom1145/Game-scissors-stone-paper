import React, { Component } from 'react';
import { Grid, Paper, Divider, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { playAction,handelGameRestart,setInitState } from '../actions';
import { connect } from 'react-redux';
import Score from './comLib/Score'
import ScoreArea from './comLib/ScoreArea';
import Control from './comLib/Control';


const styles = theme => ({
    paper: {
        padding:2,
        textAilgn: 'center',
        minWidth: '200px',
        width: '500px',
        padding: '15px',
        marginTop: '15px',
        height: '100%'
    },
    space: {
        marginBottom: '30px'
    },
    scoreIMGSize: {
        width: '80px'
    },
    divider: {
        marginBottom: '20px'
    }
})

class GameView extends Component {

    componentDidMount=()=>{
        this.props.setInitState()
    }
    
    onclickStone = () => {
       this.props.playAction(1, this.props.round, this.props.scoreUser, this.props.scoreCom, this.props.maxRound )
    }

    onclickScissors = () => {
        this.props.playAction(2, this.props.round, this.props.scoreUser, this.props.scoreCom, this.props.maxRound )
    }

    onclickPaper = () => {
        this.props.playAction(3, this.props.round, this.props.scoreUser, this.props.scoreCom, this.props.maxRound )  
    }

    showButton =() => {
        if(this.props.showButton){
            return <Grid container direction="row" justify="center"><Button  disabled={false} onClick={this.props.handelGameRestart} variant="contained" color="primary" >Game Restart</Button></Grid>
        }
    }
    render(){
    const { classes } = this.props;
    
    return (
        <Grid container direction="row" justify="center">
            <Paper className={classes.paper} elevation={2}>
                <Score round={this.props.round} scoreUser={this.props.scoreUser} scoreCom ={this.props.scoreCom}></Score>
                <Divider className={classes.divider}></Divider>
                <ScoreArea selectComActions={this.props.comImage} selectUserActions={this.props.userImage}></ScoreArea>
                <Divider className={classes.divider}></Divider>
                <Control
                    onclickStone={this.onclickStone}
                    onclickScissors={this.onclickScissors}
                    onclickPaper= {this.onclickPaper}  
                    notActive={this.props.disabelButton}    
                >
                </Control>
                {this.showButton()}
            </Paper>
        </Grid>
    
    
    );
    }
}

const mapStateToProps = state => {
    return {
        round:state.gameViewReducer.round,
        scoreUser:state.gameViewReducer.scoreUser, 
        scoreCom:state.gameViewReducer.scoreCom,
        userImage:state.gameViewReducer.userImage,
        comImage: state.gameViewReducer.comImage,
        showButton:state.gameViewReducer.showButton,
        disabelButton:state.gameViewReducer.disabelButton

    };
};

;
export default connect(mapStateToProps, {playAction,handelGameRestart, setInitState} )(withStyles(styles)(GameView));