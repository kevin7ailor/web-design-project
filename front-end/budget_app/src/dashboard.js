import React from 'react'
import axios, { Axios } from 'axios';
import { useEffect, useState } from "react";
import CanvasJSReact from './canvasjs.react';
// import BudgetTracking from './budgetTracking';

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

  const incomeDataPoints = IncomeData.map((income) => ({
    y: income.incomeAmount,
    label: income.incomeSource,
  }));
  
  const expenseDataPoints = expenseData.map((expense) => ({
    y: expense.expenseAmount,
    label: expense.expenseSource,
  }));
  
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
      dataPoints: [...incomeDataPoints, ...expenseDataPoints]
    }]
  };

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
              <a className='nav-link' href="./budgetTracking">Budget Tracking</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="./incomesNexpenses">Add income/expense</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="./splitwise">Splitwise</a>
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
                  <p className="card-text">
                      {IncomeData.map((incomes) => (
                        <ul style={{listStyle: "none"}}>
                          <li>{incomes.incomeSource} : +${incomes.incomeAmount}</li>
                        </ul>
                      ))}
                  </p>
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
                  <p className="card-text">
                      {expenseData.map((expenses) => (
                        <ul style={{listStyle: "none"}}>
                          <li>{expenses.expenseSource} : -${expenses.expenseAmount}</li>
                        </ul>
                      ))}
                  </p>
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