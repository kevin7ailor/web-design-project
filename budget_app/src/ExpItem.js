import React from "react";
import './App'
class ExpItem extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div>
                {this.props.userEmail}
                {this.props.expenseType}
                {this.props.expenseSource}
                {this.props.expenseAmount}
                {this.props.month}
                {this.props.year}
                {<button onClick={() => {this.props.handleExpDelete(this)}}>Delete</button>}
            </div>
        )
    }
}
export default ExpItem