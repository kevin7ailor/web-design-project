import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './signup';
import Login from './login';
import Dashboard from './dashboard';
import Form from './splitwise';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/splitwise' element={<Form/>}></Route>
    </Routes>
  </Router>
);
