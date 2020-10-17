<?php 

require '../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer();

$mail->setLanguage('fr', '/optional/path/to/language/directory/');
$mail->isSMTP();

$mail->SMTPSecure = 'tls';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->Username = 'jyaire@gmail.com';
$mail->Password = '*****'; 

$mail->setFrom('test@exemple.com', 'Envoyeur du message');
$mail->addReplyTo('test@exemple.com', 'Envoyeur du message');
$mail->addAddress('jyaire@gmail.com', 'Jean-Roch'); 

$mail->Subject = 'Un email a été envoyé depuis le site Jyaire';

$mail->isHTML(true);

$mailContent = "<h1>Send HTML Email using SMTP in PHP</h1>
    <p>This is a test email I’m sending using SMTP mail server with PHPMailer.</p>";
$mail->Body = $mailContent;

?>