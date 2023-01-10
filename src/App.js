import './App.css';
import Card from './components/card/default';
import Skeleton from './components/card/skeleton';
import DogImages from './components/DogImages';
import Input from './renderProps/Input';
import LoginUser from './components/login-user/index.jsx';
import Celcuius from './renderProps/temp/Celcuius';
import Fahreinheit from './renderProps/temp/Fahreinheit';
import User from './components/User';
import TodoState from './context/TodoState';
import TodoItem from './components/Todo/TodoItem';
import Todos from './components/Todo/Todos';

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
        <Skeleton />
        <Card name='Dog' />
        <LoginUser />

        <TodoState>
          <Todos />
        </TodoState>
      </>
    </div>
  );
}

export default App;
