
<?php
    //var_dump($_POST);

    $username=$_POST['username'];
$password=$_POST['password'];


require_once 'db.php';

$sql="insert into login values('','$username','$password')";
$result=mysql_query($sql);//�����Ƿ�ɹ�������ݵĲ���ֵ��mysql_query($sql)�Ƿ���sql���,mysql_affected_rows($link)�ж���Ӱ������

if($result){
    echo "true";
}else{
    echo "false";
}



