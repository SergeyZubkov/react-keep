import {nanoid} from 'nanoid';
import store from './store';

export const updateCreatingNote = note => ({
    type: "UPDATE_CREATING_NOTE",
    note
})  

export const createNote = note => {
    note.id = nanoid();

    return {
        type: "CREATE_NOTE",
        note
    }
}

export const clearNoteForm = () => ({
    type: "CLEAR_NOTE_FORM"
})

export const createTag = text => {
    const {
        allIds,
        byId
    } = store.getState().entities.tags;

    const existedTag = byId[allIds.find(id => byId[id].text === text )];

    if (existedTag) return {
        type: "THIS_TAG_EXISIT",
        tag: existedTag
    };

    const tag = {
        id: nanoid(),
        text
    }

    return {
        type: "CREATE_TAG",
        tag
    }
}

export const removeNote = id => ({
    type: "REMOVE_NOTE",
    id
})

export const setNoteListFilter = filter => ({
    type: "SET_NOTE_LIST_FILTER",
    filter
})

export const toggleViewMode = () => {
    return {
        type: "TOGGLE_VIEW_MODE",
    }
}