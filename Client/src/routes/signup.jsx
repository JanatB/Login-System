import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SignupService from '../services/signup'

const SignupPage = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [notif, setNotif] = useState('')
    const navigate = useNavigate();
    
    const handleSignup = async () => {

        try {
            const newUser = {
                "firstname": firstname,
                "lastname": lastname, 
                "username": username, 
                "email": email, 
                "password": password

            } 
        
            const response = await SignupService.signup(newUser)
            setNotif('Successfully Signed in. Please log in now.')
            setFirstname('')
            setLastname('')
            setEmail('')
            setUsername('')
            setPassword('')

            console.log(response)
            setTimeout(() => {
                navigate('/login')
            }, 3000)

        } catch(error){
            setNotif(error.response.data.error)
            setTimeout(() => {   
                setNotif('')
            }, 3000)
        }
    }

    return (

        <div>
            <h2>Sign up</h2>
            <p>{notif}</p>
            <input style={{marginBottom: '7px'}} type="text" placeholder="enter firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname}/> <br />
            <input style={{marginBottom: '7px'}} type="text" placeholder="enter lastname" onChange={(e) => setLastname(e.target.value)} value={lastname}/> <br />
            <input style={{marginBottom: '7px'}} type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>  <br />
            <input style={{marginBottom: '7px'}} type="text" placeholder="enter username" onChange={(e) => setUsername(e.target.value)} value={username}/> <br />
            <input style={{marginBottom: '7px'}} type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} value={password}/> <br />
            <button onClick={handleSignup}>Submit</button>
        </div>
    )
}

export default SignupPage