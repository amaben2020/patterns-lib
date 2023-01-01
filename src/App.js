import './App.css';
import DogImages from './components/DogImages';
import Input from './components/Input';
import Celcuius from './components/temp/Celcuius';
import Fahreinheit from './components/temp/Fahreinheit';
import User from './components/User';

function App() {
  return (
    <div className='App'>
      <>
        <DogImages />
        <User name='Amala' />
        <Input
          render={(data) => (
            <>
              <Fahreinheit data={data} />
              <Celcuius data={data} />
            </>
          )}
        />
      </>
    </div>
  );
}

export default App;
