const INITIAL_STATE = {selectValue:''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_SELECT':
            return { ...state, selectValue:action.payload};
        case 'INIT':
            return { ...state, ...INITIAL_STATE};
        default:
            return state;
    }
};
