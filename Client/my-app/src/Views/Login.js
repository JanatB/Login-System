import React, {useState} from "react";

export default function Form() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div>
            <h2>Login Information</h2>
            <input type="text" placeholder="Enter Username" onChange={(e) => setUserName(e.target.value)}/> <br />
            <input type="text" placeholder="Enter Password"  onChange={(e) => setPassword(e.target.value)}/> <br />
            <button onClick={() => alert(`Submitted`)}>Submit</button>
        </div>
    )

}

// Very helpful: https://www.bezkoder.com/react-node-mongodb-auth/
// Also view: https://www.andrew-best.com/posts/learn-auth-the-hard-way-part-one/