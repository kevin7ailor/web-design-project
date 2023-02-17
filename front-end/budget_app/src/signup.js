import './signup_login.css';
import { Link  } from "react-router-dom";
import './App.css';
import axios, {Axios} from 'axios';
import { useState } from 'react';

function SignUp(){

  const [inpval, setinpval] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: ""
  });

  const [data,setData] = useState([]);

  const [span,setSpan] = useState(false);

  const getdata = (e) => {

        const{value,name} = e.target;
        console.log(value,name);

        setinpval(()=>{

            return{
                ...inpval,
                [name]:value
            }
        })
    }

  const addData = (e) =>{
    e.preventDefault();

    const {firstname, lastname, email, password, confirmpassword} = inpval;
    if(firstname == ""){
      alert("Please enter firstname!");
    }else if(lastname == ""){
      alert("Please enter lastname!");
    }else if(email == ""){
      alert("Please enter email!");
    }else if(password == ""){
      alert("Please enter password!");
    }else if(confirmpassword == ""){
      alert("Please enter confirm password!");
    }else if(password != confirmpassword){
      alert("Password Mismatch");
    }else{
      axios.post("http://localhost/final_project/signup.php", inpval)
        .then((result) => {
          console.log(result);
      })
      alert("Data added successfully");
  
    }
  }
    return (
      
        <div className="App">
          <div className='main'>

            <form>
              <h1>Signup</h1>
                <input type="text" id="firstname" name="firstname" onChange={getdata}  placeholder="First name"/><br/>
                <input type="text" id="lastname" name="lastname" onChange={getdata} placeholder="Last name"/><br/>
                <input type="email" id="email" name="email" onChange={getdata} placeholder="E-mail"/><br/>
                <input type="password" id="password" name="password" onChange={getdata} placeholder="Password"/><br/>
                <input type="password" id="confirmpassword" name="confirmpassword" onChange={getdata} placeholder="Confirm Password"/><br/>
                
                <input type="submit" onClick={addData} value="Submit"/><br/>
                <nav>
                Already Registered?  <Link to="login">Login</Link> here!
                </nav>
            </form>
          </div>
        </div>
 
      );
}


export default SignUp;
