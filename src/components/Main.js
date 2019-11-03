import React, { Component } from 'react';
import { connect } from 'react-redux';
import Overlay from './Overlay'
import GameView from './GameView'

class MainApp extends Component {
    
    showArea= () => {
        if(this.props.showOverlay){
        return  <Overlay></Overlay>
        }
        if(this.props.showGameArea){
        return <GameView maxRound={this.props.selectValue}></GameView>
        }
    }

    render(){
        return(
            <div>{this.showArea()}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showOverlay:state.mainReducer.showOverlay, 
        showGameArea:state.mainReducer.showGameArea,
        selectValue:state.overlayReducer.selectValue
    };
};
export default connect(mapStateToProps, {})((MainApp));
