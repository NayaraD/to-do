import React from 'react'

import { PiTrashBold } from "react-icons/pi";


const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <div className="content">
              <p>{todo.text}</p>
              <b className="category">
                {todo.category}
              </b>
              <div>
                {todo.dia.toString()}
              </div>
              
            </div>
            <div className='check-container'>
              <label class="container">
                <input onClick={() => completeTodo(todo.id)} type="checkbox"/>
                <span className="checkmark"></span>
              </label>
              
              <button className='trash' onClick={() => removeTodo(todo.id)}><PiTrashBold /></button>
            </div>
          </div>
  )
}

export default Todo