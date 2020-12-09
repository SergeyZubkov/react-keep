import './NodeItem.scss';
import {useSelector, useDispatch} from 'react-redux';
import Tag from '../../Tag/Tag';
import {removeNote} from '../../store/actions';

export default function NodeItem({id}) {
    const note = useSelector(({entities: {notes}}) => notes.byId[id]);
    const dispatch = useDispatch();
    const {
        text,
        tags
    } = {...note}

    return (
        <div className='node-item'>
            <button 
                className='node-item__btn-delete'
                onClick={() => dispatch(removeNote(id))}
            >
                {String.fromCharCode(10006)}
            </button>
            <div className='node-item__text'>
                {text} 
            </div>
            <div className='node-item__tags'>
                {tags.map(id => <Tag key={id} id={id} />)}
            </div>
        </div>
    )
}