<?php
	// 模拟的json数据库
	$data=[
		["pic"=>"assets/php/image/".mt_rand(1,35).".jpg"],
		["pic"=>"assets/php/image/".mt_rand(1,35).".jpg"],
		["pic"=>"assets/php/image/".mt_rand(1,35).".jpg"],
		["pic"=>"assets/php/image/".mt_rand(1,35).".jpg"]
	];

	// 输出json数据
	echo json_encode($data);
?>