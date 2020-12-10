export default function(filter = '', action) {
    switch(action.type) {
        case 'SET_NOTE_LIST_FILTER':
            return action.filter
        
        default: 
            return filter
    }
}