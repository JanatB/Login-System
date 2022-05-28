import React from "react";
import { Outlet, Link } from "react-router-dom";
import './styles/styles.css'


export default function App() {
  return (
    <div className="default">
      <h1>User Login Page</h1> 
      <nav>
        <Link to="/signup">Sign up</Link> |{" "}
        <Link to="/login">Log in</Link>
      </nav>

      <Outlet />
      
    </div>
  );
}

