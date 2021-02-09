<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';


$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";
$mail->setLanguage('ru', 'phpmailer/Language/');
$mail->IsHTML(true);

// От Кого письмо
$mail->setFrom('sergeivolosher@testvol.h1n.ru', 'Сайт портфолио');
// Кому отпрвить
$mail->addAddress('Voloshenyuks@gmail.com');
// Тема письма
$mail->Subject = "С формы обратной связи Портфолио";

// Тело письма
$body = '<h1>Внимание!</h1>';

if (trim(!empty($_POST['name']))) {
  $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
}

if (trim(!empty($_POST['email']))) {
  $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p>';
}

if (trim(!empty($_POST['comment']))) {
  $body .= '<p><strong>Сообщение:</strong> ' . $_POST['comment'] . '</p>';
}


$mail->Body = $body;


if (!$mail->send()) {
  $message = 'Ошибка';
} else {
  $message = 'данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
