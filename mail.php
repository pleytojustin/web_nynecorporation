<?php

echo $_POST['name'];
echo $_POST['email'];
echo $_POST['content'];

$open = fopen("file.txt", 'w+');

if ($open) {
	$content = "testing my tutorial";
	if (fwrite($open, $content)) {
		echo "good";
	} else {
		echo "cant write";
	}
} else {
	echo "cant open";
}

?>