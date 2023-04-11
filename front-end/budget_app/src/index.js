import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './signup';
import Login from './login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './dashboard';
import BudgetTracking from './budgetTracking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/budgetTracking' element={<BudgetTracking/>}></Route>
    </Routes>
  </Router>

);
