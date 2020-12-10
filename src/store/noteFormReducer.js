export default function(note = null, action) {
    switch(action.type) {
        case 'UPDATE_NOTE_FORM':
            return {...action.note}

        case 'CLEAR_NOTE_FORM':
            return null
        
        default: 
            return note
    }
}