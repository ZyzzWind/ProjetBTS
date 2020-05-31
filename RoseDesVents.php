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
</head>

<body id="corps" onload="creer_zones('lignes_zones1', 'barres1', 350, 350), modifier_periode_visualisation(1, 0, 0, 0, 0, 0, 0), detecter_souris(), detecter_resolution()">
	<div class="particles"></div>
	<script type="text/javascript" src="./scripts/ShaderProgram.js"></script>
	<script type="text/javascript" src="./scripts/Stats2.js"></script>
	<script type="text/javascript" src="./scripts/Snow.js"></script>
	<?php include('header.php') ?>

<script type="application/javascript" src="./scripts/var_globales.js"></script>
<script type="application/javascript" src="./scripts/creation_zone.js"></script>
<script type="application/javascript" src="./scripts/periode_de_visualisation.js"></script>
<script type="application/javascript" src="./scripts/gestionnaire_event.js"></script>
<script type="application/javascript" src="./scripts/button_add.js"></script>
<script type="application/javascript" src="./scripts/selection_menu_RDV.js"></script>
<script type="application/javascript" src="./scripts/affichage_informations.js"></script>
<script type="application/javascript" src="./scripts/zoom.js"></script>
<script type="application/javascript" src="./scripts/detection_resolution.js"></script>

