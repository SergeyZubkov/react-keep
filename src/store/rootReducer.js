export default (state, action) => {
    switch (action.type) {
        case 'UPDATE_CREATING_NOTE': 
            return {
                ...state,
                noteInProgress: {...action.note}
            }

        case 'CLEAR_NOTE_FORM':
            return {
                ...state,
                noteInProgress: null
            }

        case 'CREATE_NOTE': 
            const note = action.note;

            return {
                ...state,
               entities: {
                   ...state.entities,
                   notes: {
                        byId: {
                            ...state.entities.notes.byId,
                            [note.id]: note
                        },
                        allIds: [...state.entities.notes.allIds, note.id]
                }
               }
            }
        
        case 'REMOVE_NOTE':
            const id = action.id;
            delete state.entities.notes.byId[id]

            return {
                ...state,
                entities: {
                   ...state.entities,
                   notes: {
                        byId: {
                            ...state.entities.notes.byId
                        },
                        allIds: state.entities.notes.allIds.filter(nI => nI !== id)
                    }
                }
            }

        case 'CREATE_TAG':
            const tag = action.tag;

            return {
                ...state,
               entities: {
                   ...state.entities,
                   tags: {
                        byId: {
                            ...state.entities.tags.byId,
                            [tag.id]: tag
                        },
                        allIds: [...state.entities.tags.allIds, tag.id]
                }
               }
            }

        case 'SET_NOTE_LIST_FILTER':
            const filter = action.filter;

            return {
                ...state,
                noteListFilterByTag: filter
            }

        case 'TOGGLE_VIEW_MODE':
            return {
                ...state,
                isViewMode: !state.isViewMode
            }
    

        default: 
            return state
    }
}