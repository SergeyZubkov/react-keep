export default function(notes = {}, action) {
    switch(action.type) {
        case 'CREATE_NOTE':
            const {note} = action;
            return {
                byId: {
                    ...notes.byId,
                    [note.id]: {...note}
                },
                allIds: [
                    ...notes.allIds,
                    note.id
                ]
            }
        case 'EDIT_NOTE':
            const n = action.note;
            return {
                ...notes,
                byId: {
                    ...notes.byId,
                    [n.id]: {...n}
                }
            }

        case 'REMOVE_NOTE':
            const {id} = action;
            delete notes.byId[id]
            return {
                byId: {
                    ...notes.byId
                },
                allIds: notes.allIds.filter(i => i !== id)
            }

        default: 
            return notes
    }
}