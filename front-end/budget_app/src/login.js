// import './signup_login.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

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
    if (email === "") {
      alert("Please enter email!")
    } else if (password === "") {
      alert("Please enter password!")
    } else {

      axios.post("http://localhost:41062/www/login.php", inpval)
        .then((response) => {
          var responseData;
          responseData = response.data[0].Message;
          if (responseData === "Success") {
            //Success
            navigate('/dashboard');
          } else {
            //No account yet or Wrong password, Please re-enter!
            //alert(responseData);
            alert(responseData);

          }
        })
    }
  }
  return (
    <div className="container-fluid App">
      <div className="center-block">
        <div className='card col-3 m-3 p-3'>
          <h1>Login</h1>
          <input className="form-control" type="email" id="email" name="email" onChange={getdata} placeholder="E-mail" /><br />
          <input className="form-control" type="password" id="password" name="password" onChange={getdata} placeholder="Password" /><br />
          <input className="btn btn-primary" type="submit" onClick={verifyUser} value="Submit" />
          <nav>
            New User? <Link to="/">SignUp</Link> here!
          </nav>
        </div>
      </div>
    </div>
  );
}


export default Login;