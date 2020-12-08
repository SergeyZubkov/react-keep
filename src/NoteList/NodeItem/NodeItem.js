import './NodeItem.scss';
import {useSelector} from 'react-redux';
import Tag from '../../Tag/Tag';

export default function NodeItem({id}) {
    const note = useSelector(({entities: {notes}}) => notes.byId[id]);
    const {
        text,
        tags
    } = {...note}
    return (
        <div className='node-item'>
            <button className='node-item__btn-delete'>
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