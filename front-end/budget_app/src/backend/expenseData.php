<?php 
include 'dbconnect.php';

header("Access-Control-Allow-Origin: http://localhost/dashboard");

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

$expenseQuery = 'SELECT expenseSource, expenseType, expenseAmount FROM expenses';
$expenseData = array();

$expenseResult = $conn->query($expenseQuery);
if($expenseResult->num_rows > 0){
    $temp = array();
    // echo $expenseResult->num_rows;
    while($row = $expenseResult -> fetch_assoc()){
        $expenseData[] = $row;
    }
} else {
    $expenseData["message"] = "Could not find any data";
}

print(json_encode($expenseData));
