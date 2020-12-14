import {HighlightWithinTextarea } from "react-highlight-within-textarea";
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {
    createNote,
    updateNote,
    toggleViewMode,
    resetEditedNote
} from '../store/actions';
import "./NoteForm.scss"
import {isEmpty} from 'lodash';

export default function NoteForm() {
    const TAG_REGEXP = /#\S+/g
    const dispatch = useDispatch();
    console.log('form mounting 1')

    
    // const [text, setText] = useState("");
    // const [tags, setTags] = useState([])

    const editedNoteId = useSelector(({editedNote}) => editedNote);
    let noteInitData = { ...useSelector(({entities: {notes}}) => notes.byId[editedNoteId]) }

        // нужны для наполнения редактируемой Note
    const tagsById = useSelector(({entities: {tags}}) => tags.byId);

    if (!isEmpty(noteInitData)&&noteInitData.tags.every(item => typeof item === 'string')) {
    // Если мы редактируем Note и массив tags[tagId, ...] не наполнен обектами
        noteInitData.tags = noteInitData.tags.map(id => tagsById[id])
    }

    const [text, setText] = useState(noteInitData.text||'');
    const [tags, setTags] = useState(noteInitData.tags||[])


    // useEffect(
    //     () => {
    //         if (!isEmpty(noteInitData)) {
    //             setText(noteInitData.text);
    //             setTags(noteInitData.tags);
    //         }
    //     }
    // , [editedNoteId])

    const clearForm = () => {
        setText('');
        setTags([])
    }

    const extractTags = (str) => {
        const tagTextList = (str.match(TAG_REGEXP)||[]).map(t => t.slice(1));

        return tagTextList.map(text => {
            const existedTag = noteInitData&&noteInitData.tags.find(t => t.text === text)
            return {
                ...existedTag,
                text
            }
        })
    }

    const handleChange = e => {
        const text = e.target.value;

        setText(text);

        setTags(
            extractTags(text)
        )
    }

    const note = {
        id: noteInitData.id,
        text,
        tags
    }

    const startCreateNote = () => {
        if (!text) return 

        if (noteInitData.id) {
            dispatch(updateNote(note));
        } else {
            dispatch(createNote(note));
        }

        clearForm()

        dispatch(toggleViewMode())
    }
    
    console.log(noteInitData.text)
    console.log('form mounting 2')
    return (
        <div 
            className='note-form'
        >
            <HighlightWithinTextarea 
                className='note-form__input'
                containerClassName='note-form__input'
                value={text}
                highlight={TAG_REGEXP}
                onChange={e => handleChange(e)}
            />
            <div className='note-form__tags'>
                {tags.map(t => <div key={t.text} className='tag'> {t.text} </div>)}
            </div>
            <div className='note-form__btns'>
                <button
                    className='note-form__create-btn'
                    onClick={() => startCreateNote()}
                >
                    {note.id ? "Обновить" : 'Создать'}
                </button>
            </div>
        </div>
    )
}