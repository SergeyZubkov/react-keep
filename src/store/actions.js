import {nanoid} from 'nanoid';
import {isEqual, differenceWith} from 'lodash';
import store from './store';

export const setEditedNote = id => ({
    type: "SET_EDITED_NOTE",
    id
})  

export const resetEditedNote = () => ({
    type: "RESET_EDITED_NOTE"
})  

const removeUnlinkedTag = (id, parentNote) => {
    const notesById = store.getState().entities.notes.byId;
    const notesIds = store.getState().entities.notes.allIds;
    
    return notesIds.some(noteId => (noteId !== parentNote.id)&&notesById[noteId].tags.some(existedId => existedId === id) )
    ? null
    : store.dispatch(removeTag(id))
}

export const createNote = note => {
    note.tags = note.tags.map(tag => {
        const createdTag =  store.dispatch(createTag(tag)).tag;
        return createdTag.id
    })

    note.id = nanoid();

    return {
        type: "CREATE_NOTE",
        note
    }
}

export const updateNote = note =>  {
    // создаем копию части стейта, потому что его нельзя мутировать, и 
    // наполняем массив tags
    const existedNote = {...store.getState().entities.notes.byId[note.id]};
    existedNote.tags = existedNote.tags.map(id => store.getState().entities.tags.byId[id]);
    let action;
    
    // сравнить пришедший Note с уже имеющимся Note
    if (isEqual(note, existedNote)) {
        action = {
            type: "NOTE_NOT_CHANGED",
            note
        }
    } else {
        // преобразуем список Tag'ов на список их индефикаторов
        const getId = tag => {
            // создаем новые tag'и
            if (!tag.id) {
                return store.dispatch(createTag(tag)).tag.id
            }
            // обновляем по надобоности существующие tag'и
            else {
                const eT = existedNote.tags.find(eT => eT.id === tag.id);
                return isEqual(eT, tag) ? eT.id : store.dispatch(updateTag(tag)).tag.id
            }
        }
        note.tags = note.tags.map(getId)

        // Определяем нужно ли удалить Tag'и из обновляемой Note

        // порядок аргументов имеет значение, arr с большей длиной идет первым
        const removedTagIds = differenceWith(existedNote.tags.map(t => t.id), note.tags, isEqual)

        if (removedTagIds.length) {
            // Удаляем теги, на которые уже не ссылается ни одна Note
            removedTagIds.forEach((id) => removeUnlinkedTag(id, note))
        }

        action = {
            type: "EDIT_NOTE",
            note
        }
    }

    store.dispatch(resetEditedNote())

    return action
}

export const createTag = tag => {
    const {
        allIds,
        byId
    } = store.getState().entities.tags;

    const existedTag = byId[
        allIds.find(id => byId[id].text === tag.text )
    ];

    if (existedTag) return {
        type: "THIS_TAG_EXISIT",
        tag: existedTag
    };

    return {
        type: "CREATE_TAG",
        tag: {
            id: nanoid(),
            ...tag
        }
    }
}

export const updateTag = tag => ({
    type: "UPDATE_TAG",
    tag
})

export const removeTag = id => ({
    type: "REMOVE_TAG",
    id
})

export const removeNote = id => {
    const note = store.getState().entities.notes.byId[id];

    note.tags.forEach((id) => removeUnlinkedTag(id, note))

    return {
        type: "REMOVE_NOTE",
        id
    }
}

export const setNoteListFilter = filter => ({
    type: "SET_NOTE_LIST_FILTER",
    filter
})

export const toggleViewMode = () => {
    return {
        type: "TOGGLE_VIEW_MODE",
    }
}