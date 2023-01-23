import './signup_login.css';

function Login(){
    return (
      <div className="App">
          <div className='main'>
            <h1>Login</h1>
              <input type="email" id="email" name="email" placeholder="E-mail"/><br/>
              <input type="password" id="password" name="password" placeholder="Password"/><br/>
          </div>
        </div>
      );
}


export default Login;