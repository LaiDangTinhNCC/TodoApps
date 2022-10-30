import React, {useState, useContext} from 'react';
import { DataContext } from './DataProvider';
//data ban dau
export default function FormInput() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState(''); //data ban dau trong
//xuat data
    const addTodo = e =>{
        e.preventDefault();
        setTodos([...todos, {name: todoName, complete: false}]);
        setTodoName('');
        //luu data vao local chuyen doi js => mang truyen vao (1)/DataProvider
        localStorage.setItem('todoStore', 
        JSON.stringify([...todos, {name: todoName, complete: false}]))
    }

  return (
    <form autoComplete='off' onSubmit={addTodo}>
        <input type="text" name="todos" id="todos" reuired placeholder="Add a todo app"
         value={todoName} 
         onChange={e => setTodoName(e.target.value.toLowerCase())} />
        <button type='submit'>Create</button>
      </form>
  )
}
