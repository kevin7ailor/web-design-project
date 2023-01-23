import './signup_login.css';

function SignUp(){
    return (
      <div className="App">
          <div className='main'>
            <h1>Signup</h1>
              <input type="text" id="fname" name="firstname" placeholder="First name"/><br/>
              <input type="text" id="lname" name="lastname" placeholder="Last name"/><br/>
              <input type="email" id="email" name="email" placeholder="E-mail"/><br/>
              <input type="password" id="password" name="password" placeholder="Password"/><br/>
              <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"/><br/>
              <input type="submit" value="Submit"/>
              <p>Already registered? <a href="src/login.js">Login</a> here!</p>
      
          </div>
        </div>
      );
}


export default SignUp;
