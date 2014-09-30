<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
// Destination email
$dest = "facundfortuny@gmail.com"; 
 
$headers = "From: $name <$email>\r\n";  
$headers .= "X-Mailer: PHP5\n";
$headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
$subject = "Hire me";

if($name != '' && $email != '' && $message != ''){
    mail($dest,$subject,$message,$headers); 
}
?>