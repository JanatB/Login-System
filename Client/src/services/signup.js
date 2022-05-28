import React from "react";
import axios from "axios";
const baseURL = '/api/user'

const signup = async (newUser) => {

    const response = await axios.post(baseURL, newUser)
    return response
}

export default { signup }