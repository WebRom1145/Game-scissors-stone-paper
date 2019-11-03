const INITIAL_STATE = {showOverlay:true, showGameArea:false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DISAPER_OVERLAY':
            return { ...state, showOverlay:action.payload.showOverlay, showGameArea:true};
        case 'INIT':
            return { ...state, ...INITIAL_STATE};
        default:
            return state;
    }
};
