import './App.css';
import DogImages from './components/DogImages';
import User from './components/User';

function App() {
  return (
    <div className='App'>
      <>
        <DogImages />
        <User name='Amala' />
      </>
    </div>
  );
}

export default App;
