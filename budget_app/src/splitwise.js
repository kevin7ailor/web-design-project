import './App.css';
import './splitwise.css';

import { useState } from 'react';

export const Form = () => {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")

    let onSubmitFriendHandler = async (e) => {
        e.preventDefault();
        let res = await fetch("http://localhost/splitwise/CRUDPostRequestsOps.php", {
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
    };

    let onSubmitExpensesHandler = async (e) => {
        e.preventDefault();
        let res = await fetch("http://localhost/splitwise/CRUDPostRequestsOps.php", {
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
    };

    return (
        <div className="splitwise">
            <div className='main'>
                <header>Splitwise</header>
                <div className='friends'>
                    <h2>Add Friends</h2>
                    <form onSubmit={onSubmitFriendHandler}>
                        <div>
                            <label htmlFor="firstname">First Name</label>
                            <input id="firstname"
                                   autoComplete="off"
                                   onChange={(e)=> setFirstName(e.target.value)}
                                   type="text"/>
                        </div>
                        <div>
                            <label htmlFor="lastname">Last Name</label>
                            <input id="lastname"
                                   autoComplete="off"
                                   onChange={(e)=> setLastName(e.target.value)}
                                   type="text"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email"
                                   autoComplete="off"
                                   onChange={(e)=> setEmail(e.target.value)}
                                   type="email"/>
                        </div> 
                        <div id='balance'>
                            <label htmlFor="balance">Balance</label>
                        </div>
                        <button type="submit" onClick={onSubmitFriendHandler}>Submit</button>
                    </form>
                </div>
                <div className='expenses'>
                    <h2>Add Expenses</h2>
                    <form onSubmit={onSubmitExpensesHandler}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email"
                                   autoComplete="off"
                                   onChange={(e)=> setEmail(e.target.value)}
                                   type="email"/>
                        </div>
                        <div>
                            <label htmlFor="amount">Amount</label>
                            <input id="amount"
                                   autoComplete="off"
                                   onChange={(e)=> setAmount(e.target.value)}
                                   type="number"/>
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <input id="description"
                                   autoComplete="off"
                                   onChange={(e)=> setDescription(e.target.value)}
                                   type="text"/>
                        </div>
                        <button type="submit" onClick={onSubmitExpensesHandler}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;