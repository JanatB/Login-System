import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import loginService from "../services/login";
import '../styles/styles.css'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorNotif, setErrorNotif] = useState('')
    const navigate = useNavigate();

    const loginSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await loginService.login({
                username, password
            })

            window.localStorage.setItem('loggedBlogUser', JSON.stringify(response))
            console.log(response)
            navigate('/main')
            setUsername("")
            setPassword("")

        } catch(error){
            console.log(error)
            setErrorNotif(error.response.data.error)
            setTimeout(() => {
                setErrorNotif(null)
            }, 3000)
            setUsername("")
            setPassword("")

        }
    }

    return (

        <div className="Login">
            <h2>Login</h2>
            <p>{errorNotif}</p>
            <input style={{marginBottom: '7px'}} type="text" placeholder="enter username" onChange={(e) => setUsername(e.target.value)} value={username}/> <br />
            <input style={{marginBottom: '7px'}} type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} value={password}/> <br />
            <button onClick={loginSubmit}>Submit</button>
        </div>
    )
    
}

export default LoginPage