import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import './styles/styles.css'


export default function App() {
  const navigate = useNavigate()

  return (
    <div className="default">
      <h1>User Login Page</h1> 

      <button className="defaultBtn" onClick={() => navigate('/signup')}>Sign up</button>
      <button className="defaultBtn" onClick={() => navigate('/login')}>Login</button>

      <Outlet />
      
    </div>
  );
}

