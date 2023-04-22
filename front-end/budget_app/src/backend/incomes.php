<?php
include 'dbconnect.php';

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$userEmail = $decodedData['userEmail'];
$incomeType = $decodedData['incomeType'];
$incomeSource = $decodedData['incomeSource'];
$incomeAmount = $decodedData['incomeAmount'];
$month = $decodedData['month'];
$year = $decodedData['year'];

// echo ("variables done")
if($userEmail && $incomeType && $incomeSource && $incomeAmount && $month && $year){
// Insert user data into database
$sql = "INSERT INTO incomes (userEmail,incomeType,incomeSource,incomeAmount,month,year) VALUES ('$userEmail','$incomeType','$incomeSource','$incomeAmount','$month','$year')";

// echo "query done";

if ($conn->query($sql) === TRUE) {
  $response = array('success' => true);
  session_start();
  // echo "Run done";
} else {
  $response = array('success' => false, 'error' => "error");
  // echo "variables done";
}

echo json_encode($response);

$conn->close();
}
?>