import React from "react";
import axios from "axios";
const baseURL = '/api/login'

const login = async (credentials) => {

    const response = await axios.post(baseURL, credentials)
    return response

}

export default { login }