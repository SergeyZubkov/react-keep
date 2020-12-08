import {HighlightWithinTextarea } from "react-highlight-within-textarea";
import {useSelector, useDispatch} from "react-redux";
import {updateCreatingNote} from '../store/actions';
import "./NoteForm.scss"

export default function NoteForm({show}) {
    const value = useSelector(({noteInProgress}) => noteInProgress)
    const dispatch = useDispatch();
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
                value={value.text}
                highlight={/#\w+/g}
                onChange={e => dispatch(updateCreatingNote({
                    text: e.target.value,
                    tags: e.target.value.match(/#\w+/g)||[]
                }))}
            />
            <div className='note-form__tags'>
                {value.tags.map(t => <div className='tag'> {t.slice(1)} </div>)}
            </div>
        </div>
    )
}