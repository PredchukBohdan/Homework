<?php
$name = $_POST['name'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];
$token = "5000206575:AAEWYnU1hwRNe-yvjkcJhgV1gi3WP8TNB6A";
$chat_id = "-722623413";
$arr = array(
  'Имя пользователя: ' => $name,
  'User email: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."";
};

$website="https://api.telegram.org/bot".$token;
  $params=[
      'chat_id'=>$chat_id, 
      'text'=> $txt,
  ];
  $ch = curl_init($website . '/sendMessage');
  curl_setopt($ch, CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  $result = curl_exec($ch);
  curl_close($ch);
  echo $result;

?>