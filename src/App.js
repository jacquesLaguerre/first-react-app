import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

const names = ['Gustavo', 'Gerly', 'Cassandra', 'Corwin', 'Jacques'
, 'Adi', 'Mido', 'Tyler', 'Brad', 'Captain Ed', 'Nick']

function App() { 
  const[myName, setMyName]= useState('Jacques')
  const[counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      {myName} is pretty damn cool.
        </p>
        {names.map(name=> (
          <button onClick={() => setMyName(name)}>{name}</button>
        ))}
        <button onClick={()=> setMyName('Ainis')}>Ainis</button>
        <button onClick={()=> setMyName('Corwin')}>Corwin</button>
        <button onClick={()=> setMyName('Jacques')}>Jacques</button>
        <p>You clicked the button {counter} time</p>
        <button onClick={() => setCounter (counter - 1)}>-1</button>
        <button onClick={() => setCounter (0)}>Reset</button>
        <button onClick={() => setCounter (counter + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
