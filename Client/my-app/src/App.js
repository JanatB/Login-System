import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Form from "./Views/Form";
import List from "./Views/List"

function App() {

  return (
    <div>
      <nav>
        <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Form />}/>
        <Route path="/list" element={<List  />} />

      </Routes>

    </div>
  );
}

export default App;
