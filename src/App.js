import './App.scss';
import NoteListFiltered from './NoteListFiltered/NoteListFiltered';
import NoteForm from './NoteForm/NoteForm';
import NoteList from './NoteList/NoteList';
import {useState} from 'react';



function App() {
  const [isViewMode, setIsViewMode] = useState(true)

  const addTask = () => {
    setIsViewMode(value => !value)
  }
  return (
    <div className="app">
      <div className='container' > 
        <div className='row'>
          <aside className='col-2'>
            <button
              className="create-note-btn"
              onClick={() => addTask()}
              style={{
                display: isViewMode ? '' : 'none'
              }}
            >
              Добавить заметку
            </button>
            <button
              className="create-note-btn"
              onClick={() => addTask()}
              style={{
                display: isViewMode ? 'none' : ''
              }}
            >
              Создать
            </button>
          </aside>  
          <main className='col-10'>
            <NoteListFiltered show={isViewMode}/>
            <NoteForm show={!isViewMode}/>
          </main>
        </div> 
      </div>
    </div>
  );
}

export default App;
