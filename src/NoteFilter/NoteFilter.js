import './NoteFilter.scss';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setNoteListFilter} from '../store/actions';

export default function NoteFilter({data}) {
    const tags = useSelector( ({entities: {tags}}) => tags.allIds.map(id => tags.byId[id]) )
    const currentFilter = useSelector(({noteListFilterByTag}) => noteListFilterByTag)
    const defaultOption = {
        id: '',
        text: 'все'
    }
    tags.unshift(defaultOption)

    const [selected, setSelected] = useState(currentFilter)
    const dispatch = useDispatch();

    return (
        <div className='note-filter'>
            <div className="col-4 note-filter__inner-container">
                <select 
                className='note-filter__select'
                type='select'
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                disabled={!!currentFilter}
                >
                    {tags.map(o => (
                        <option key={o.id} value={o.id}>{o.text}</option>
                    ))}
                </select>
                <button 
                    className='note-filter__btn'
                    onClick={() => !currentFilter ? dispatch(setNoteListFilter(selected)) : dispatch(setNoteListFilter('')) }
                >{!currentFilter ? "Показать" : "Сбросить"}</button>
            </div>
        </div>
    )
}