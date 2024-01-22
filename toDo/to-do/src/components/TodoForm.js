import React from 'react'

import { useState } from "react";
import { Calendar } from 'primereact/calendar';

import { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions } from 'primereact/api';

     


addLocale('ptBr', {
    firstDayOfWeek: 0,
    dayNames: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
    dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    today: 'Hoje',
    clear: 'Limpar',
    //...
});
        

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
            <div className='campos'>
              <input className='tamanho'
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
              <div>
                  <Calendar className='tamanho' value={dia} onChange={(e) => setDia(e.target.value)}
                      placeholder="Escolha uma data" 
                      step={60}
                      dateFormat='dd/mm/yy'
                      showButtonBar   
                      readOnlyInput
                      showTime
                      locale='ptBr'                   
                      />                
              </div>   
            </div>          
            <button type='submit'>+</button>
        </form>
    </div>
  )
}

export default TodoForm