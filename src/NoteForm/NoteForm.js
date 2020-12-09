import {HighlightWithinTextarea } from "react-highlight-within-textarea";
import {useSelector, useDispatch} from "react-redux";
import {
    updateCreatingNote,
    clearNoteForm,
    createNote,
    createTag,
    toggleViewMode
} from '../store/actions';
import "./NoteForm.scss"

export default function NoteForm({show}) {
    const dispatch = useDispatch();

    if (!show) {
        dispatch(clearNoteForm())
    }

    let note = useSelector(({noteInProgress}) => noteInProgress);

    if (!note) {
        note = {
            text: '',
            tags: []
        }
    }

    const startCreateNote = () => {
        note.tags = note.tags.map(str => {
            const createdTag =  dispatch(createTag(str)).tag;
            return createdTag.id
        })

        dispatch(createNote(note))
        dispatch(clearNoteForm())
        dispatch(toggleViewMode())
    }

    return (
        <div 
            className='note-form'
            style={{
                display: show ? '' : 'none'
            }}
        >
            <HighlightWithinTextarea 
                className='note-form__input'
                containerClassName='note-form__input'
                value={note.text}
                highlight={/#\S+/g}
                onChange={e => dispatch(updateCreatingNote({
                    text: e.target.value,
                    tags: (e.target.value.match(/#\S+/g)||[]).map(t => t.slice(1))
                }))}
            />
            <div className='note-form__tags'>
                {note.tags.map(t => <div className='tag'> {t} </div>)}
            </div>
            <div className='note-form__btns'>
                <button
                    className='note-form__create-btn'
                    onClick={() => startCreateNote()}
                >
                    Создать
                </button>
            </div>
        </div>
    )
}