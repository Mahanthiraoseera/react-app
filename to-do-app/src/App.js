import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Todolist from './Todolist';

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const onChangeHandler = e => {
    setTodo(e.target.value)
  }
  const onClickHandler = e => {
    e.preventDefault();
    const newList = [...list,todo]
    setList(newList)
    setTodo("");
  }
  const onDeleteHandler = (indexValue) => {
    const newList = list.filter((todo, index) => index !== indexValue);
    setList(newList)
  }
  return (
    <div className="App">
        <h1 className='head'>Todo's</h1>
        <h3 className='head2'><span className='headSpan'>Create </span>Todo</h3>
        <form className='container1'>
          <input type='text' name='todo' placeholder='Type todo' className='todoInput' value={todo} onChange={onChangeHandler}/>
          <button className='submitBtn'onClick={onClickHandler}>ADD</button>
        </form>
        <h1 className='head3'>My Todo List</h1>
        <Todolist todolist = {list} deleteHandler={onDeleteHandler}/>
    </div>
  );
}

export default App;
