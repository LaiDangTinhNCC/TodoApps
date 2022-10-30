import React, {useContext, useState} from 'react';
import { DataContext } from './DataProvider';

export default function Footer() {
  const [checkAll, setCheckAll]= useState(false)
  const [todos,setTodos] = useContext(DataContext)
// checkAll
  const handleCheckAll = () =>{
    const newTodos = [...todos]
    newTodos.forEach(todo =>{
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  //delete
  const deleteTodo = () =>{
    const newTodos = todos.filter(todo =>{
      return todo.complete === false
    })
    setTodos(newTodos)
    setCheckAll(false)
  }



  return (
    <div className='row'>
    <label htmlFor='all'>
      <input type="checkbox" name="all" id="all"
      onClick={handleCheckAll} checked={checkAll}/>
      ALL
    </label>
    <p>You have {todos.length} to do</p>
    <button id='delete' onClick={deleteTodo}>Delete</button>
  </div>
  )
}
