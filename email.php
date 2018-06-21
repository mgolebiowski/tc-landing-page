<?php
  // ini_set("SMTP", "tenderchain.org");
  // ini_set("sendmail_from", "tenderchain@tenderchain.org");

  $to      = 'michal.golabek94@gmail.com';
  $subject = htmlspecialchars($_POST["name"])+' is interested!';
  $message = htmlspecialchars($_POST["email"])+": "+htmlspecialchars($_POST["message"]);
  $headers =  'From: tenderchain@tenderchain.org' . "\r\n" .
              'Reply-To: tenderchain@tenderchain.org' . "\r\n" .
              'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers, "-f tenderchain@tenderchain.org");
?>
Thanks for contacting us!