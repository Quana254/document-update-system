<?php
  
  $file_name = $_Files['file']['name'];//getting file name
  $tmp_name = $_Files['file']['tmp_name'];//getting temp_name of the file
  $file_up_name = time().$file_name;//making file name dynamic by adding time before file name
  move_uploaded_file($tmp_name, "files/".$file_up_name);//moving file to the specified folder with dynamic name
?>