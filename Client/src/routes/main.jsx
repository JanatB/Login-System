import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import userService from '../services/signup'
import '../styles/styles.css'

const Main = () => {
    const value = useParams()
    const [user, setUser] = useState('')
    const navigate = useNavigate();
    
    useEffect(() => {
        const func = async (id) => {
            const loggedUser = await userService.getUser(id)
            setUser(loggedUser.data)
            console.log(loggedUser.data.username)
        }

        func(value.id)
        
    }, [])

    const btnClicked = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <div>
            <div className="userContainer">
                <h2>User Information</h2>
                <div className="userInformation">
                    <img src='http://cdn.onlinewebfonts.com/svg/img_299586.png' className="defaultIcon"/>
                    <p>Firstname: {user.firstname}</p>
                    <p>Lastname: {user.lastname}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
                <button style={{marginTop: '15px'}} className="defaultBtn" onClick={btnClicked}>Log out</button>
            </div>
        </div>
    )
}

export default Main