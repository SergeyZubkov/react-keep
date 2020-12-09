import NodeItem from "./NodeItem/NodeItem";
import './NoteList.scss';
import {useSelector} from 'react-redux';

export default function NoteList() {

    const noteIds = useSelector(({entities: {notes}}) => notes.allIds);
    const notesById = useSelector(({entities: {notes: {byId}}}) => byId)
    const filter = useSelector(({noteListFilterByTag}) => noteListFilterByTag)

    return (
        <div className="note-list">
            {
            noteIds
            .filter(id => {
                const note = notesById[id];
                return filter ? note.tags.some(tId => tId === filter) : true
            })
            .map(id => <NodeItem key={id} id={id} />)
            } 
        </div>
    )
}