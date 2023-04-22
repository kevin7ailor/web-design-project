import { Alert } from 'bootstrap';
import './App.css';
// import './splitwise.css';

import { useState } from 'react';

export const Form = () => {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")

    let onSubmitFriendHandler = async (e) => {
        e.preventDefault();
        let res = await fetch("http://localhost:41062/www/CRUDpostrequests.php", {
            method: "POST",
            body: JSON.stringify({
                requestType: 'friend',
                firstName: firstName,
                lastName: lastName,
                email: email,
            }),
        });
        if (res.success) {
            setFirstName("");
            setLastName("");
            setEmail("");
        }
        console.log(res.message);
        alert("Friend Added!");
    };

    let onSubmitExpensesHandler = async (e) => {
        e.preventDefault();
        let res = await fetch("http://localhost:41062/www/CRUDpostrequests.php", {
            method: "POST",
            body: JSON.stringify({
                requestType: 'expenses',
                email: email,
                amount: amount,
                description: description,
            }),
        });
        if (res.success) {
            setEmail("");
            setAmount("");
            setDescription("");
        }
        console.log(res.message);
        alert("Expense Added!");
    
    };

    return (
        <div className="container-fluid splitwise">
            <div className='main'>

                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand m-2" href="#">Budget App</a>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className="nav-link" href="./Dashboard">Dashboard</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="./budgetTracking">Budget Tracking</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="./incomesNexpenses">Add income/expense</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link active' href="./splitwise">Splitwise</a>
                            </li>
                            {/* <li className='nav-item'>
              <span className="nav-link">Welcome &lt;Username&gt;</span>
            </li> */}
                        </ul>
                    </nav>
                </header>
                <div className='row'>
                    <div className='card col-5 m-4'>
                        <div className='card-body'>
                            <h2>Add Friends</h2>
                            <form onSubmit={onSubmitFriendHandler}>
                                <div>
                                    <label htmlFor="firstname">First Name</label>
                                    <input id="firstname"
                                        autoComplete="off"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text"
                                        className='form-control m-1' />
                                </div>
                                <div>
                                    <label htmlFor="lastname">Last Name</label>
                                    <input id="lastname"
                                        autoComplete="off"
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text" 
                                        className='form-control m-1'/>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input id="email"
                                        autoComplete="off"
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" 
                                        className='form-control m-1'/>
                                </div>

                                <button className='btn btn-primary m-1' type="submit" onClick={onSubmitFriendHandler}>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className='card col-5 m-4'>
                        <div className='card-body'>
                            <h2>Add Expenses</h2>
                            <form onSubmit={onSubmitExpensesHandler}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input className='form-control m-1' id="email"
                                        autoComplete="off"
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" />
                                </div>
                                <div>
                                    <label htmlFor="amount">Amount</label>
                                    <input className='form-control m-1' id="amount"
                                        autoComplete="off"
                                        onChange={(e) => setAmount(e.target.value)}
                                        type="number" />
                                </div>
                                <div>
                                    <label htmlFor="description">Description</label>
                                    <input className='form-control m-1' id="description"
                                        autoComplete="off"
                                        onChange={(e) => setDescription(e.target.value)}
                                        type="text" />
                                </div>
                                <button className='btn btn-primary m-1' type="submit" onClick={onSubmitExpensesHandler}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;