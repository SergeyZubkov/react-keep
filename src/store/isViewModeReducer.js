export default function(isViewMode = true, action) {
    switch(action.type) {
        case 'TOGGLE_VIEW_MODE':
            return !isViewMode
        
        default: 
            return isViewMode
    }
}