<?php 
include 'dbconnect.php';

header("Access-Control-Allow-Origin: http://localhost/dashboard");

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

$incomeQuery = 'SELECT incomeSource, incomeType, incomeAmount FROM incomes';
$incomeData = array();

$incomeResult = $conn->query($incomeQuery);
if($incomeResult->num_rows > 0){
    while($row = $incomeResult -> fetch_assoc()){
        $incomeData["incomeType"] = $row["incomeType"];
        $incomeData["incomeSource"] = $row["incomeSource"];
        $incomeData["incomeAmount"] = $row["incomeAmount"];
    }
} else {
    $incomeData["message"] = "Could not find any data";
}

print(json_encode($incomeData));
?>