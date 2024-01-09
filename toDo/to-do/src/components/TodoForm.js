import React from 'react'


import { useState } from "react";
import Calen from './Calen';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [dia, setDia] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!value || !category || !dia) return;
        addTodo(value,category,dia);
        setValue ("");
        setCategory ("");  
        setDia ("");     
    };
  return (
    <div className='todo-form'>
        <h2>Nova tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Digite o título' 
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option> 
                <option value="Outros">Outros</option>           
            </select>
            <p>
                <Calen value={dia} onChange={(e) => setDia(e.target.value)} 
                    placeholder="Escolha data e hora"      
                    format="dd-MMM-yy"
                    step={60}>
                </Calen>
            </p>

            
            <button type='submit'>+</button>
        </form>
    </div>
  )
}

export default TodoForm