import {useState} from 'react';
import './NoteFilter.scss';
import {useSelector} from 'react-redux';

export default function NoteFilter({data}) {
    const tags = useSelector( ({entities: {tags}}) => tags.allIds.map(id => tags.byId[id]) )
    const [selected, setSelected] = useState('');
    return (
        <div className='note-filter'>
            <div className="col-4 note-filter__inner-container">
                <select 
                className='note-filter__select'
                type='select'
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                >
                    {tags.map(o => (
                        <option key={o.id} value={o.id}>{o.text}</option>
                    ))}
                </select>
                <button className='note-filter__btn'>Показать</button>
            </div>
        </div>
    )
}