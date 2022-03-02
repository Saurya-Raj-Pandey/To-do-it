import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc ){
            alert("Your Title or Description musn't be empty");
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
    }
}
    return (
        <div className='container my-3'>
            <h3>Add Todays TODO</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text"value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="title-description"/>
                        <div id="title-description" className="form-text">Add your TODO LIST to start your productive day ahead.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">TODO Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
    
                <button type="submit" className="btn btn-sm btn-success">ADD TODO</button>
            </form>
        </div>
    )
}
