<?php
include ('dbconnect.php');
header("Access-Control-Allow-Origin: http://localhost:3000/");


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$SQL = "SELECT * FROM users WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$verifyEmail =  mysqli_num_rows($exeSQL);
$Message = "";

if ($verifyEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['password'] != $password) {
        $Message = "Wrong password, Please re-enter!"; //1
    } else {
        $Message = "Success"; //2
    }
} else {
    $Message = "No account yet"; //0
}

$response[] = array("Message" => $Message);
echo json_encode($response);
    
?>