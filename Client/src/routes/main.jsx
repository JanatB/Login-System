import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import userService from '../services/signup'

const Main = () => {
    const value = useParams()
    const [user, setUser] = useState('')
    
    useEffect(() => {
        const func = async (id) => {
            const loggedUser = await userService.getUser(id)
            setUser(loggedUser.data)
            console.log(loggedUser.data.username)
        }

        func(value.id)
        
    }, [])

    console.log(user)

    return (
        <div>
            <h2>{user.firstname} ..... has successfully logged in!</h2>
        </div>
    )
}

export default Main