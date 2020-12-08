export default (state, action) => {
    switch (action.type) {
        case 'UPDATE_CREATING_NOTE': 
            return {
                ...state,
                noteInProgress: {...action.note}
            }

        default: 
            return state
    }
}