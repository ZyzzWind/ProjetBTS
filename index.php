<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>BTS windbird</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="bouttons.css">

</head>
<body>
<?php include('header.php') ?>
  <div class="particles"></div>
  <script type="text/javascript" src="./scripts/ShaderProgram.js"></script>
  <script type="text/javascript" src="./scripts/Stats2.js"></script>
  <script type="text/javascript" src="./scripts/Snow.js"></script>
  <?php 
      if($session_user == true)
      {
        echo "<a href='./logout.php' id='button_logout'></a>";
      }
      else
      {
        echo "<p id='button_login'>Connexion</p>";
      }
         ?>
  <div id="login_div">
        <form action="login.php" method="post">
            <input type="email" name="email" id="email_input" placeholder="Login" required/>
            <br/>
            <br/>
            <input type="password" name="password" id="password_input" placeholder="Mot de passe" required/>
            <br/>
            <br/>
            <input type="submit" />
        </form>
  </div>
  <script type="text/javascript" src="./scripts/affichage_menu_login.js"></script>
    <div class="acc">
      <h2>Projet BTS</h2>
      <h1 style="font-size:50px">Windbird</h1>
      <h3 style="font-size:40px">Solution</h3>
    </div>
  <?php
  ?>
</body>
</html>