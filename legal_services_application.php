<?php
// Database connection
$servername = "localhost"; // Change this if your database is hosted elsewhere
$username = "root"; // Change this to your database username
$password = "Elon2508/*-"; // Change this to your database password
$database = "lawfirm"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $service = $_POST["service"];
    $username = $_POST["username"];
    $identity_number = $_POST["identity_number"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $place = $_POST["place"];
    $fees = $_POST["fees"];

    // Prepare SQL statement
    $sql = "INSERT INTO legal_services_application (service, username, identity_number, phone, email, place, fees) VALUES (?, ?, ?, ?, ?, ?, ?)";

    // Prepare and bind parameters
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssd", $service, $username, $identity_number, $phone, $email, $place, $fees);

    // Execute the statement
    if ($stmt->execute() === true) {
        echo "Application submitted successfully.";
        header("location:services.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
