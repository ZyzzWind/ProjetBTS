<?php
header("Content-Type:application/json"); 
require "headervent.php";

function calcul_puissance($digit_vent,array $puissance_eol)
{
    if($digit_vent >22) //nb de valeur du tableau puissance_eolinne1
    {
        $digit_vent = 0;
   //   echo "vitesse trop forte ->0. ";
    }
   //   echo "vitesse vent: $digit_vent m/s.<br/>";

    return $puissance_eol[$digit_vent];
}

$puissance_eolienne_janvier = $puissance_eolienne_avril = array();
$vitesse_vent_avril = array();
$vitesse_vent_janvier = array();
$temps = array();

if(isset($_POST['Eolien']))
    {
        /*
       echo "Eolienne séléctionnée: " . $_POST['Eolien'] . $saut.
            "Annee séléctionné: " . $_POST['Annee'] . $saut.
            "ID Pioupiou séléctionné: " . $_POST['Pioupiou'] . $saut . $saut;
        */
    }
else
    {
        echo "Echec d'envoie" . $saut;
        return false;
    }

    if($_POST['Eolien'] == '01')
    {
        $puissance_eolienne = array(0,0,0,0,0,10,100,200,300,400,500,600,800,900,1200,1400,1600,1900,2200,2500,2800,3100);
    }
    else if ($_POST['Eolien'] == '02')
    {
        $puissance_eolienne = array(0,0,0,0,0,10,50,100,200,300,400,500,600,700,1200,1400,1500,1700,1800,2000,2400,2900);
    }

$mysqli = new mysqli($host, $user, $password, $database);
$Annee = $mysqli->real_escape_string(htmlspecialchars($_POST['Annee']));

$q = $mysqli->query("SELECT YEAR(time_p) as 'YEAR'
                      FROM donnees_vent
                      WHERE YEAR(time_p)='$Annee'");

while($row = mysqli_fetch_array($q))
{
    $temps[$b] = $row[0]; 
    ++$b;
}
//echo "Annee récupèrée dans la BDD: ".$temps[0] . $saut.$saut;
$q->free();

$test2 = $mysqli->query("SELECT wind_speed_avg 
                          FROM donnees_vent 
                          WHERE MONTH(time_p)=1 AND YEAR(time_p)='$Annee'");

while($row = mysqli_fetch_array($test2))
{
    $vitesse_vent_janvier[$a] = intval($row[0]);
    ++$a;
}
$test2->free();

$test = $mysqli->query("SELECT wind_speed_avg 
                          FROM donnees_vent 
                          WHERE MONTH(time_p)=4 AND YEAR(time_p)='$Annee'");

while($row = mysqli_fetch_array($test))
{
    $vitesse_vent_avril[$c] = intval($row[0]);
    ++$c;
}
$test->free();

while($i<27)
{
    $puissance_eolienne_avril[$i] = calcul_puissance($vitesse_vent_avril[$i], $puissance_eolienne);
    $puissance_totale_avril += $puissance_eolienne_avril[$i];
   
    $puissance_eolienne_janvier[$i] = calcul_puissance($vitesse_vent_janvier[$i], $puissance_eolienne);
    $puissance_totale_janvier += $puissance_eolienne_janvier[$i];

    // si les valeurs de vent sont supérieur à valeur max du tableau e.g 26m/s -> erreur offset
    // corrigé avec un if dans calcul_puissance
  /*
    echo "Puissance créneau: ";
    print_r($puissance_eolienne_avril[$i] ."W". $saut);
    echo "Puissance totale : ";
    echo $puissance_totale_avril ."W". $saut . $saut;
  */
  $i++;
}
    $tab_puissance_totale = array("valueJanvier"=> $puissance_totale_janvier,
                                  "valueAvril"=> $puissance_totale_avril);
   echo json_encode($tab_puissance_totale);
 //   echo("Connexion fermée!");
?>