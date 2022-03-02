import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <>
    <div>
    
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>                                      
                                                              {/* this does is when you call the todo it display */}
      <button className='btn btn-sm  btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    <hr/>
    </>
  )
}
