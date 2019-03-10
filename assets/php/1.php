<?php
	// 接收传来的数据
	$uname=$_POST['un'];
	$pwd=$_POST['pn'];
	// echo $uname;

	//声明已有的数据
	$arr=["123"];
	$arrt=["123"];
	// 数据比对验证
	if (in_array($uname,$arr)&&in_array($pwd,$arrt)) {
		// 已存在 返回y
		echo "y";
	}else{
		//不存在 返回n
		echo "n";
	}

?>