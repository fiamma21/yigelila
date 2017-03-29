
<?php
//var_dump($_POST);

require_once 'db.php';

if($_GET['action']=='check'){

    $name=implode($_POST);


    $sql="select * from login where username='$name'";
    $result=mysql_query($sql);
    $row=mysql_fetch_array($result,MYSQL_ASSOC);
    if($row){
        echo json_encode(array('status'=>true,'msg'=>'用户名已使用'));
    }else{
        echo json_encode(array('status'=>false,'msg'=>'该用户名可以使用'));
    }

}else{

    $username=$_POST['username'];
    $password=$_POST['password'];

    $sql="select * from login where username='$username' and password='$password'";

    $result=mysql_query($sql);

    $row=mysql_fetch_array($result,MYSQL_ASSOC);

    if($row){
        echo json_encode(array('status'=>true,'msg'=>'登陆成功','data'=> $row));
    }else{
        echo json_encode(array('status'=>false,'msg'=>'登陆失败'));
    }
}


//$userList = [
//    ["id"=>1, "username"=>"jack", "password"=> 123],
//    ["id"=>2, "username"=>"mary", "password"=> 123],
//    ["id"=>4, "username"=>"lucy", "password"=> 123],
//    ["id"=>5, "username"=>"emma", "password"=> 123],
//    ["id"=>6, "username"=>"lily", "password"=> 123],
//    ["id"=>7, "username"=>"leo", "password"=> 123],
//];
//
//foreach($userList as $value) {
//    if ($_POST['username'] == $value['username'] && $_POST['password'] == $value['password']) {
//        echo "登陆成功";
//    }
//
//}