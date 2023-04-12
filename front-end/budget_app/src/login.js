import './signup_login.css';
import { Link, useNavigate } from "react-router-dom";
// import SignUp from './signup';
import './App.css';
import axios, { Axios } from 'axios';
import { useState } from 'react';
// import Dashboard from './dashboard';

function Login({ navigation }) {

  const navigate = useNavigate();

  const [inpval, setinpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const [span, setSpan] = useState(false);

  const getdata = (e) => {

    const { value, name } = e.target;
    console.log(value, name);

    setinpval(() => {

      return {
        ...inpval,
        [name]: value
      }
    })
  }
  const verifyUser = (e) => {
    e.preventDefault();
    const { email, password } = inpval;
    if (email == "") {
      alert("Please enter email!")
    } else if (password == "") {
      alert("Please enter password!")
    } else {

      axios.post("http://localhost:3000/final_project/login.php", inpval)
        .then((response) => {
          console.log(response.data);
          navigate('/dashboard');
        })
    }
  }
  return (
    <div className="App">
      <div className='main'>
        <h1>Login</h1>
        <input type="email" id="email" name="email" onChange={getdata} placeholder="E-mail" /><br />
        <input type="password" id="password" name="password" onChange={getdata} placeholder="Password" /><br />
        <input type="submit" onClick={verifyUser} value="Submit" />
        <nav>
          New User? <Link to="/">SignUp</Link> here!
        </nav>
      </div>
    </div>
  );
}


export default Login;