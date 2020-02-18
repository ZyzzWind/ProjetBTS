<?php
    $servername = 'localhost';
    $username = 'root';
    $password = 'eclipse';

    try {
        $connect = new PDO("mysql:host=$servername;dbname=windmeter", $username, $password);
        //On définit le mode d'erreur de PDO sur Exception
        $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);    
    } catch (PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }
?>