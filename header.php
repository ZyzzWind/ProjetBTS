<html>
<head>
<link rel="stylesheet" href="style.css"></link>
<link rel="stylesheet" href="bouttons.css"></link>
</head>
<body>
<?php 
    include('./session.php'); 
    if($session_user == true)
    {
        echo "<div class='etat_connexion'>";
        echo "<p>Connecté en tant que ".$_SESSION['user']."</p>";
        echo "</div>";
    }
    else
    {
        echo "<div class='etat_connexion'>";
        echo "<p>Non connecté</p>";
        echo "</div>";
    }
?>
<a href="index.php" class="button_home"></a>
<a href="RoseDesVents.php" class="button_speed_direction"></a>
<a href="EolienneSimulation.php" class="button_simulation"></a>
<a href="EolienneProgress.php" class="button_progress"></a>
<a href="ComparaisonEoliennes.php" class="button_compare_windmill"></a>
<a href="ComparaisonLieuxEoliennes.php" class="button_compare_places"></a>
</body>
</html>