import React from 'react';
import IncItem from './IncItem';
import ExpItem from './ExpItem';
import { useEffect, useState } from "react";
import axios, { Axios } from 'axios';
import './config';
import { v4 as uuidv4 } from 'uuid';

class IncomeExpense extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            userEmail: '',
            incomeType: '',
            incomeSource: '',
            incomeAmount: 0.0,
            month: '',
            year: 0,
            expenseType: '',
            expenseSource: '',
            expenseAmount: 0,
            IncSources: [],
            ExpSources: [],
            displayAddNewIncForm: false,
            displayAddNewExpForm: false,
            displayAddNewIncButton: true,
            displayAddNewExpButton: true,
        };
        this.IncForm = React.createRef();
        this.IncSrcType = React.createRef();
        this.IncSrcName = React.createRef();
        this.IncSrcAmount = React.createRef();
        this.FormUserEmail = React.createRef();
        this.AddIncSrc = React.createRef();

        this.ExpForm = React.createRef();
        this.ExpSrcType = React.createRef();
        this.ExpSrcName = React.createRef();
        this.ExpSrcAmount = React.createRef();
        this.AddExpSrc = React.createRef();

    }



    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    handleIncomeSubmit = event => {

        if (this.state.userEmail === "" || this.state.incomeType === "" || this.state.incomeSource === "" || this.state.incomeAmount === 0 || this.state.month === '' || this.state.year === 0) {
            alert('Please enter details!');
        } else {
            this.setState({
                IncSources: this.state.IncSources.concat(<IncItem id={uuidv4()} userEmail={this.state.userEmail} incomeType={this.state.incomeType} incomeSource={this.state.incomeSource} incomeAmount={this.state.incomeAmount} month={this.state.month} year={this.state.year} handleIncDelete={this.handleIncDelete} />)
            },)

            event.preventDefault();
            fetch('http://localhost:5000/www/capstone_proj/budget_app/backend/incomes.php', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userEmail: this.state.userEmail,
                    incomeType: this.state.incomeType,
                    incomeSource: this.state.incomeSource,
                    incomeAmount: this.state.incomeAmount,
                    month: this.state.month,
                    year: this.state.year
                })
            })
                .then(response => response)

            var temp = this.state.incomeAmount;
            global.config.globalVariables.Calculations.TotalInc = Number(global.config.globalVariables.Calculations.TotalInc) + Number(temp);
            document.getElementById('incomeHeading').innerHTML = `Income: $${global.config.globalVariables.Calculations.TotalInc}\n`;

            this.setState({ displayAddNewIncForm: false });
            this.setState({ displayAddNewIncButton: true });
            this.setState({ incomeSource: '' });
            this.setState({ incomeType: '' });
            this.setState({ incomeAmount: 0 });
            this.setState({ userEmail: '' });

        }

    }


    handleExpenseSubmit = event => {

        if (this.state.userEmail === "" || this.state.expenseType === "" || this.state.expenseSource === "" || this.state.expenseAmount === 0 || this.state.month === '' || this.state.year === 0) {
            alert('Please enter details!');
        } else {

            event.preventDefault();

            this.setState({
                ExpSources: this.state.ExpSources.concat(<ExpItem id={uuidv4()} userEmail={this.state.userEmail} expenseType={this.state.expenseType} expenseSource={this.state.expenseSource} expenseAmount={this.state.expenseAmount} month={this.state.month} year={this.state.year} handleExpDelete={this.handleExpDelete} />)
            },)

            fetch('http://localhost:5000/www/capstone_proj/budget_app/backend/expenses.php', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userEmail: this.state.userEmail,
                    expenseType: this.state.expenseType,
                    expenseSource: this.state.expenseSource,
                    expenseAmount: this.state.expenseAmount,
                    month: this.state.month,
                    year: this.state.year
                })
            })
                .then(response => response.json())

            var temp = this.state.expenseAmount;
            global.config.globalVariables.Calculations.TotalExp = Number(global.config.globalVariables.Calculations.TotalExp) + Number(temp);
            document.getElementById('expenseHeading').innerHTML = `Expense: $${global.config.globalVariables.Calculations.TotalExp}\n`;

            this.setState({ displayAddNewExpForm: false });
            this.setState({ displayAddNewExpButton: true });
            this.setState({ expenseSource: '' });
            this.setState({ expenseType: '' });
            this.setState({ expenseAmount: 0 });
            this.setState({ userEmail: '' });
        };
    }


    handleIncDelete = (IncItem) => {
        global.config.globalVariables.Calculations.TotalInc = Number(global.config.globalVariables.Calculations.TotalInc) - Number(IncItem.props.incomeAmount);
        document.getElementById('incomeHeading').innerHTML = `Income: $${Number(global.config.globalVariables.Calculations.TotalInc)}\n`;
        this.setState({
            IncSources: this.state.IncSources.filter((item) => IncItem.props.id !== item.props.id)
        })
    };

    handleExpDelete = (ExpItem) => {
        global.config.globalVariables.Calculations.TotalExp = Number(global.config.globalVariables.Calculations.TotalExp) - Number(ExpItem.props.ExpAmount);
        document.getElementById('expenseHeading').innerHTML = `Expense: $${Number(global.config.globalVariables.Calculations.TotalExp)}\n`;
        this.setState({
            ExpSources: this.state.ExpSources.filter((item) => ExpItem.props.id !== item.props.id)
        })
    };

    displayIncContents = () => {
        this.setState({ displayAddNewIncForm: true });
        this.setState({ displayAddNewIncButton: false });
    };

    displayExpContents = () => {
        this.setState({ displayAddNewExpForm: true });
        this.setState({ displayAddNewExpButton: false });
    };


    cancelInc = () => {
        this.setState({ displayAddNewIncForm: false });
        this.setState({ displayAddNewIncButton: true });
        this.setState({ incomeSource: '' });
        this.setState({ incomeType: '' });
        this.setState({ incomeAmount: 0 });
        this.setState({ userEmail: '' });
    }

    cancelExp = () => {
        this.setState({ displayAddNewExpForm: false });
        this.setState({ displayAddNewExpButton: true });
        this.setState({ expenseSource: '' });
        this.setState({ expenseType: '' });
        this.setState({ expenseAmount: 0 });
        this.setState({ userEmail: '' });
    }



    render() {

        return (
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        <div className='card p-2 mb-2'>
                            <h1>Income & Expenses</h1>
                            <div className='card-body'>
                                <div className='row'>
                                    <form>
                                        <div className='col-3 m-1'>
                                            <div className='form-floating'>
                                                <select name="month" id="floatingSelect" className='form-select' value={this.state.month} onChange={this.handleChange} ref={this.month}>
                                                    <option value="JANUARY">JANUARY</option>
                                                    <option value="FEBRUARY">FEBRUARY</option>
                                                    <option value="MARCH">MARCH</option>
                                                    <option value="APRIL">APRIL</option>
                                                    <option value="MAY">MAY</option>
                                                    <option value="JUNE">JUNE</option>
                                                    <option value="JULY">JULY</option>
                                                    <option value="AUGUST">AUGUST</option>
                                                    <option value="SEPTEMBER">SEPTEMBER</option>
                                                    <option value="OCTOBER">OCTOBER</option>
                                                    <option value="NOVEMBER">NOVEMBER</option>
                                                    <option value="DECEMBER">DECEMBER</option>
                                                </select>
                                                <label htmlFor="floatingSelect">Month:</label>
                                            </div>
                                        </div>
                                        <div className='col-3 m-1'>
                                            <div className='form-floating'>
                                                <select className='form-select' id="floatingSelect" name="year" value={this.state.year} onChange={this.handleChange} ref={this.year}>
                                                    <option value="2011">2011</option>
                                                    <option value="2012">2012</option>
                                                    <option value="2013">2013</option>
                                                    <option value="2014">2014</option>
                                                    <option value="2015">2015</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2021">2021</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                </select>
                                                <label className='floatingSelect'>Year:</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-header">
                                    <h2 className='card-title' id="incomeHeading">Income: $</h2>
                                </div>

                                {this.state.displayAddNewIncButton &&
                                    <input id="addIncNew" type="button" value="Add New Source" onClick={this.displayIncContents} className="btn btn-primary" ref={this.AddIncSrc} />}

                                {this.state.displayAddNewIncForm &&
                                    <div id="addNewIncForm" ref={this.IncForm}>
                                        <label>Adding New Income:</label><br />
                                        <input
                                            type="text"
                                            className='form-control'
                                            name="userEmail"
                                            placeholder="User Email"
                                            required
                                            value={this.state.userEmail}
                                            ref={this.state.FormUserEmail}
                                            onChange={this.handleChange} />
                                        <br />
                                        <input
                                            type="text"
                                            className='form-control'
                                            name="incomeType"
                                            placeholder="Income Type"
                                            required
                                            value={this.state.incomeType}
                                            ref={this.state.IncSrcType}
                                            onChange={this.handleChange} />

                                        <br />
                                        <input
                                            type="text"
                                            className='form-control'
                                            name="incomeSource"
                                            placeholder="Income Source"
                                            required
                                            value={this.state.incomeSource}
                                            ref={this.state.IncSrcName}
                                            onChange={this.handleChange} />

                                        <br />
                                        <input
                                            type="text"
                                            className='form-control'
                                            name="incomeAmount"
                                            placeholder="Income Amount"
                                            required
                                            value={this.state.incomeAmount}
                                            ref={this.state.IncSrcAmount}
                                            onChange={this.handleChange} />

                                        <br />
                                        <input
                                            id="submitButton"
                                            type="submit"
                                            value="Add +"
                                            className="btn btn-primary m-1"
                                            onClick={this.handleIncomeSubmit} />
                                        <input
                                            id="cancelButton"
                                            type="button"
                                            value="Cancel"
                                            className="btn btn-primary m-1"
                                            onClick={this.cancelInc} />
                                        <h2 id="error"></h2>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div className="card expenses">
                            <div className="card-body expenseSources">
                                <div className="card-header header">
                                    <h2 id="expenseHeading">Expense: $</h2>
                                </div>


                                {this.state.displayAddNewExpButton &&
                                    <input id="addExpNew" type="button" value="Add New Expense" onClick={this.displayExpContents} className="btn btn-primary" ref={this.AddExpSrc} />}

                                {this.state.displayAddNewExpForm &&
                                    <div id="addNewExpForm" ref={this.ExpForm}>
                                        <label>Adding New Expense:</label><br />
                                        <input
                                            type="text"
                                            name="userEmail"
                                            className='form-control'
                                            placeholder="User Email"
                                            required
                                            value={this.state.userEmail}
                                            ref={this.state.FormUserEmail}
                                            onChange={this.handleChange} />
                                        <br />
                                        <input
                                            type="text"
                                            name="expenseType"
                                            className='form-control'
                                            placeholder="Expense Type"
                                            required
                                            value={this.state.expenseType}
                                            ref={this.state.ExpSrcType}
                                            onChange={this.handleChange} />

                                        <br />
                                        <input
                                            type="text"
                                            name="expenseSource"
                                            className='form-control'
                                            placeholder="Expense Source"
                                            required
                                            value={this.state.expenseSource}
                                            ref={this.state.ExpSrcName}
                                            onChange={this.handleChange} />

                                        <br />
                                        <input
                                            type="text"
                                            className='form-control'
                                            name="expenseAmount"
                                            placeholder="Expense Amount"
                                            required
                                            value={this.state.expenseAmount}
                                            ref={this.state.ExpSrcAmount}
                                            onChange={this.handleChange} />

                                        <br />
                                        <input
                                            id="submitButton"
                                            type="submit"
                                            value="Add +"
                                            className="btn btn-primary m-1"
                                            onClick={this.handleExpenseSubmit} />
                                        <input
                                            id="cancelButton"
                                            type="button"
                                            value="Cancel"
                                            className="btn btn-primary m-1"
                                            onClick={this.cancelExp} />
                                        <h2 id="error"></h2>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default IncomeExpense;