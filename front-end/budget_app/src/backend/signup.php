<?php
include ('dbconnect.php');

// const navigate = useNavigate();

  
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');

$data = json_decode(file_get_contents("php://input"));


$firstname = $data->firstname;
$lastname = $data->lastname;
$email = $data->email;
$password = $data->password;

$SQL = "SELECT * FROM users WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$verifyEmail =  mysqli_num_rows($exeSQL);
if ($verifyEmail != 0) {
	$Message = "Account Already exists";
} else {
	$stmt = $conn->prepare("insert into users(firstname , lastname , email , password) values (?,?,?,?)");
	$stmt->bind_param("ssss", $firstname, $lastname, $email, $password);
	$stmt->execute();
}
$response[] = array("Message" => $Message);
echo json_encode($response);
//echo "<script>console.log('Debug Objects: " . $name . "' );</script>";
//$stmt = $conn->prepare("insert into users(firstname , lastname , email , password) values (?,?,?,?)");
//$stmt->bind_param("ssss", $firstname, $lastname, $email, $password);
//$stmt->execute();

?>