<?php
header("Content-type: application/xhtml+xml"); 
print('<?xml version="1.0" encoding="UTF-8"?>');
?>


<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" xmlns:svg="http://www.w3.org/2000/svg">
<head>
  <meta charset="UTF-8"></meta>
  <title>BTS windbird</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <link rel="stylesheet" href="style.css"></link>
  <link rel="stylesheet" href="bouttons.css"></link>
  <link rel="stylesheet" href="graph.css"></link>
</head>

<body id="corps" onload="creer_zones('lignes_zones1', 'barres1', 350, 350), modifier_periode_visualisation(1, 0, 0, 0, 0, 0, 0), detecter_souris(), detecter_resolution()">
	<div class="particles"></div>
	<script type="text/javascript" src="./scripts/ShaderProgram.js"></script>
	<script type="text/javascript" src="./scripts/Stats2.js"></script>
	<script type="text/javascript" src="./scripts/Snow.js"></script>
	
	<?php include('header.php') ?>

<script type="application/javascript" src="./scripts/var_globales.js"></script>
<script type="application/javascript" src="./scripts/creation_zone.js"></script>
<script type="application/javascriptt" src="./scripts/periode_de_visualisation.js"></script>
<script type="application/javascriptt" src="./scripts/gestionnaire_event.js"></script>
<script type="application/javascript" src="./scripts/selection_menu_RDV.js"></script>
<script type="application/javascript" src="./scripts/affichage_informations.js"></script>
<script type="application/javascript" src="./scripts/zoom.js"></script>
<script type="application/javascript" src="./scripts/detection_resolution.js"></script>


<div class="rose">
		<div id="rose_des_vents1" class="rose_des_ventsN1">
			
		<!--<img style="width:700px; height:700px; position:absolute; opacity:0;" usemap="#zone_circulaire1"/>
		<map name="zone_circulaire1">
			<area shape="circle" coords="350,350,350" id="img_zone_circulaire1"/>
		</map>-->
			
			<select name="année" class="selectAnneeSPE" dir="ltr" id="selectAnneeSPE" lang="fr">

				<option selected="value" value="Annné" >---   Année  ---</option>

				<option value="2011"> 2011 </option>
				<option value="2012"> 2012 </option>
				<option value="2013"> 2013 </option>
				<option value="2014"> 2014 </option>
				<option value="2015"> 2015 </option>
				<option value="2016"> 2016 </option>
				<option value="2017"> 2017 </option>
				<option value="2018"> 2018 </option>
				<option value="2019"> 2019 </option>
				<option value="2020"> 2020 </option>
			
			</select>
			
			<select name="mois" class="selectMoisSPE" dir="ltr" id="selectMoisSPE" lang="fr">

				<option selected="value" value="Mois" > ---   Mois  --- </option>

				<option value="Janvier"> Janvier </option>
				<option value="Février"> Février </option>
				<option value="Mars"> Mars </option>
				<option value="Avril"> Avril </option>
				<option value="Mai"> Mai </option>
				<option value="Juin"> Juin </option>
				<option value="Juillet"> Juillet</option>
				<option value="Aout"> Aout </option>
				<option value="Septembre"> Septembre </option>
				<option value="Octobre"> Octobre </option>
				<option value="Novembre"> Novembre </option>
				<option value="Decembre"> Decembre</option>
				
				
			</select>
			<select name="jour" class="selectJoursSPE" dir="ltr" id="selectJoursSPE" lang="fr">

				<option selected="value" value="Jour" > ---   Jour   --- </option>
				
				<option value="1"> 1 </option>
				<option value="2"> 2 </option>
				<option value="3"> 3 </option>
				<option value="4"> 4 </option>
				<option value="5"> 5 </option>
				<option value="6"> 6 </option>
				<option value="7"> 7 </option>
				<option value="8"> 8 </option>
				<option value="9"> 9 </option>
				<option value="10"> 10 </option>
				<option value="11"> 11 </option>
				<option value="12"> 12 </option>
				<option value="13"> 13 </option>
				<option value="14"> 14 </option>
				<option value="15"> 15 </option>
				<option value="16"> 16 </option>
				<option value="17"> 17 </option>
				<option value="18"> 18 </option>
				<option value="19"> 19 </option>
				<option value="20"> 20 </option>
				<option value="21"> 21 </option>
				<option value="22"> 22 </option>
				<option value="23"> 23 </option>
				<option value="24"> 24 </option>
				<option value="25"> 25 </option>
				<option value="26"> 26 </option>
				<option value="27"> 27 </option>
				<option value="28"> 28 </option>
				<option value="29"> 29 </option>
				<option value="30"> 30 </option>
				<option value="31"> 31 </option>
				
			</select>

				<!-- PiouPiou -->

			<select name="PiouPiou" class="selectPiouPiouSPE" dir="ltr" id="selectPiouPiouSPE" lang="fr">
				
				<option selected="value" value="ID PiouPiou"> --- ID du PiouPiou --- </option>

				<option value="001"> 001 </option>
				<option value="001"> 002 </option>
				<option value="001"> 003 </option>
				<option value="001"> 004 </option>
				<option value="001"> 005 </option>
				<option value="001"> 006 </option>
				<option value="001"> 007 </option>
				<option value="001"> 008 </option>
				<option value="001"> 009 </option>
				<option value="001"> 010 </option>
				<option value="001"> 011 </option>
				<option value="001"> 012 </option>
				<option value="001"> 013 </option>
				<option value="001"> 014 </option>
				<option value="001"> 015 </option>
				<option value="001"> 016 </option>
				<option value="001"> 017 </option>
				<option value="001"> 018 </option>
				<option value="001"> 019 </option>
				<option value="001"> 020 </option>
				<option value="001"> 100 </option>
				<option value="001"> 200 </option>
				<option value="001"> 300 </option>
				<option value="001"> 400 </option>
				<option value="001"> 500 </option>
				<option value="001"> 600 </option>

			</select>

      <!-- Eolienne -->

      <select name="Eolienne" class="selectEolienneSPE" dir="ltr" id="selectEolienneSPE" lang="fr">
				
				<option selected="value" value="ID Eolienne"> --- Eolienne --- </option>

        <optgroup label="Axe Horizontale">
          <option value="ES_10"> ES 10 </option>
          <option value="Horizon_1_8"> Horizon 1.8 </option>
          <option value="R9000"> R9000 </option>
          <option value="Skystream_3_7"> Skystream 3.7 </option>
          <option value="Skystream_600"> Skystream 600 </option>
          <option value="Skystream_Hybrid_6"> Skystream Hybrid 6 </option>
          <option value="Whisper_100"> Whisper 100 </option>
          <option value="Whisper_200"> Whisper 200 </option>
          <option value="Whisper_500"> Whisper 500 </option>
          <option value="Windtronics_BTPS_6500"> Windtronics BTPS 6500 </option>
        </optgroup>

        <optgroup label="Axe Vertical">
          <option value="Nheowind_3D_50"> Nheowind 3D 50 </option>
          <option value="Nheowind_3D_100"> Nheowind 3D 100 </option>
          <option value="Eolienne_Philippe_Starck"> Eolienne Philippe Starck </option>
          <option value="Windspire"> Windspire </option>
        </optgroup>

        <optgroup label="Turbolienne">
          <option value="AeoroCube"> AeoroCube </option>
          <option value="Elena"> Elena </option>
        </optgroup>

      </select>

			<svg:svg width="700px" height="700px">
				
			</svg:svg>
		</div>
	</div>


</body>
</html>