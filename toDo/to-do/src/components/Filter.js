import React from 'react'

export const Filter = ({ filter, setFilter, filtroDia, setFiltroDia}) => {
  return (
    <div className='filter'>
      <h2>Filtrar:</h2>
      <div className='filter-options'>
        <div>          
          <select value={filter} onChange={(e) => setFilter(e.target.value)}> 
            <option value="">Por status:</option>           
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <select  value={filtroDia} onChange={(e) => setFiltroDia(e.target.value)}> 
            <option value="">Por data:</option>                      
            <option value="Today">Hoje</option>
            <option value="Tomorrow">Amanhã</option>
            <option value="Late">Atrasadas</option>
          </select>                 
        </div>
        
      </div>

    </div>
  )
}
