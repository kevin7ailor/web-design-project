<?php
include 'dbconnect.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$userEmail = $decodedData['userEmail'];
$expenseType = $decodedData['expenseType'];
$expenseSource = $decodedData['expenseSource'];
$expenseAmount = $decodedData['expenseAmount'];
$month = $decodedData['month'];
$year = $decodedData['year'];
if($userEmail && $expenseType && $expenseSource && $expenseAmount && $month && $year){
// Insert user data into database
$sql = "INSERT INTO expenses (userEmail,expenseType,expenseSource,expenseAmount,month,year) VALUES ('$userEmail','$expenseType','$expenseSource','$expenseAmount','$month','$year')";

if ($conn->query($sql) === TRUE) {
  $response = array('success' => true);
  session_start();
  
} else {
  $response = array('success' => false, 'error' => "error");
}

echo json_encode($response);

$conn->close();
}
?>