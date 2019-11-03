const INITIAL_STATE = {
    round:1, 
    scoreUser:0, 
    scoreCom:0, 
    userImage:"", 
    comImage:"", 
    showButton:false, 
    disabelButton:false 
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLAY_ACTION':
            if(action.payload.round === 'End'){
                return { ...state,round:action.payload.round, 
                    scoreUser:action.payload.scoreUser, 
                    scoreCom:action.payload.scoreCom, 
                    userImage:action.payload.userImage,
                    comImage:action.payload.comImage, 
                    showButton:true, 
                    disabelButton:true 
                };
            }else {
                return { ...state,round:action.payload.round, 
                    scoreUser:action.payload.scoreUser, 
                    scoreCom:action.payload.scoreCom, 
                    userImage:action.payload.userImage,
                    comImage:action.payload.comImage 
                };
            }
        case 'INIT_GAME_VIEW':
            return { ...state, ...INITIAL_STATE};
        default:
            return state;
    }
};
