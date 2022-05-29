import React from "react";
import axios from "axios";
const baseURL = '/api/user'

const signup = async (newUser) => {

    const response = await axios.post(baseURL, newUser)
    return response
}

const getUser = async (id) => {

    const response = await axios.get(`${baseURL}/${id}`)
    return response

}

export default { signup, getUser }