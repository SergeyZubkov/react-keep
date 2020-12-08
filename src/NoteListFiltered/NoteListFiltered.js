import NoteFilter from '../NoteFilter/NoteFilter';
import NoteList from '../NoteList/NoteList';

export default function NoteListFiltered({show}) {
    return (
        <div 
            className="note-list-filtered"
            style={{
                display: show ? '' : 'none'
            }}
        >
            <div className='app__note-filter-container'>
                <NoteFilter />
            </div>
            <NoteList />
        </div>
    )
}