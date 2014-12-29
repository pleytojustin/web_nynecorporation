<?php
$to = 'justin.louize.pleyto@gmail.com';
$subject = 'This is an e-mail.';

$body = 'This is a test e-mail\n\nHope you got it.';
$headers = 'From: someone@phpacademy.org';

if (mail($to, $subject, $body)) {
	echo 'Email has been sent' . $to;

} else {
	echo 'there was an error sending the email';
}

?>