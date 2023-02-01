function displayIncContents(){
    document.getElementById('addIncNew').style.display = "none";
    document.getElementById('addNewIncForm').style.display = 'block';
}

function displayExpContents(){
    document.getElementById('addExpNew').style.display = "none";
    document.getElementById('addNewExpForm').style.display = 'block';
}

function addIncSource(){
    document.getElementById('sourceTypeI').innerHTML=document.getElementById('IncType').value+`  `;
    document.getElementById('sourceNameI').innerHTML=document.getElementById('IncDescription').value+`  `;
    document.getElementById('sourceAmountI').innerHTML=document.getElementById('IncAmount').value+`  `;
    var temp = parseInt(document.getElementById("IncAmount").value);
    document.getElementById('incomeHeading').innerHTML = `Income: $${temp}\n`;
    document.getElementById('addNewIncForm').style.display = 'none';
    document.getElementById('addIncNew').style.display = "block";
    return false;
}

function cancelInc(){
    document.getElementById('addNewIncForm').style.display = 'none';
    document.getElementById('addIncNew').style.display = "block";
}

function cancelExp(){
    document.getElementById('addNewExpForm').style.display = 'none';
    document.getElementById('addExpNew').style.display = "block";
}

function addExpSource(){
    document.getElementById('sourceTypeE').innerHTML=document.getElementById('ExpType').value+`  `;
    document.getElementById('sourceNameE').innerHTML=document.getElementById('ExpDescription').value+`  `;
    document.getElementById('sourceAmountE').innerHTML=document.getElementById('ExpAmount').value+`  `;
    var temp = parseInt(document.getElementById("ExpAmount").value);
    document.getElementById('expenseHeading').innerHTML = `Expense: $${temp}\n`;
    document.getElementById('addNewExpForm').style.display = 'none';
    document.getElementById('addExpNew').style.display = "block";
    return false;
}