<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $telephone = $_POST["telephone"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  $to = "q2murphy@gmai.com"; 
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nTelephone: $telephone\nSubject: $subject\nMessage: $message";

  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for your message. I will get back to you soon!";
  } else {
    echo "Oops! Something went wrong. Please try again.";
  }
};
?>
