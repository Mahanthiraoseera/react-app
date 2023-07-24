import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0)
  const onAddHandler = e =>{
    e.preventDefault()
    setCount(count+1)
  }
  const onSubHandler = e =>{
    e.preventDefault()
    setCount(count-1)
  }
  const onResetHandler = e =>{
    e.preventDefault()
    setCount(0)
  }
  return (
    <div className="App">
        <h1>Counter App</h1>
        <button onClick={onAddHandler}>+</button>
        <p>{count}</p>
        <button onClick={onSubHandler}>-</button> <br />
        <button onClick={onResetHandler}>Reset</button>
      
    </div>
  );
}

export default App;
