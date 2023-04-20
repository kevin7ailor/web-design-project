
import CanvasJSReact from './canvasjs.react';
import React,{useState,useEffect} from 'react';
import PersonalFinance from './local-json/personal_finance.json';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function BudgetTracking(){

    var totalIncomeAmount = 2000; //Fetch default value (i.e. 20% of total income)
    
    var totalExpenseAmount = 1000; //Fetch default value for expenses

    var remainingAmount = totalIncomeAmount - totalExpenseAmount;

    const [totalExpense, setTotalExpense] = useState(totalExpenseAmount);

    const [totalIncome, setTotalIncome] = useState(totalIncomeAmount);


    var fixedIncomeSecurityInitialValue = remainingAmount * 0.70;
    var cashAndEquivalentsInitialValue = remainingAmount * 0.15;
    var equitiesInitialValue = remainingAmount * 0.15;

    const [fixedIncomeSecurityValue, setfixedIncomeSecurityValue] = useState(fixedIncomeSecurityInitialValue);
    const [cashAndEquivalentsValue, setcashAndEquivalentsInitialValue] = useState(cashAndEquivalentsInitialValue);
    const [equitiesValue, setEquitiesValue] = useState(equitiesInitialValue);

    

    const options = {
        theme: "dark2",
        animationEnabled: true,
        exportFileName: "Investment ideas",
        exportEnabled: true,
        title:{
            text: "Ideal Investment ideas"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>${y}</strong>",
            indexLabel: "${y}",
            indexLabelPlacement: "inside",
            dataPoints: [
                { y: fixedIncomeSecurityValue, label: "Fixed Income Securities" },
                { y: cashAndEquivalentsValue, label: "Cash and Equivalents" },
                { y: equitiesValue, label: "Equities" },
            ]
        }]
    }
    
  
    const [portfolioType, setPortfolioType] = useState("Conservative Portfolio");

    const handleChange = (event) => {
        if(event.target.value == "cp"){
            setfixedIncomeSecurityValue(remainingAmount * 0.70)
            setcashAndEquivalentsInitialValue(remainingAmount * 0.15)
            setEquitiesValue(remainingAmount * 0.15)
        }else if(event.target.value == "mcp"){
            setfixedIncomeSecurityValue(remainingAmount * 0.60)
            setcashAndEquivalentsInitialValue(remainingAmount * 0.05)
            setEquitiesValue(remainingAmount * 0.35)
        }else if(event.target.value == "ap"){
            setfixedIncomeSecurityValue(remainingAmount * 0.30)
            setcashAndEquivalentsInitialValue(remainingAmount * 0.10)
            setEquitiesValue(remainingAmount * 0.60)
        }else if(event.target.value == "map"){
            setfixedIncomeSecurityValue(remainingAmount * 0.40)
            setcashAndEquivalentsInitialValue(remainingAmount * 0.10)
            setEquitiesValue(remainingAmount * 0.5)
        }else if(event.target.value == "vap"){
            setfixedIncomeSecurityValue(remainingAmount * 0.10)
            setcashAndEquivalentsInitialValue(remainingAmount * 0.10)
            setEquitiesValue(remainingAmount * 0.80)
        }
        setPortfolioType(event.target.value)
    }
    return (
        <div>
            <div>
            <h1>Investment, Budget Tracking & Personal Finance</h1>
             
            <div class="container">
            
            <div class="row">
                <div class="col-sm">
                <h3>Total Income - <input type="text" class="form-control" value={totalIncome} onChange={(e) => setTotalIncome(e.target.value)}/></h3>
             </div>
                <div class="col-sm">
                <h3>Total Expense - <input type="text" class="form-control" value={totalExpense} onChange={(e) => setTotalExpense(e.target.value)}/></h3>
             </div>
            </div>
            
            </div>
            <div class="card p-2">
                <h3>Budget Tracking</h3>
                    <div class="container">
                
                        
                    </div> 
            </div><br></br>
             
             
                 <div class="card p-2">
                    <h3>Investment</h3>
                    <div class="container">
  <div class="row">
    <div class="col-sm">
    <h5>Remaining Amount - <input type="text" class="form-control" value={remainingAmount} disabled onChange={(e) => setTotalExpense(e.target.value)}/></h5>  
                 { <h5>Select Investment Ideology - </h5> }
                 <select value={portfolioType} onChange={handleChange} class="form-select form-select-lg mb-3">
                     <option value="cp">Conservative Portfolio</option>
                     <option value="mcp">Moderately Conservative Portfolio</option>
                     <option value="ap">Aggressive Portfolio</option>
                     <option value="map">Moderately Aggressive Portfolio</option>
                     <option value="vap">Very Aggressive Portfolio</option>
                 </select>
    </div>
    <div class="col-sm">
             
    <div class="card-body">
  <CanvasJSChart options = {options}/>
  </div>
    </div>
    </div>
</div>
                 
       
</div>
               
            </div>
            <div class="container-fluid">
            
            <h1>Personal Finance</h1>
            {PersonalFinance.PersonalFinance.map((item, i) => (
            <td key={i}>
            <div class="container">
                
                <div class="card bg-light mb-3">
                <div class="card-header"><b>{item.header}</b></div>
                <div class="card-body">
                    
                    <p class="card-text">{item.Content}</p>
                </div>
            </div>
            </div>
        </td>
))}
            </div>
            
          </div>
        );
  }
  
  
  export default BudgetTracking;