import { combineReducers } from "redux";
import mainReducer from './mainReducer';
import gameViewReducer from './gameViewReducer';
import overlayReducer from './overlayReducer';

export default combineReducers ({
    mainReducer:mainReducer,
    gameViewReducer:gameViewReducer,
    overlayReducer:overlayReducer
});