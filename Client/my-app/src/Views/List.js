import React, { useState } from "react";

export default function List(){
    const [task, setTask] = useState("")
    
    function infoSubmit(){
        console.log(task)
    }

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target);
        const value = Object.fromEntries(formData.entries());
        console.log(value)

    }

    return(

        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <input name="task" type="text" onChange={(event) => setTask(event.target.value)} value={task} placeholder="Enter New Task" />
                <button onClick={infoSubmit} >Submit</button>
            </form>
            
        </div>
    )
}