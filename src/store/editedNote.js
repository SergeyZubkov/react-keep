export default function(editedNote = null, action) {
    switch(action.type) {
        case 'SET_EDITED_NOTE':
            return action.id

        case 'RESET_EDITED_NOTE':
            return null
        
        default: 
            return editedNote
    }
}