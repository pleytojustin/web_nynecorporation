<?php
$open = fopen("file.txt", 'w+');

if ($open) {
	echo "opened";
} else {
	echo "closed";
}
?>