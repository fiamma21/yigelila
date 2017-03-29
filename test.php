<?php


//&key=83b92593728d76f68c5043e2fa7e0d41
$url="http://apis.juhe.cn/cnoil/oil_city?key=48d720641b1e369b81f22bc90e6b456a";
$content = file_get_contents($url);
$data = json_decode($content,true);

var_dump($data);
exit;
list($a,$b)=each($data['result']);
echo json_encode($b);

$params = array(
    "title" => urlencode("生化危机"),//需要检索的影片标题,utf8编码的urlencode
    "smode" => "",//<font color=red>是否精确查找，精确:1 模糊:0  默认1</font>
    "pagesize" => "",//<font color=red>每次返回条数，默认20,最大50</font>
    "offset" => "",//<font color=red>偏移量，默认0,最大760</font>
    "key" => $key,//应用APPKEY(应用详细页查询)
    "dtype" => "",//返回数据的格式,xml/json，默认json
);
$paramstring = http_build_query($params);

$content = juhecurl($url,$paramstring);

$result = json_decode($content,true);
if($result){
    if($result['error_code']=='0'){
        print_r($result);
    }else{
        echo $result['error_code'].":".$result['reason'];
    }
}else{
    echo "请求失败";
}