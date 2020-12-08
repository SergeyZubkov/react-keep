import './Tag.scss';
import {useSelector} from 'react-redux';

export default function NodeItem({id}) {
    const {
        text
    } = useSelector(({entities: {tags}}) => tags.byId[id])
    return (
        <div className='tag'>
           {text}
        </div>
    )
}