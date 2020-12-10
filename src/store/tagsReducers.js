export default function(tags = {}, action) {
    switch(action.type) {
        case 'CREATE_TAG':
            const {tag} = action;

            return {
                byId: {
                    ...tags.byId,
                    [tag.id]: {...tag}
                },
                allIds: [
                    ...tags.allIds,
                    tag.id
                ]
            }

        case 'UPDATE_TAG':
            const t = action.tag;

            return {
                ...tags,
                byId: {
                    ...tags.byId,
                    [t.id]: {...t}
                },
            }

        case 'REMOVE_TAG':
            const {id} = action;
            delete tags.byId[id]
            return {
                byId: {
                    ...tags.byId
                },
                allIds: tags.allIds.filter(i => i !== id)
            }

        default: 
            return tags
    }
}