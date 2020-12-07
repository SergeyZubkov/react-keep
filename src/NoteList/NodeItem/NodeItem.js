import './NodeItem.scss';

export default function NodeItem() {
    return (
        <div className='node-item'>
            <button className='node-item__btn-delete'>
                {String.fromCharCode(10006)}
            </button>
            <div className='node-item__text'>
            Average hours played in total per person that have actually launched this game since March 2009. 
            </div>
        </div>
    )
}