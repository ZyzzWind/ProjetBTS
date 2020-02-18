<?php
  include('./bdd/connect.php');
  include('./session.php');
  $mail = $_POST['email'];
  $password = $_POST['password'];

  $request = $connect->prepare("SELECT user FROM utilisateurs WHERE (mail=:mail) AND (password=:password)");
  $request->bindParam("mail", $mail,PDO::PARAM_STR);
  $request->bindParam("password", $password,PDO::PARAM_STR);
  $request->execute();

  $resultat = $request->fetch(PDO::FETCH_OBJ);

  $count = $request->rowCount();

  $connect = null;

  if($count)
  {
    $_SESSION['user']=$resultat->user;
    header('Location: index.php');
  }
  
?>