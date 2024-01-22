import { useState } from "react";

import "./App.css"

import Todo from './components/Todo'
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import { Filter } from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      dia: '',
      isCompleted: false,      
    },    
  ])

  const [search, setSearch] = useState("");
  const [dia, setDia] = useState("");
  const [filtroDia, setFiltroDia] = useState("");

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("A-Z")

  const today = new Date() // get today's date
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1) // Add 1 to today's date and set it to tomorrow
  console.log("Tomorrow is", tomorrow.toDateString()) // 👉 Tomorrow is Mon Nov 07 2022

  const addTodo = (text, category, dia) => {

    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        dia,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>YOU GOT THIS</h1>
      
        <TodoForm addTodo={addTodo} />     
        <Search search={search} setSearch={setSearch} />
      
      
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} dia={dia} setDia={setDia} filtroDia={filtroDia} setFiltroDia={setFiltroDia}/>
      <div className="todo-list">
        {todos
          .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) => filtroDia === "Tudo" ? todo.dia : filtroDia === "Today" ? dia === today : todo.dia)
          
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort ((a, b) => sort === "A-Z" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((todo) => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              removeTodo={removeTodo}
              completeTodo={completeTodo}
          />    
        ))}
      </div>
      
    </div>
  );
}

export default App;
