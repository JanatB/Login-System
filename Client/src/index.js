import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/login";
import SignupPage from "./routes/signup";
import App from './App';
import Main from './routes/main';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
    <Routes>

      <Route path='/' element={<App />}>
        <Route index element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />}/>
        <Route path='login' element={<LoginPage />}/>
      </ Route>
      <Route path='main/:id' element={<Main />}/>

    </Routes> 
  </BrowserRouter>

);

