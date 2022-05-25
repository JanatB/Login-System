import React, { useState } from "react";

export default function Signup(){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div>
            <h2>Signup Information</h2>
            <input type="text" placeholder="Enter Username" onChange={(e) => setUserName(e.target.value)}/> <br />
            <input type="text" placeholder="Enter Password"  onChange={(e) => setPassword(e.target.value)}/> <br />
            <button onClick={() => alert(`Submitted`)}>Submit</button>
        </div>
    )
}