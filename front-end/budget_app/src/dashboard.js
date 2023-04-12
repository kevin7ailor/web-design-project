import React from 'react'
import { Chart } from "react-google-charts";
import axios, { Axios } from 'axios';

export const data = [
  ['Budget', 'Expenses'],
  ['Income', 1000],
  ['Grocery', 50],
  ['Rent', 450],
  ['Medical', 10],
  ['Utilities', 80],
  ['Insurance', 0]
];

export const options = {
  title: "Expenses",
};

export function showChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

function Dashboard() {

  axios.get('http://localhost:5000/getExpenseIncomeData.php').then(res => {
    console.log(res.data);
  });
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
            <li className='nav-item'>
              <span className="nav-link">Welcome &lt;Username&gt;</span>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="container-fluid col-12">
          <h1>Dashboard</h1>
          <div className='row'>
            <div className="card col-4 p-3 m-1">
              <div className="card-body">
                <h5 className="card-title">Summary</h5>
                <p className="card-text">Income: <span>$1000</span></p>
                <p className="card-text">Grocery: <span>$50</span></p>
                <p className="card-text">Rent: <span>$450</span></p>
                <p className="card-text">Medical: <span>$10</span></p>
                <p className="card-text">Utilities: <span>$80</span></p>
                <p className="card-text">Insurance Amount: <span>$0</span></p>
              </div>
            </div>

            <div className="col-4">
              <div className='card'>
                <div className='card-body'>
                  <div id="piechart">{showChart()}</div>
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