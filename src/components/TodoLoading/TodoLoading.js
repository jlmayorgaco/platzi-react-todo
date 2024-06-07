import './TodoLoading.css';

function TodoLoading(){
    return (
        <>
            <div className='todo__loading'>
                <ul className='list__items'>
                    <li className='todo__item'></li>
                    <li className='todo__item'></li>
                    <li className='todo__item'></li>
                </ul>
            </div>
        </>
    )
}

export { TodoLoading }