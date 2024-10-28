import { useState } from "react";

export default function TodoInput(props) {

  const {handleAddTodos, todoValue, setTodoValue} = props

  function handleOnKeyUp(e, todoValue) {
    if (e.key === 'Enter') {
      handleAddTodos(todoValue)
      setTodoValue('')
    }
  }

  return (
    <header>
      <input id="todosInput" onKeyUp={(e) => {
        handleOnKeyUp(e, todoValue)
      }} value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)
      }} placeholder="Enter todo..." />
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )

}
