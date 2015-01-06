<?php
$name = $_POST['name'];
$email = $_POST['email'];
$content = $_POST['content'];

$data = '' . $name . '' '' . $email . '' '' . $content . '';
$cvsData = $name . "," . $email . "," . $content . "\n";
$fp = fopen('test.csv', 'a');
fwrite($fp, $data);
fclose($fp);
?>
