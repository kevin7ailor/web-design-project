import React from 'react'
import axios, { Axios } from 'axios';
import { useEffect, useState } from "react";
import CanvasJSReact from './canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Dashboard() {
  const [IncomeData, setIncomeData] = useState([]);
  useEffect(() => {
    getIncomeData();
  }, []);

  function getIncomeData() {
    axios.get('http://localhost:41062/www/incomeData.php').then(response => {
      console.log(response.data);
      setIncomeData(response.data);
    });
  }

  const [expenseData, setExpenseData] = useState([]);
  useEffect(() => {
    getExpenseData();
  }, []);

  function getExpenseData() {
    axios.get('http://localhost:41062/www/expenseData.php').then(response => {
      console.log(response.data);
      setExpenseData(response.data);
    });
  }

  function mergeSameTypes() {
    const sumAmount = 0;

    console.log(expenseData);
  }

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "dark1", "dark2"
    title: {
      text: "Incomes / Expenses report"
    },
    data: [{
      type: "pie",
      indexLabel: "{label}: ${y}",
      startAngle: -90,
      dataPoints: [
        { y: IncomeData.incomeAmount, label: IncomeData.incomeType },
        { y: expenseData.expenseAmount, label: expenseData.expenseType },
        { y: 20, label: "Accomodation" },
        { y: 14, label: "Transportation" },
        { y: 12, label: "Activities" },
        { y: 10, label: "Misc" }
      ]
    }]
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand m-2" href="#">Budget App</a>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className="nav-link active" href="#Dashboard">Dashboard</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#budget">Manage Budget</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#profile">Profile</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#logout">Logout</a>
            </li>
            {/* <li className='nav-item'>
              <span className="nav-link">Welcome &lt;Username&gt;</span>
            </li> */}
          </ul>
        </nav>
      </header>
      <main>
        <div className="container-fluid col-12">
          <h1>Dashboard</h1>
          <div className='row'>
          <div className=' col-3 p-1 m-2'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Incomes</h5>
                  <p className="card-text">{IncomeData.incomeType}: <span>${IncomeData.incomeAmount}</span></p>
                </div>
              </div>
            </div>
            
            <div className="col-5 p-1 m-5 mt-2">
              <div className='card'>
                <div className='card-body'>
                  <div id="piechart">
                    <CanvasJSChart options={options} /* onRef={ref => this.chart = ref} */ />
                  </div>
                </div>
              </div>
            </div>
            
            <div className='col-3 p-1 m-2'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Expenses</h5>
                  <p className="card-text">{expenseData.expenseType}: <span>${expenseData.expenseAmount}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default Dashboard