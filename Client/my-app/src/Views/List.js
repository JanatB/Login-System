import React, { useState } from "react";
import axios from "axios";

export default function List(){
    const [task, setTask] = useState("")
    const baseURL = "http://localhost:3001/api"
    
    function infoSubmit(){
        console.log(task)
    }

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target);
        const value = Object.fromEntries(formData.entries());

        axios.post(baseURL, value).then((res) => {
            console.log(res.data)

            // Reset the input field
            setTask("")
        })
        

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