import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Form from "./Views/Login";
import List from "./Views/List"
import Signup from "./Views/Signup"

function App() {

  return (
    <div>
      <nav>
        <Link to="/list">List</Link> <br />
        <Link to="/logIn">Login</Link> <br />
        <Link to="/signUp">Sign Up</Link>
      </nav>
      <Routes>
        <Route path="/logIn" element={<Form />}/>
        <Route path="/list" element={<List  />} />
        <Route path="/signUp" element={<Signup />}/>

      </Routes>

    </div>
  );
}

export default App;
