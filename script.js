

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// 
// This is NOT JAVASCRIPT it's a separate php file that the form action references
// 

/*

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<?php
session_start();
include_once $_SERVER['DOCUMENT_ROOT'] . '/form/securimage/securimage.php';

$firstname = htmlspecialchars($_POST['firstname']);
$lastname  = htmlspecialchars($_POST['lastname']);
$email  = htmlspecialchars($_POST['email']);
$areacode  = htmlspecialchars($_POST['areacode']);
$phonenumber  = htmlspecialchars($_POST['phonenumber']);
$servicesofinterest  = htmlspecialchars($_POST['servicesofinterest']);
$comment  = htmlspecialchars($_POST['comment']);
$fullmessage = array($firstname, $lastname, $email, $areacode, $phonenumber, $servicesofinterest, $comment);

$securimage = new Securimage();

if ($_POST["submit"]){

  if ($_POST['email']!="" AND !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $error.="<br>Please enter a valid email address";
  }

  if ($securimage->check($_POST['captcha_code']) == false) {
    $error.="<br>Your captcha was incorrect";
  }

  if ($error) {
  $result='<div class="alert alert-danger"><strong>There were error(s):</strong>'.$error.'<br><br><strong>Standby, you will be redirected</strong></div>';
  } else {

	// PHP MAILER BELOW

	require 'PHPMailerAutoload.php';

	$mail = new PHPMailer;
	$mail->setFrom('no-reply@bigewiki.com', 'Mailer');
	$mail->addAddress('edward@bigewiki.com', 'Admin');
	$mail->isHTML(true);
	$mail->Subject = 'Consultation Form Submission';
  $mail->Body    = 'First Name: ' . $fullmessage[0] . '<br>Last Name: ' . $fullmessage[1] . '<br>Email: ' . $fullmessage[2] . '<br>Phone Number: ' . $fullmessage[3] . '-' . $fullmessage[4] . '<br>Service of interest: ' . $fullmessage[5] . '<br>Comment: ' . $fullmessage[6];


	if(!$mail->send()) {
    $result='<div class="alert alert-danger"><strong>Sorry, there was an error with sending your message, please try again.<br><br>Standby, you will be redirected</strong></div>';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
    $result='<div class="alert alert-success"><strong>Thank you! Your message was sent!<br><br>Standby, you will be redirected</strong></div>';
	}
  }
}



echo $result;
?>

<script>
setTimeout(function(){
  window.location = "http://www.novapele.net/test071817/";
}, 3000);
</script>


*/