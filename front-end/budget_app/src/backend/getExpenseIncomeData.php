<?php 
include 'dbconnect.php';

header("Access-Control-Allow-Origin: http://localhost/dashboard");

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

$query = 'SELECT expenseSource, expenseType, expenseAmount FROM expeses';
$data = array();

$res = $conn->query($query);
if($res->num_rows > 0){
    while($row = $res -> fetch_assoc()){
        $data["expenseType"] = $row["expenseType"];
        $data["expenseSource"] = $row["expenseSource"];
        $data["expenseAmount"] = $row["expenseAmount"];
    }
} else {
    $data["message"] = "Could not find any data";
}
print(json_encode($data));
?>