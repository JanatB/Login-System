import React, { useState, useEffect } from "react";
import Task from "../Components/Task";
import axios from "axios";

export default function List(){
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    const baseURL = "http://localhost:3001/api"
    
    function getData(){
        // axios.get here
        axios.get(baseURL)
        .then(res => {
            res.data.map(returnedTask => {
                setTaskList(taskList => taskList.concat(returnedTask))
           })
        
        })
    }

    // useEffect here
    useEffect(getData, [])

    function displayData(){

        let testing = taskList.map((task, count) => {

            return (
                <div key={count}>
                    <Task data={task.task}/>
                </div>
            )
        })

        return (
            <div>
                {testing}
            </div>
        )
    }

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target);
        const value = Object.fromEntries(formData.entries());

        axios.post(baseURL, value).then((res) => {
            console.log(res.data)
            setTaskList(taskList => taskList.concat(value))

            // Reset the input field
            setTask("")
        })
        

    }

    return(

        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}> 
                <input name="task" type="text" onChange={(event) => setTask(event.target.value)} value={task} placeholder="Enter New Task" />
                <button type="submit">Submit</button>
            </form>

            {displayData()}
            
        </div>
    )
}