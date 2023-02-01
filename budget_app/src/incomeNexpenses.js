import './incomeNexpenses.css';

// how to import function.js ?

function IncomeExpense(){
    return (
    <div className="App">
        <div className='main'>

            <h1>Income & Expenses</h1>

            <div className="incomes">
                <div className="header">
                    <h2 id="incomeHeading">Income: $</h2>
                </div>
                <div className="incomeSources">
                    <div className="sourceI">
                        <ul>
                            <li>
                              <h3 id="sourceTypeI"></h3>
                              <h3 id="sourceNameI"></h3>
                              <h3 id="sourceAmountI"></h3>
                            </li>
                          </ul>
                    </div>
                </div>
                <input id="addIncNew" type="button" value="Add New Source" onclick="displayIncContents();" className="btn"/> 
                
                <form id="addNewIncForm" name="newIncInput" method="Post" onsubmit="return addIncSource();" action="" style="display: none;" >
                    <h3 id="IncHeading">Adding New Income Source:</h3>                                 
                    <input id="IncType" className="textInput" type="text" name="answer" placeholder="Income Type"/><br/>
                    <input id="IncDescription" className="textInput" type="text" name="answer" placeholder="Income Description"/><br/>
                    <input id="IncAmount" className="textInput" type="text" name="answer" placeholder="Income Amount"/><br/>
                    <input id="submitButton" type="submit" value="Add +" className="btn"/>
                    <input id="cancelButton" type="button" value="Cancel" className="btn" onclick="cancelInc();"/>
                    <h2 id="error"></h2> 
                </form> 
            </div>
            
            <div className="expenses">
                <div className="header">
                    <h2 id="expenseHeading">Expense: $</h2>
                </div>
                
                <div className="expenseSources">
                    <div className="sourceI">
                        <ul>
                            <li>
                                <h3 id="sourceTypeE"></h3>
                                <h3 id="sourceNameE"></h3>
                                <h3 id="sourceAmountE"></h3>
                            </li>
                        </ul>
                    </div>
                </div>
                <input id="addExpNew" type="button" value="Add New Expense" onclick="displayExpContents();" className="btn"/>
                <form id="addNewExpForm" name="newExpInput" method="Post" onsubmit="return addExpSource();"  action="" style="display: none;" >
                    <h3 id="ExpHeading">Adding New Expense:</h3>                                 
                    <input id="ExpType" className="textInput" type="text" name="answer" placeholder="Expense Type"/><br/>
                    <input id="ExpDescription" className="textInput" type="text" name="answer" placeholder="Expense Description"/><br/>
                    <input id="ExpAmount" className="textInput" type="text" name="answer" placeholder="Expense Amount"/><br/>
                    <input id="submitButton" type="submit" value="Add +" className="btn"/>  
                    <input id="cancelButton" type="button" value="Cancel" className="btn" onclick="cancelExp();"/>
                    <h2 id="error"></h2>                                
                </form>
            
            </div>
          </div>
        </div>
    );
}


export default IncomeExpense;