import './signup_login.css';
import { Link  } from "react-router-dom";
import './App.css';

function Dashboard(){
  return (
    <div>
        <div>
          <h1>Dashboard</h1>
            <nav>
            New User? <Link to="/budgetTracking">Budget Tracking</Link> here!
            </nav>
           
        </div>
      </div>
    );
  }
  
  
  export default Dashboard;