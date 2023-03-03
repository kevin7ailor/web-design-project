
import { useState } from 'react';
import CanvasJSReact from './canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function BudgetTracking(){

    var totalIncomeAmount = 2000; //Fetch default value (i.e. 20% of total income)
    
    const [totalIncome, setTotalIncome] = useState(totalIncomeAmount);

    var fixedIncomeSecurityInitialValue = totalIncome * 0.70;
    var cashAndEquivalentsInitialValue = totalIncome * 0.15;
    var equitiesInitialValue = totalIncome * 0.15;

    const [fixedIncomeSecurityValue, setfixedIncomeSecurityValue] = useState(fixedIncomeSecurityInitialValue);
    const [cashAndEquivalentsValue, setcashAndEquivalentsInitialValue] = useState(cashAndEquivalentsInitialValue);
    const [equitiesValue, setEquitiesValue] = useState(equitiesInitialValue);


    const options = {
        theme: "dark2",
        animationEnabled: true,
        exportFileName: "New Year Resolutions",
        exportEnabled: true,
        title:{
            text: "Top Categories of New Year's Resolution"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}",
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
            setfixedIncomeSecurityValue(totalIncome * 0.70)
            setcashAndEquivalentsInitialValue(totalIncome * 0.15)
            setEquitiesValue(totalIncome * 0.15)
        }else if(event.target.value == "mcp"){
            setfixedIncomeSecurityValue(totalIncome * 0.60)
            setcashAndEquivalentsInitialValue(totalIncome * 0.05)
            setEquitiesValue(totalIncome * 0.35)
        }else if(event.target.value == "ap"){
            setfixedIncomeSecurityValue(totalIncome * 0.30)
            setcashAndEquivalentsInitialValue(totalIncome * 0.10)
            setEquitiesValue(totalIncome * 0.60)
        }else if(event.target.value == "map"){
            setfixedIncomeSecurityValue(totalIncome * 0.40)
            setcashAndEquivalentsInitialValue(totalIncome * 0.10)
            setEquitiesValue(totalIncome * 0.5)
        }else if(event.target.value == "vap"){
            setfixedIncomeSecurityValue(totalIncome * 0.10)
            setcashAndEquivalentsInitialValue(totalIncome * 0.10)
            setEquitiesValue(totalIncome * 0.80)
        }
        setPortfolioType(event.target.value)
    }
    return (
        <div>
            <h1>Investment & Budget Tracking</h1>
             
            <h1>Total Income - <input type="text" value={totalIncome} onChange={(e) => setTotalIncome(e.target.value)}/></h1>
                <select value={portfolioType} onChange={handleChange}>
                    <option value="cp">Conservative Portfolio</option>
                    <option value="mcp">Moderately Conservative Portfolio</option>
                    <option value="ap">Aggressive Portfolio</option>
                    <option value="map">Moderately Aggressive Portfolio</option>
                    <option value="vap">Very Aggressive Portfolio</option>
                </select>
                <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
          </div>
        );
  }
  
  
  export default BudgetTracking;