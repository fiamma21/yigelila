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
    "title" => urlencode("����Σ��"),//��Ҫ������ӰƬ����,utf8�����urlencode
    "smode" => "",//<font color=red>�Ƿ�ȷ���ң���ȷ:1 ģ��:0  Ĭ��1</font>
    "pagesize" => "",//<font color=red>ÿ�η���������Ĭ��20,���50</font>
    "offset" => "",//<font color=red>ƫ������Ĭ��0,���760</font>
    "key" => $key,//Ӧ��APPKEY(Ӧ����ϸҳ��ѯ)
    "dtype" => "",//�������ݵĸ�ʽ,xml/json��Ĭ��json
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
    echo "����ʧ��";
}