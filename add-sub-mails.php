<?php

$sname = "localhost";
$uname = "root";
$pass = "";
$db_name = "mini_project";

$conn = mysqli_connect($sname, $uname, $pass, $db_name);

if (!$conn) {
    die("Failed to connect to MySQL: " . mysqli_connect_error());
}

$data = json_decode(file_get_contents('php://input'), true);
$email = mysqli_real_escape_string($conn, $data['email']);

$sql = "INSERT INTO subscribe (emails) VALUES ('$email')";

if (mysqli_query($conn, $sql)) {
    http_response_code(200); // Success status code
} else {
    http_response_code(500); // Internal server error status code
}

mysqli_close($conn);
?>
