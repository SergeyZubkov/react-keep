import './App.scss';
import NoteFilter from './NoteFilter/NoteFilter';
import NoteList from './NoteList/NoteList';

function App() {
  return (
    <div className="app">
      <div className='container' > 
        <div className='row'>
          <sidebar className='col-2'>
            <NoteFilter />
          </sidebar>  
          <main className='col-10'>
            <NoteList />
          </main>
        </div> 
      </div>
    </div>
  );
}

export default App;
