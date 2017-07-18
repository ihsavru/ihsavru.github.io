<?php
    if(isset($_POST["submit"])){
        $to = "vurvashi11@gmail.com";
        $from = $_POST["email"];
        $name = $_POST["name"];
        $message = $_POST["message"];
        $subject = "Form submission by ".$from;
        mail($to,$subject,$msg);
    }
?>