import NoteFilter from '../NoteFilter/NoteFilter';
import NoteList from '../NoteList/NoteList';

export default function NoteListFiltered() {
    return (
        <div 
            className="note-list-filtered"
        >
            <div className='app__note-filter-container'>
                <NoteFilter />
            </div>
            <NoteList />
        </div>
    )
}