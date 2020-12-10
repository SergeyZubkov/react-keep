import {HighlightWithinTextarea } from "react-highlight-within-textarea";
import {useSelector, useDispatch} from "react-redux";
import {
    updateNoteForm,
    clearNoteForm,
    createOrUpdateNote,
    toggleViewMode
} from '../store/actions';
import "./NoteForm.scss"

export default function NoteForm({show}) {
    const TAG_REGEXP = /#\S+/g
    const dispatch = useDispatch();

    let note = useSelector(({noteForm}) => noteForm);

    // нужны для редактирования 
    const tagsById = useSelector(({entities: {tags}}) => tags.byId);

    if (!show) {
        if (note) dispatch(clearNoteForm());
        return ''
    }

    if (!note) {
        note = {
            text: '',
            tags: []
        }
    } 
    // Если мы редактируем Note и массив tags[tagId, ...] не наполнен обектами
    if (note.tags.every(item => typeof item === 'string')) {
        
        note.tags = note.tags.map(id => tagsById[id])
    }


    const startCreateNote = () => {
        dispatch(createOrUpdateNote(note))
        if (note) {
            dispatch(clearNoteForm())
        }
        dispatch(toggleViewMode())
    }

    const prepareTags = (str) => {
        const tagTextList = (str.match(TAG_REGEXP)||[]).map(t => t.slice(1));

        return tagTextList.map(text => ({text}))
    }

    return (
        <div 
            className='note-form'
        >
            <HighlightWithinTextarea 
                className='note-form__input'
                containerClassName='note-form__input'
                value={note.text}
                highlight={TAG_REGEXP}
                onChange={e => dispatch(updateNoteForm({
                    ...note,
                    text: e.target.value,
                    tags: prepareTags(e.target.value)
                }))}
            />
            <div className='note-form__tags'>
                {note.tags.map(t => <div key={t.text} className='tag'> {t.text} </div>)}
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