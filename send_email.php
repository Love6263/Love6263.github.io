<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST['message'];
    $to = "kuszekszabikah@gmail.com";
    $subject = "Új üzenet a weboldalról";
    $headers = "From: no-reply@weboldal.com" . "\r\n" .
               "Reply-To: no-reply@weboldal.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Üzenet sikeresen elküldve!";
    } else {
        echo "Hiba történt az üzenet küldésekor.";
    }
}
?>