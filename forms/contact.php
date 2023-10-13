<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "biganirooo@gmail.com";
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo "Message sent successfully!";
    } else {
        http_response_code(500);
        echo "Message failed to send. Please try again.";
    }
} else {
    http_response_code(403);
    echo "Invalid request.";
}
?>
