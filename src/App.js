import './App.scss';
import NoteListFiltered from './NoteListFiltered/NoteListFiltered';
import NoteForm from './NoteForm/NoteForm';
import {useSelector, useDispatch} from 'react-redux';
import {toggleViewMode} from './store/actions';



function App() {
  const isViewMode = useSelector(({isViewMode}) => isViewMode);
  const dispatch = useDispatch();

  const toggleView = () => {
    dispatch(toggleViewMode())
  }

  return (
    <div className="app">
      <div className='container' > 
        <div className='row'>
          <aside className='app__aside col-md-2'>
            <button
              className="create-note-btn"
              onClick={() => toggleView()}
              style={{
                display: isViewMode ? '' : 'none'
              }}
            >
              Добавить заметку
            </button>
            <button
              className="create-note-btn"
              onClick={() => toggleView()}
              style={{
                display: isViewMode ? 'none' : ''
              }}
            >
              Отмена
            </button>
          </aside>  
          <main className='col-md-10'>
            <NoteListFiltered show={isViewMode}/>
            <NoteForm show={!isViewMode}/>
          </main>
        </div> 
      </div>
    </div>
  );
}

export default App;
