import NodeItem from "./NodeItem/NodeItem";
import './NoteList.scss';
import {useSelector} from 'react-redux';

export default function NoteList() {

    const noteIds = useSelector(({entities: {notes}}) => notes.allIds);

    return (
        <div className="note-list">
            {noteIds.map(id => <NodeItem key={id} id={id} />)} 
        </div>
    )
}