<div class="rose">
				
			<!-- Zone SVG -->
			<!-- Formulaire -->
				<!-- Période -->
			
			<a href="#" onclick="vent_add_1()" id="boutton_RDV_1" class="boutton_RDV_1" style="display:block"></a>

			<a href="#" onclick="vent_add_2()" id="boutton_RDV_2" class="boutton_RDV_2" style="display:none"></a>

			<p id="txt_periode_RDV_1" class="txt_periode_RDV_1">
				Jusqu'à
			</p>
			<p id="txt_periode_RDV_2" class="txt_periode_RDV_2"></p>
			<p id="txt_periode_RDV_3" class="txt_periode_RDV_3"></p>

			<select name="année_Start_RDV_1_RDV_1" class="selectAnneeRDV_Start_RDV_1" dir="ltr" id="selectAnneeRDV_Start_RDV_1" lang="fr">

				<option selected="value" value="Annné_Start_RDV_1" >---   Année  ---</option>

				<option value="2011_Start_RDV_1"> 2011 </option>
				<option value="2012_Start_RDV_1"> 2012 </option>
				<option value="2013_Start_RDV_1"> 2013 </option>
				<option value="2014_Start_RDV_1"> 2014 </option>
				<option value="2015_Start_RDV_1"> 2015 </option>
				<option value="2016_Start_RDV_1"> 2016 </option>
				<option value="2017_Start_RDV_1"> 2017 </option>
				<option value="2018_Start_RDV_1"> 2018 </option>
				<option value="2019_Start_RDV_1"> 2019 </option>
				<option value="2020_Start_RDV_1"> 2020 </option>
			
			</select>
			
			<select name="mois_Start_RDV_1" class="selectMoisRDV_Start_RDV_1" dir="ltr" id="selectMoisRDV_Start_RDV_1" lang="fr">

				<option selected="value" value="MoisStart_RDV_1" > ---   Mois  --- </option>

				<option value="Janvier_Start_RDV_1"> Janvier </option>
				<option value="Février_Start_RDV_1"> Février </option>
				<option value="Mars_Start_RDV_1"> Mars </option>
				<option value="Avril_Start_RDV_1"> Avril </option>
				<option value="Mai_Start_RDV_1"> Mai </option>
				<option value="Juin_Start_RDV_1"> Juin </option>
				<option value="Juillet_Start_RDV_1"> Juillet</option>
				<option value="Aout_Start_RDV_1"> Aout </option>
				<option value="Septembre_Start_RDV_1"> Septembre </option>
				<option value="Octobre_Start_RDV_1"> Octobre </option>
				<option value="Novembre_Start_RDV_1"> Novembre </option>
				<option value="Decembre_Start_RDV_1"> Decembre</option>
				
				
			</select>
			<select name="jour_Start_RDV_1" class="selectJoursRDV_Start_RDV_1" dir="ltr" id="selectJoursRDV_Start_RDV_1" lang="fr">

				<option selected="value" value="Jour" > ---   Jour   --- </option>
				
				<option value="1_Start_RDV_1"> 1 </option>
				<option value="2_Start_RDV_1"> 2 </option>
				<option value="3_Start_RDV_1"> 3 </option>
				<option value="4_Start_RDV_1"> 4 </option>
				<option value="5_Start_RDV_1"> 5 </option>
				<option value="6_Start_RDV_1"> 6 </option>
				<option value="7_Start_RDV_1"> 7 </option>
				<option value="8_Start_RDV_1"> 8 </option>
				<option value="9_Start_RDV_1"> 9 </option>
				<option value="10_Start_RDV_1"> 10 </option>
				<option value="11_Start_RDV_1"> 11 </option>
				<option value="12_Start_RDV_1"> 12 </option>
				<option value="13_Start_RDV_1"> 13 </option>
				<option value="14_Start_RDV_1"> 14 </option>
				<option value="15_Start_RDV_1"> 15 </option>
				<option value="16_Start_RDV_1"> 16 </option>
				<option value="17_Start_RDV_1"> 17 </option>
				<option value="18_Start_RDV_1"> 18 </option>
				<option value="19_Start_RDV_1"> 19 </option>
				<option value="20_Start_RDV_1"> 20 </option>
				<option value="21_Start_RDV_1"> 21 </option>
				<option value="22_Start_RDV_1"> 22 </option>
				<option value="23_Start_RDV_1"> 23 </option>
				<option value="24_Start_RDV_1"> 24 </option>
				<option value="25_Start_RDV_1"> 25 </option>
				<option value="26_Start_RDV_1"> 26 </option>
				<option value="27_Start_RDV_1"> 27 </option>
				<option value="28_Start_RDV_1"> 28 </option>
				<option value="29_Start_RDV_1"> 29 </option>
				<option value="30_Start_RDV_1"> 30 </option>
				<option value="31_Start_RDV_1"> 31 </option>
				
			</select>

			<select name="année_End_RDV_1" class="selectAnneeRDV_End_RDV_1" dir="ltr" id="selectAnneeRDV_End_RDV_1" lang="fr">

				<option selected="value" value="Annné_End_RDV_1" >---   Année  ---</option>

				<option value="2011_End_RDV_1"> 2011 </option>
				<option value="2012_End_RDV_1"> 2012 </option>
				<option value="2013_End_RDV_1"> 2013 </option>
				<option value="2014_End_RDV_1"> 2014 </option>
				<option value="2015_End_RDV_1"> 2015 </option>
				<option value="2016_End_RDV_1"> 2016 </option>
				<option value="2017_End_RDV_1"> 2017 </option>
				<option value="2018_End_RDV_1"> 2018 </option>
				<option value="2019_End_RDV_1"> 2019 </option>
				<option value="2020_End_RDV_1"> 2020 </option>
			
			</select>
			
			<select name="mois_End_RDV_1" class="selectMoisRDV_End_RDV_1" dir="ltr" id="selectMoisRDV_End_RDV_1" lang="fr">

				<option selected="value" value="Mois_End_RDV_1" > ---   Mois  --- </option>

				<option value="Janvier_End_RDV_1"> Janvier </option>
				<option value="Février_End_RDV_1"> Février </option>
				<option value="Mars_End_RDV_1"> Mars </option>
				<option value="Avril_End_RDV_1"> Avril </option>
				<option value="Mai_End_RDV_1"> Mai </option>
				<option value="Juin_End_RDV_1"> Juin </option>
				<option value="Juillet_End_RDV_1"> Juillet</option>
				<option value="Aout_End_RDV_1"> Aout </option>
				<option value="Septembre_End_RDV_1"> Septembre </option>
				<option value="Octobre_End_RDV_1"> Octobre </option>
				<option value="Novembre_End_RDV_1"> Novembre </option>
				<option value="Decembre_End_RDV_1"> Decembre</option>
				
				
			</select>
			<select name="jour_End_RDV_1" class="selectJoursRDV_End_RDV_1" dir="ltr" id="selectJoursRDV_End_RDV_1" lang="fr">

				<option selected="value" value="Jour" > ---   Jour   --- </option>
				
				<option value="1_End_RDV_1"> 1 </option>
				<option value="2_End_RDV_1"> 2 </option>
				<option value="3_End_RDV_1"> 3 </option>
				<option value="4_End_RDV_1"> 4 </option>
				<option value="5_End_RDV_1"> 5 </option>
				<option value="6_End_RDV_1"> 6 </option>
				<option value="7_End_RDV_1"> 7 </option>
				<option value="8_End_RDV_1"> 8 </option>
				<option value="9_End_RDV_1"> 9 </option>
				<option value="10_End_RDV_1"> 10 </option>
				<option value="11_End_RDV_1"> 11 </option>
				<option value="12_End_RDV_1"> 12 </option>
				<option value="13_End_RDV_1"> 13 </option>
				<option value="14_End_RDV_1"> 14 </option>
				<option value="15_End_RDV_1"> 15 </option>
				<option value="16_End_RDV_1"> 16 </option>
				<option value="17_End_RDV_1"> 17 </option>
				<option value="18_End_RDV_1"> 18 </option>
				<option value="19_End_RDV_1"> 19 </option>
				<option value="20_End_RDV_1"> 20 </option>
				<option value="21_End_RDV_1"> 21 </option>
				<option value="22_End_RDV_1"> 22 </option>
				<option value="23_End_RDV_1"> 23 </option>
				<option value="24_End_RDV_1"> 24 </option>
				<option value="25_End_RDV_1"> 25 </option>
				<option value="26_End_RDV_1"> 26 </option>
				<option value="27_End_RDV_1"> 27 </option>
				<option value="28_End_RDV_1"> 28 </option>
				<option value="29_End_RDV_1"> 29 </option>
				<option value="30_End_RDV_1"> 30 </option>
				<option value="31_End_RDV_1"> 31 </option>
				
			</select>

				<!-- PiouPiou -->

			<select name="PiouPiou_RDV_1" class="selectPiouPiouRDV_1" dir="ltr" id="selectPiouPiouRDV_1" lang="fr">
				
				<option selected="value" value="ID PiouPiou"> --- ID du PiouPiou --- </option>

				<option value="001"> 001 </option>
				<option value="002"> 002 </option>
				<option value="003"> 003 </option>
				<option value="004"> 004 </option>
				<option value="005"> 005 </option>
				<option value="006"> 006 </option>
				<option value="007"> 007 </option>
				<option value="008"> 008 </option>
				<option value="009"> 009 </option>
				<option value="010"> 010 </option>
				<option value="011"> 011 </option>
				<option value="012"> 012 </option>
				<option value="013"> 013 </option>
				<option value="014"> 014 </option>
				<option value="015"> 015 </option>
				<option value="016"> 016 </option>
				<option value="017"> 017 </option>
				<option value="018"> 018 </option>
				<option value="019"> 019 </option>
				<option value="020"> 020 </option>
				<option value="100"> 100 </option>
				<option value="200"> 200 </option>
				<option value="300"> 300 </option>
				<option value="400"> 400 </option>
				<option value="500"> 500 </option>
				<option value="600"> 600 </option>

			</select>

			<div id="rose_2" class="rose_2" style="display:none">
				<select name="année_Start_RDV_2_RDV_2" class="selectAnneeRDV_Start_RDV_2" dir="ltr" id="selectAnneeRDV_Start_RDV_2" lang="fr">

					<option selected="value" value="Annné_Start_RDV_2" >---   Année  ---</option>

					<option value="2011_Start_RDV_2"> 2011 </option>
					<option value="2012_Start_RDV_2"> 2012 </option>
					<option value="2013_Start_RDV_2"> 2013 </option>
					<option value="2014_Start_RDV_2"> 2014 </option>
					<option value="2015_Start_RDV_2"> 2015 </option>
					<option value="2016_Start_RDV_2"> 2016 </option>
					<option value="2017_Start_RDV_2"> 2017 </option>
					<option value="2018_Start_RDV_2"> 2018 </option>
					<option value="2019_Start_RDV_2"> 2019 </option>
					<option value="2020_Start_RDV_2"> 2020 </option>

				</select>

				<select name="mois_Start_RDV_2" class="selectMoisRDV_Start_RDV_2" dir="ltr" id="selectMoisRDV_Start_RDV_2" lang="fr">

					<option selected="value" value="MoisStart_RDV_2" > ---   Mois  --- </option>

					<option value="Janvier_Start_RDV_2"> Janvier </option>
					<option value="Février_Start_RDV_2"> Février </option>
					<option value="Mars_Start_RDV_2"> Mars </option>
					<option value="Avril_Start_RDV_2"> Avril </option>
					<option value="Mai_Start_RDV_2"> Mai </option>
					<option value="Juin_Start_RDV_2"> Juin </option>
					<option value="Juillet_Start_RDV_2"> Juillet</option>
					<option value="Aout_Start_RDV_2"> Aout </option>
					<option value="Septembre_Start_RDV_2"> Septembre </option>
					<option value="Octobre_Start_RDV_2"> Octobre </option>
					<option value="Novembre_Start_RDV_2"> Novembre </option>
					<option value="Decembre_Start_RDV_2"> Decembre</option>


				</select>

				<select name="jour_Start_RDV_2" class="selectJoursRDV_Start_RDV_2" dir="ltr" id="selectJoursRDV_Start_RDV_2" lang="fr">

					<option selected="value" value="Jour" > ---   Jour   --- </option>

					<option value="1_Start_RDV_2"> 1 </option>
					<option value="2_Start_RDV_2"> 2 </option>
					<option value="3_Start_RDV_2"> 3 </option>
					<option value="4_Start_RDV_2"> 4 </option>
					<option value="5_Start_RDV_2"> 5 </option>
					<option value="6_Start_RDV_2"> 6 </option>
					<option value="7_Start_RDV_2"> 7 </option>
					<option value="8_Start_RDV_2"> 8 </option>
					<option value="9_Start_RDV_2"> 9 </option>
					<option value="10_Start_RDV_2"> 10 </option>
					<option value="11_Start_RDV_2"> 11 </option>
					<option value="12_Start_RDV_2"> 12 </option>
					<option value="13_Start_RDV_2"> 13 </option>
					<option value="14_Start_RDV_2"> 14 </option>
					<option value="15_Start_RDV_2"> 15 </option>
					<option value="16_Start_RDV_2"> 16 </option>
					<option value="17_Start_RDV_2"> 17 </option>
					<option value="18_Start_RDV_2"> 18 </option>
					<option value="19_Start_RDV_2"> 19 </option>
					<option value="20_Start_RDV_2"> 20 </option>
					<option value="21_Start_RDV_2"> 21 </option>
					<option value="22_Start_RDV_2"> 22 </option>
					<option value="23_Start_RDV_2"> 23 </option>
					<option value="24_Start_RDV_2"> 24 </option>
					<option value="25_Start_RDV_2"> 25 </option>
					<option value="26_Start_RDV_2"> 26 </option>
					<option value="27_Start_RDV_2"> 27 </option>
					<option value="28_Start_RDV_2"> 28 </option>
					<option value="29_Start_RDV_2"> 29 </option>
					<option value="30_Start_RDV_2"> 30 </option>
					<option value="31_Start_RDV_2"> 31 </option>

				</select>

				<select name="année_End_RDV_2" class="selectAnneeRDV_End_RDV_2" dir="ltr" id="selectAnneeRDV_End_RDV_2" lang="fr">

					<option selected="value" value="Annné_End_RDV_2" >---   Année  ---</option>

					<option value="2011_End_RDV_2"> 2011 </option>
					<option value="2012_End_RDV_2"> 2012 </option>
					<option value="2013_End_RDV_2"> 2013 </option>
					<option value="2014_End_RDV_2"> 2014 </option>
					<option value="2015_End_RDV_2"> 2015 </option>
					<option value="2016_End_RDV_2"> 2016 </option>
					<option value="2017_End_RDV_2"> 2017 </option>
					<option value="2018_End_RDV_2"> 2018 </option>
					<option value="2019_End_RDV_2"> 2019 </option>
					<option value="2020_End_RDV_2"> 2020 </option>

				</select>

				<select name="mois_End_RDV_2" class="selectMoisRDV_End_RDV_2" dir="ltr" id="selectMoisRDV_End_RDV_2" lang="fr">

					<option selected="value" value="Mois_End_RDV_2" > ---   Mois  --- </option>

					<option value="Janvier_End_RDV_2"> Janvier </option>
					<option value="Février_End_RDV_2"> Février </option>
					<option value="Mars_End_RDV_2"> Mars </option>
					<option value="Avril_End_RDV_2"> Avril </option>
					<option value="Mai_End_RDV_2"> Mai </option>
					<option value="Juin_End_RDV_2"> Juin </option>
					<option value="Juillet_End_RDV_2"> Juillet</option>
					<option value="Aout_End_RDV_2"> Aout </option>
					<option value="Septembre_End_RDV_2"> Septembre </option>
					<option value="Octobre_End_RDV_2"> Octobre </option>
					<option value="Novembre_End_RDV_2"> Novembre </option>
					<option value="Decembre_End_RDV_2"> Decembre</option>


				</select>

				<select name="jour_End_RDV_2" class="selectJoursRDV_End_RDV_2" dir="ltr" id="selectJoursRDV_End_RDV_2" lang="fr">

					<option selected="value" value="Jour" > ---   Jour   --- </option>

					<option value="1_End_RDV_2"> 1 </option>
					<option value="2_End_RDV_2"> 2 </option>
					<option value="3_End_RDV_2"> 3 </option>
					<option value="4_End_RDV_2"> 4 </option>
					<option value="5_End_RDV_2"> 5 </option>
					<option value="6_End_RDV_2"> 6 </option>
					<option value="7_End_RDV_2"> 7 </option>
					<option value="8_End_RDV_2"> 8 </option>
					<option value="9_End_RDV_2"> 9 </option>
					<option value="10_End_RDV_2"> 10 </option>
					<option value="11_End_RDV_2"> 11 </option>
					<option value="12_End_RDV_2"> 12 </option>
					<option value="13_End_RDV_2"> 13 </option>
					<option value="14_End_RDV_2"> 14 </option>
					<option value="15_End_RDV_2"> 15 </option>
					<option value="16_End_RDV_2"> 16 </option>
					<option value="17_End_RDV_2"> 17 </option>
					<option value="18_End_RDV_2"> 18 </option>
					<option value="19_End_RDV_2"> 19 </option>
					<option value="20_End_RDV_2"> 20 </option>
					<option value="21_End_RDV_2"> 21 </option>
					<option value="22_End_RDV_2"> 22 </option>
					<option value="23_End_RDV_2"> 23 </option>
					<option value="24_End_RDV_2"> 24 </option>
					<option value="25_End_RDV_2"> 25 </option>
					<option value="26_End_RDV_2"> 26 </option>
					<option value="27_End_RDV_2"> 27 </option>
					<option value="28_End_RDV_2"> 28 </option>
					<option value="29_End_RDV_2"> 29 </option>
					<option value="30_End_RDV_2"> 30 </option>
					<option value="31_End_RDV_2"> 31 </option>

				</select>

				<!-- PiouPiou -->

				<select name="PiouPiou_RDV_2" class="selectPiouPiouRDV_2" dir="ltr" id="selectPiouPiouRDV_2" lang="fr">

					<option selected="value" value="ID PiouPiou"> --- ID du PiouPiou --- </option>

					<option value="001"> 001 </option>
					<option value="002"> 002 </option>
					<option value="003"> 003 </option>
					<option value="004"> 004 </option>
					<option value="005"> 005 </option>
					<option value="006"> 006 </option>
					<option value="007"> 007 </option>
					<option value="008"> 008 </option>
					<option value="009"> 009 </option>
					<option value="010"> 010 </option>
					<option value="011"> 011 </option>
					<option value="012"> 012 </option>
					<option value="013"> 013 </option>
					<option value="014"> 014 </option>
					<option value="015"> 015 </option>
					<option value="016"> 016 </option>
					<option value="017"> 017 </option>
					<option value="018"> 018 </option>
					<option value="019"> 019 </option>
					<option value="020"> 020 </option>
					<option value="100"> 100 </option>
					<option value="200"> 200 </option>
					<option value="300"> 300 </option>
					<option value="400"> 400 </option>
					<option value="500"> 500 </option>
					<option value="600"> 600 </option>

				</select>

			</div>

			<div id="rose_3" class="rose_3" style="display:none">
				<select name="année_Start_RDV_3_RDV_3" class="selectAnneeRDV_Start_RDV_3" dir="ltr" id="selectAnneeRDV_Start_RDV_3" lang="fr">

					<option selected="value" value="Annné_Start_RDV_3" >---   Année  ---</option>

					<option value="2011_Start_RDV_3"> 2011 </option>
					<option value="2012_Start_RDV_3"> 2012 </option>
					<option value="2013_Start_RDV_3"> 2013 </option>
					<option value="2014_Start_RDV_3"> 2014 </option>
					<option value="2015_Start_RDV_3"> 2015 </option>
					<option value="2016_Start_RDV_3"> 2016 </option>
					<option value="2017_Start_RDV_3"> 2017 </option>
					<option value="2018_Start_RDV_3"> 2018 </option>
					<option value="2019_Start_RDV_3"> 2019 </option>
					<option value="2020_Start_RDV_3"> 2020 </option>

				</select>

				<select name="mois_Start_RDV_3" class="selectMoisRDV_Start_RDV_3" dir="ltr" id="selectMoisRDV_Start_RDV_3" lang="fr">

					<option selected="value" value="MoisStart_RDV_3" > ---   Mois  --- </option>

					<option value="Janvier_Start_RDV_3"> Janvier </option>
					<option value="Février_Start_RDV_3"> Février </option>
					<option value="Mars_Start_RDV_3"> Mars </option>
					<option value="Avril_Start_RDV_3"> Avril </option>
					<option value="Mai_Start_RDV_3"> Mai </option>
					<option value="Juin_Start_RDV_3"> Juin </option>
					<option value="Juillet_Start_RDV_3"> Juillet</option>
					<option value="Aout_Start_RDV_3"> Aout </option>
					<option value="Septembre_Start_RDV_3"> Septembre </option>
					<option value="Octobre_Start_RDV_3"> Octobre </option>
					<option value="Novembre_Start_RDV_3"> Novembre </option>
					<option value="Decembre_Start_RDV_3"> Decembre</option>


				</select>

				<select name="jour_Start_RDV_3" class="selectJoursRDV_Start_RDV_3" dir="ltr" id="selectJoursRDV_Start_RDV_3" lang="fr">

					<option selected="value" value="Jour" > ---   Jour   --- </option>

					<option value="1_Start_RDV_3"> 1 </option>
					<option value="2_Start_RDV_3"> 2 </option>
					<option value="3_Start_RDV_3"> 3 </option>
					<option value="4_Start_RDV_3"> 4 </option>
					<option value="5_Start_RDV_3"> 5 </option>
					<option value="6_Start_RDV_3"> 6 </option>
					<option value="7_Start_RDV_3"> 7 </option>
					<option value="8_Start_RDV_3"> 8 </option>
					<option value="9_Start_RDV_3"> 9 </option>
					<option value="10_Start_RDV_3"> 10 </option>
					<option value="11_Start_RDV_3"> 11 </option>
					<option value="12_Start_RDV_3"> 12 </option>
					<option value="13_Start_RDV_3"> 13 </option>
					<option value="14_Start_RDV_3"> 14 </option>
					<option value="15_Start_RDV_3"> 15 </option>
					<option value="16_Start_RDV_3"> 16 </option>
					<option value="17_Start_RDV_3"> 17 </option>
					<option value="18_Start_RDV_3"> 18 </option>
					<option value="19_Start_RDV_3"> 19 </option>
					<option value="20_Start_RDV_3"> 20 </option>
					<option value="21_Start_RDV_3"> 21 </option>
					<option value="22_Start_RDV_3"> 22 </option>
					<option value="23_Start_RDV_3"> 23 </option>
					<option value="24_Start_RDV_3"> 24 </option>
					<option value="25_Start_RDV_3"> 25 </option>
					<option value="26_Start_RDV_3"> 26 </option>
					<option value="27_Start_RDV_3"> 27 </option>
					<option value="28_Start_RDV_3"> 28 </option>
					<option value="29_Start_RDV_3"> 29 </option>
					<option value="30_Start_RDV_3"> 30 </option>
					<option value="31_Start_RDV_3"> 31 </option>

				</select>

				<select name="année_End_RDV_3" class="selectAnneeRDV_End_RDV_3" dir="ltr" id="selectAnneeRDV_Start_RDV_3" lang="fr">

					<option selected="value" value="Annné_End_RDV_3" >---   Année  ---</option>

					<option value="2011_End_RDV_3"> 2011 </option>
					<option value="2012_End_RDV_3"> 2012 </option>
					<option value="2013_End_RDV_3"> 2013 </option>
					<option value="2014_End_RDV_3"> 2014 </option>
					<option value="2015_End_RDV_3"> 2015 </option>
					<option value="2016_End_RDV_3"> 2016 </option>
					<option value="2017_End_RDV_3"> 2017 </option>
					<option value="2018_End_RDV_3"> 2018 </option>
					<option value="2019_End_RDV_3"> 2019 </option>
					<option value="2020_End_RDV_3"> 2020 </option>

				</select>

				<select name="mois_End_RDV_3" class="selectMoisRDV_End_RDV_3" dir="ltr" id="selectMoisRDV_End_RDV_3" lang="fr">

					<option selected="value" value="Mois_End_RDV_3" > ---   Mois  --- </option>

					<option value="Janvier_End_RDV_3"> Janvier </option>
					<option value="Février_End_RDV_3"> Février </option>
					<option value="Mars_End_RDV_3"> Mars </option>
					<option value="Avril_End_RDV_3"> Avril </option>
					<option value="Mai_End_RDV_3"> Mai </option>
					<option value="Juin_End_RDV_3"> Juin </option>
					<option value="Juillet_End_RDV_3"> Juillet</option>
					<option value="Aout_End_RDV_3"> Aout </option>
					<option value="Septembre_End_RDV_3"> Septembre </option>
					<option value="Octobre_End_RDV_3"> Octobre </option>
					<option value="Novembre_End_RDV_3"> Novembre </option>
					<option value="Decembre_End_RDV_3"> Decembre</option>


				</select>

				<select name="jour_End_RDV_3" class="selectJoursRDV_End_RDV_3" dir="ltr" id="selectJoursRDV_End_RDV_3" lang="fr">

					<option selected="value" value="Jour" > ---   Jour   --- </option>

					<option value="1_End_RDV_3"> 1 </option>
					<option value="2_End_RDV_3"> 2 </option>
					<option value="3_End_RDV_3"> 3 </option>
					<option value="4_End_RDV_3"> 4 </option>
					<option value="5_End_RDV_3"> 5 </option>
					<option value="6_End_RDV_3"> 6 </option>
					<option value="7_End_RDV_3"> 7 </option>
					<option value="8_End_RDV_3"> 8 </option>
					<option value="9_End_RDV_3"> 9 </option>
					<option value="10_End_RDV_3"> 10 </option>
					<option value="11_End_RDV_3"> 11 </option>
					<option value="12_End_RDV_3"> 12 </option>
					<option value="13_End_RDV_3"> 13 </option>
					<option value="14_End_RDV_3"> 14 </option>
					<option value="15_End_RDV_3"> 15 </option>
					<option value="16_End_RDV_3"> 16 </option>
					<option value="17_End_RDV_3"> 17 </option>
					<option value="18_End_RDV_3"> 18 </option>
					<option value="19_End_RDV_3"> 19 </option>
					<option value="20_End_RDV_3"> 20 </option>
					<option value="21_End_RDV_3"> 21 </option>
					<option value="22_End_RDV_3"> 22 </option>
					<option value="23_End_RDV_3"> 23 </option>
					<option value="24_End_RDV_3"> 24 </option>
					<option value="25_End_RDV_3"> 25 </option>
					<option value="26_End_RDV_3"> 26 </option>
					<option value="27_End_RDV_3"> 27 </option>
					<option value="28_End_RDV_3"> 28 </option>
					<option value="29_End_RDV_3"> 29 </option>
					<option value="30_End_RDV_3"> 30 </option>
					<option value="31_End_RDV_3"> 31 </option>

				</select>

				<!-- PiouPiou -->

				<select name="PiouPiou_RDV_3" class="selectPiouPiouRDV_3" dir="ltr" id="selectPiouPiouRDV_3" lang="fr">

					<option selected="value" value="ID PiouPiou"> --- ID du PiouPiou --- </option>

					<option value="001"> 001 </option>
					<option value="002"> 002 </option>
					<option value="003"> 003 </option>
					<option value="004"> 004 </option>
					<option value="005"> 005 </option>
					<option value="006"> 006 </option>
					<option value="007"> 007 </option>
					<option value="008"> 008 </option>
					<option value="009"> 009 </option>
					<option value="010"> 010 </option>
					<option value="011"> 011 </option>
					<option value="012"> 012 </option>
					<option value="013"> 013 </option>
					<option value="014"> 014 </option>
					<option value="015"> 015 </option>
					<option value="016"> 016 </option>
					<option value="017"> 017 </option>
					<option value="018"> 018 </option>
					<option value="019"> 019 </option>
					<option value="020"> 020 </option>
					<option value="100"> 100 </option>
					<option value="200"> 200 </option>
					<option value="300"> 300 </option>
					<option value="400"> 400 </option>
					<option value="500"> 500 </option>
					<option value="600"> 600 </option>

				</select>

			</div>

			<div id="rose_des_vents1" class="rose_des_ventsN1" style="75%">
				
				<svg:svg width="60" height="550" transform="translate(870 -75)">
					<svg:g>
					<svg:rect id="rect2" width="60" height="550"  stroke="white" fill="none" stroke-width="4" fill-opacity="0.4"  />
						<svg:rect id="rect" width="60" height="330" fill="black" stroke="white" stroke-width="3" transform="translate(0 220)" />
					</svg:g>
				</svg:svg>
			
			<!--<img style="width:700px; height:700px; position:absolute; opacity:0;" usemap="#zone_circulaire1"/>
			<map name="zone_circulaire1">
				<area shape="circle" coords="350,350,350" id="img_zone_circulaire1"/>
			</map>-->

				<svg:svg width="700px" height="700px">
					
					<!-- Grand cercle -->
					<svg:circle r="50%" cy="50%" cx="50%" stroke-width="0.5%" stroke="white" fill="none"/>

					<!-- Groupement des barres -->
					<svg:g id="barres1" stroke="grey" stroke-width="0.5"/> <!-- tester avec 0.07% avec valeurs -->
			
					<!-- Petit cercle -->
					<svg:circle r="21.4%" cy="50%" cx="50%" stroke-width="1" stroke="white" fill="white" id="c150"/>
			

					<!-- Groupement des lignes -->
					<svg:g id="lignes_zones1" stroke="white" stroke-width="3"/>
					

					<!-- Groupement des noms de zone -->
					<svg:g stroke="black">
						<svg:text x="49%" y="51%" id="num_barres1" num="1" style="font-size:2em">1</svg:text>
						<svg:text x="49.3%" y="31%" stroke="darkred">N</svg:text>
						<svg:text x="55.2%" y="32.6%" stroke="darkred">NNE </svg:text>
						<svg:text x="62.5%" y="36.75%" stroke="darkred">NE</svg:text>
						<svg:text x="65%" y="43%" stroke="darkred">ENE</svg:text>
						<svg:text x="69%" y="50.5%" stroke="darkred">E</svg:text>
						<svg:text x="65%" y="58.5%" stroke="darkred">ESE</svg:text>
						<svg:text x="62.5%" y="65%" stroke="darkred">SE</svg:text>
						<svg:text x="55.2%" y="68.75%" stroke="darkred">SSE</svg:text>
						<svg:text x="49.3%" y="71%" stroke="darkred">S</svg:text>
						<svg:text x="39.65%" y="68.75%" stroke="darkred">SSO</svg:text>
						<svg:text x="34.75%" y="65%" stroke="darkred">SO</svg:text>
						<svg:text x="30.5%" y="58.5%" stroke="darkred">OSO</svg:text>
						<svg:text x="29%" y="50.5%" stroke="darkred">O</svg:text>
						<svg:text x="30.5%" y="43%" stroke="darkred">ONO</svg:text>
						<svg:text x="34.75%" y="36.75%" stroke="darkred">NO</svg:text>
						<svg:text x="39.65%" y="32.6%" stroke="darkred">NNO</svg:text>
					</svg:g>
					
				</svg:svg>

				<div id="rose_des_vents2" style="display:none;" >
				<!--<img style="width:700px; height:700px; position:absolute; opacity:0;" usemap="#zone_circulaire2"/>
				<map name="zone_circulaire2">
					<area shape="circle" coords="350,350,350" id="img_zone_circulaire2"/>
				</map>-->
				<!-- Zone SVG -->
					
					<svg:svg width="700px" height="700px">

						<!-- Grand cercle -->
						<svg:circle r="50%" cy="50%" cx="50%" stroke-width="0.5%" stroke="white" fill="none"/>

						<!-- Groupement des barres -->
						<svg:g id="barres2" stroke="grey" stroke-width="0.5"/> <!-- tester avec 0.07% avec valeurs -->
				
						<!-- Petit cercle -->
						<svg:circle r="21.4%" cy="50%" cx="50%" stroke-width="1" stroke="white" fill="white" id="c150"/>
				
						<!-- Groupement des lignes -->
						<svg:g id="lignes_zones2" stroke="white" stroke-width="2"/>

						<!-- Groupement des noms de zone -->
						<svg:g stroke="black">
							<svg:text x="49%" y="51%" id="num_barres2" num="2" style="font-size:2em">2</svg:text>
							<svg:text x="49.3%" y="31%" stroke="darkred">N</svg:text>
							<svg:text x="55.2%" y="32.6%" stroke="darkred">NNE </svg:text>
							<svg:text x="62.5%" y="36.75%" stroke="darkred">NE</svg:text>
							<svg:text x="65%" y="43%" stroke="darkred">ENE</svg:text>
							<svg:text x="69%" y="50.5%" stroke="darkred">E</svg:text>
							<svg:text x="65%" y="58.5%" stroke="darkred">ESE</svg:text>
							<svg:text x="62.5%" y="65%" stroke="darkred">SE</svg:text>
							<svg:text x="55.2%" y="68.75%" stroke="darkred">SSE</svg:text>
							<svg:text x="49.3%" y="71%" stroke="darkred">S</svg:text>
							<svg:text x="39.65%" y="68.75%" stroke="darkred">SSO</svg:text>
							<svg:text x="34.75%" y="65%" stroke="darkred">SO</svg:text>
							<svg:text x="30.5%" y="58.5%" stroke="darkred">OSO</svg:text>
							<svg:text x="29%" y="50.5%" stroke="darkred">O</svg:text>
							<svg:text x="30.5%" y="43%" stroke="darkred">ONO</svg:text>
							<svg:text x="34.75%" y="36.75%" stroke="darkred">NO</svg:text>
							<svg:text x="39.65%" y="32.6%" stroke="darkred">NNO</svg:text>
						</svg:g>
					</svg:svg>
					<div id="rose_des_vents3" style="display:none;" >
					<!--<img style="width:700px; height:700px; position:absolute; opacity:0;" usemap="#zone_circulaire2"/>
					<map name="zone_circulaire2">
						<area shape="circle" coords="350,350,350" id="img_zone_circulaire2"/>
					</map>-->
					<!-- Zone SVG -->
						
						<svg:svg width="700px" height="700px">

							<!-- Grand cercle -->
							<svg:circle r="50%" cy="50%" cx="50%" stroke-width="0.5%" stroke="white" fill="none"/>

							<!-- Groupement des barres -->
							<svg:g id="barres3" stroke="grey" stroke-width="0.5"/> <!-- tester avec 0.07% avec valeurs -->
					
							<!-- Petit cercle -->
							<svg:circle r="21.4%" cy="50%" cx="50%" stroke-width="1" stroke="white" fill="white" id="c150"/>
					
							<!-- Groupement des lignes -->
							<svg:g id="lignes_zones3" stroke="white" stroke-width="2"/>

							<!-- Groupement des noms de zone -->
							<svg:g stroke="black">
								<svg:text x="49%" y="51%" id="num_barres3" num="3" style="font-size:2em">3</svg:text>
								<svg:text x="49.3%" y="31%" stroke="darkred">N</svg:text>
								<svg:text x="55.2%" y="32.6%" stroke="darkred">NNE </svg:text>
								<svg:text x="62.5%" y="36.75%" stroke="darkred">NE</svg:text>
								<svg:text x="65%" y="43%" stroke="darkred">ENE</svg:text>
								<svg:text x="69%" y="50.5%" stroke="darkred">E</svg:text>
								<svg:text x="65%" y="58.5%" stroke="darkred">ESE</svg:text>
								<svg:text x="62.5%" y="65%" stroke="darkred">SE</svg:text>
								<svg:text x="55.2%" y="68.75%" stroke="darkred">SSE</svg:text>
								<svg:text x="49.3%" y="71%" stroke="darkred">S</svg:text>
								<svg:text x="39.65%" y="68.75%" stroke="darkred">SSO</svg:text>
								<svg:text x="34.75%" y="65%" stroke="darkred">SO</svg:text>
								<svg:text x="30.5%" y="58.5%" stroke="darkred">OSO</svg:text>
								<svg:text x="29%" y="50.5%" stroke="darkred">O</svg:text>
								<svg:text x="30.5%" y="43%" stroke="darkred">ONO</svg:text>
								<svg:text x="34.75%" y="36.75%" stroke="darkred">NO</svg:text>
								<svg:text x="39.65%" y="32.6%" stroke="darkred">NNO</svg:text>
							</svg:g>
						</svg:svg>
					</div>
				</div>
			</div>
	</div>


</body>
</html>