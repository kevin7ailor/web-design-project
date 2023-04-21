import React from "react";
import './App'
class IncItem extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                {this.props.userEmail}
                {this.props.incomeType}
                {this.props.incomeSource}
                {this.props.incomeAmount}
                {this.props.month}
                {this.props.year}
                {<button onClick={() => {this.props.handleIncDelete(this)}}>Delete</button>}
            </div>
        )
    }
}
export default IncItem