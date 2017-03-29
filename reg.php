
<?php
    //var_dump($_POST);

    $username=$_POST['username'];
$password=$_POST['password'];


require_once 'db.php';

$sql="insert into login values('','$username','$password')";
$result=mysql_query($sql);//返回是否成功添加数据的布尔值；mysql_query($sql)是发送sql语句,mysql_affected_rows($link)判断受影响行数

if($result){
    echo "true";
}else{
    echo "false";
}



