<?php
include('config.php');
include(PATH_INCLUDES . 'connect.php');
include(PATH_INCLUDES . 'functions.php');


if( isset($_POST['your_name']) or isset($_POST['your_email']) or isset($_POST['your_text']) ){

	$name = my_string( $_POST['your_name'] );
	$email = my_string( $_POST['your_email'] );
	$text = my_string( $_POST['your_text'] );
	$img = isset( $_FILES['add_img']['name']) ? $_FILES['add_img']['name'] = md5(time()).'.'. substr( $_FILES['add_img']['type'], 6 ) : '';
	$sql = "";
	$src = PATH_UPLOADS.$img;
	$dist = PATH_THUMB.$img;
	cwUpload("add_img" , PATH_UPLOADS , $img, true, PATH_THUMB, 100);

	if( isset($_FILES['add_img']['name']) ){

		$sql = "INSERT INTO `reviews` (`id`, `review_img`, `review_name`, `review_text`, `review_date`, `review_email`, `visible`) VALUES 

		(NULL, '$img', '$name', '$text', CURRENT_TIMESTAMP, '$email', '0')";

		

	}else{

		$sql = "INSERT INTO `reviews` (`id`, `review_name`, `review_text`, `review_date`, `review_email`, `visible`) VALUES 

		(NULL, '$name', '$text', CURRENT_TIMESTAMP, '$email', '0')";

	}

	mysql_query($sql);
}

		if($_FILES['add_img']['size'] > 1024*1000)
	   {
			echo ("Размер файла превышает один мегабайт");
			exit;
	   }
	   
	   if(is_uploaded_file($_FILES['add_img']['tmp_name']))
	   {
			move_uploaded_file($_FILES['add_img']['tmp_name'], PATH_UPLOADS . $_FILES['add_img']['name']);
			
		 
	   }		   
		   
		if($query){
			echo " Ваша новость успешно добавлена!";
		}

?>