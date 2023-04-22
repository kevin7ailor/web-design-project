// import './signup_login.css';
import { Link, useNavigate } from "react-router-dom";
import './App.css';
import axios, { Axios } from 'axios';
import { useState } from 'react';

function SignUp() {

  const navigate = useNavigate();

  const [inpval, setinpval] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
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

  const addData = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, password, confirmpassword } = inpval;
    if (firstname == "") {
      alert("Please enter firstname!");
    } else if (lastname == "") {
      alert("Please enter lastname!");
    } else if (email == "") {
      alert("Please enter email!");
    } else if (password == "") {
      alert("Please enter password!");
    } else if (confirmpassword == "") {
      alert("Please enter confirm password!");
    } else if (password != confirmpassword) {
      alert("Password Mismatch");
    } else {
      axios.post("http://localhost:41062/www/signup.php", inpval)
        .then((result) => {
          var responseData;
          responseData = result.data[0].Message;
          if (responseData === "Account Already exists") {
            alert(responseData);
          } else {
            //No account yet or Wrong password, Please re-enter!
            navigate('/login');

          }
        })

      // axios.post("http://localhost/final_project/login.php", inpval)
      //   .then((response) => {
      //     var responseData;
      //     responseData = response.data[0].Message;
      //     if(responseData === "Success"){
      //       //Success
      //       navigate('/dashboard1');
      //     }else {
      //       //No account yet or Wrong password, Please re-enter!
      //       //alert(responseData);
      //       alert(responseData);

      //     }
      // })

    }
  }
  return (

    <div className="container-fluid App">
      <div className="center-block">
        <div className='card col-3 m-3 p-3'>

          <form>
            <h1>Signup</h1>
            <input className="form-control" type="text" id="firstname" name="firstname" onChange={getdata} placeholder="First name" /><br />
            <input className="form-control" type="text" id="lastname" name="lastname" onChange={getdata} placeholder="Last name" /><br />
            <input className="form-control" type="email" id="email" name="email" onChange={getdata} placeholder="E-mail" /><br />
            <input className="form-control" type="password" id="password" name="password" onChange={getdata} placeholder="Password" /><br />
            <input className="form-control" type="password" id="confirmpassword" name="confirmpassword" onChange={getdata} placeholder="Confirm Password" /><br />

            <input className="btn btn-primary" type="submit" onClick={addData} value="Submit" /><br />
            <nav>
              Already Registered?  <Link to="login">Login</Link> here!
            </nav>
          </form>
        </div>
      </div>
    </div>

  );
}


export default SignUp;
