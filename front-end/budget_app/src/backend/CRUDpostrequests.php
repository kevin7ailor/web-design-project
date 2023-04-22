<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$output = [
        'error' => true,
        'success' => false,
        'message' => 'Invalid Request. Please try again!'
    ];
try {
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $message = $_POST;
        if ($_POST['requestType'] == 'friend') {
            $message = addFriends($_POST['firstName'], $_POST['lastName'], $_POST['email']);
        }
        if ($_POST['requestType'] == 'expenses') {
            $message = addExpenses($_POST['amount'], $_POST['email'], $_POST['description']);
            echo $_POST["amount"];
        }
        $output = [
                'success' => true,
                'error' => false,
                'message' => $message
            ];
    }
} catch(Exception $e) {
    $output['exception'] = $e->getMessage();
}
echo json_encode($output);

function getDbConnection()
{
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "budget_app";
    $conn = new mysqli($host, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

function addFriends($firstName, $lastName, $email)
{
    $friendInsertQuery = "INSERT INTO friends(firstName, lastName, email)
            VALUES ('$firstName', '$lastName', '$email');";
    $databaseConnection = getDbConnection();
    if ($databaseConnection->query($friendInsertQuery) === TRUE) {
        return "New friend added successfully";
    } else {
        return "Error: " . $friendInsertQuery . "<br>" . $databaseConnection->error;
    }
}

function addExpenses($amount, $email, $description)
{
    $databaseConnection = getDbConnection();
    $expensesInsertQuery = "INSERT INTO sw_expenses(fid, amount, description)
            SELECT fid, '$amount', '$description' FROM friends WHERE email='$email';";
    
    if ($databaseConnection->query($expensesInsertQuery) === TRUE) {
        return "New expenses transaction added successfully";
    } else {
        return "Error: " . $expensesInsertQuery . "<br>" . $databaseConnection->error;
    }
}
