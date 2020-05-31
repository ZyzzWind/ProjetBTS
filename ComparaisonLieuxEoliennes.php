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
  <link rel="stylesheet" href="graphComparaison.css"></link>
</head>

<body id="corps">
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


<div id="window_e1"></div>
	<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="graphComp" aria-labelledby="title" role="img">
	<g class="grid x-grid" id="xGrid">
	<line x1="90" x2="90" y1="0" y2="530"></line>
	</g>
	<g class="grid y-grid" id="yGrid">
	<line x1="90" x2="1200" y1="530" y2="530"></line>
	</g>
	<g class="labels x-labels">
	<text x="120" y="560">Site1</text>
	<text x="220" y="560">Site2</text>
	<text x="315" y="560">Site3</text>
	<text x="410" y="560">Site4</text>
	<text x="505" y="560">Site5</text>
	<text x="600" y="560">Site6</text>
	<text x="700" y="560">Site7</text>
	<text x="790" y="560">Site8</text>
	<text x="890" y="560">Site9</text>
	<text x="985" y="560">Site10</text>
	<text x="1080" y="560">Site11</text>
	</g>

	<g class="labels y-labels">
	<text class="pui_max" x="80" y="10"></text>
	<text class="pui_inter_2" x="80" y="190"></text>
	<text class="pui_inter_1" x="80" y="370"></text>
	<text x="80" y="540">0</text>
	</g>

	<g class="label y-titre">
	<text x="50" y="290" class="label-title">Mw</text>
	</g>
	<!-- height = prod energetique y = 530 - height -->
	<g class="data" data-setname="Our first data set">
	<rect id="Histo_Site1" x="90" y="0" width="50" height="0"  ></rect>
	<rect id="Histo_Site2" x="195" y="0" width="50" height="0" ></rect>
	<rect id="Histo_Site3" x="290" y="0" width="50" height="0" ></rect>
	<rect id="Histo_Site4" x="385" y="0" width="50" height="0" ></rect>
	<rect id="Histo_Site5" x="480" y="0" width="50" height="0" ></rect>
	<rect id="Histo_Site6" x="575" y="0" width="50" height="0" ></rect>
	<rect id="Histo_Site7" x="670" y="0" width="50" height="0" ></rect>
	<rect id="Histo_Site8" x="765" y="0" width="50" height="0" ></rect>
	<rect id="Histo_Site9" x="860" y="0" width="50" height="0" ></rect>
	<rect id="Histo_Site10" x="955" y="0" width="50" height="0" ></rect>
	<rect id="Histo_Site11" x="1050" y="0" width="50" height="0" ></rect>
	</g>
	</svg>


		<div id="rose_des_vents1" class="rose_des_ventsN1">
			
		<!--<img style="width:700px; height:700px; position:absolute; opacity:0;" usemap="#zone_circulaire1"/>
		<map name="zone_circulaire1">
			<area shape="circle" coords="350,350,350" id="img_zone_circulaire1"/>
		</map>-->
				
			<!-- Zone SVG -->
			<!-- Formulaire -->
				<!-- Période -->
			
			<a href="#" onclick="eolienne_reset_select()" id="boutton_CPE_reset" class="boutton_CPE_reset" style="display:none"></a>
			<a href="#" onclick="eolienne_add_1()" id="boutton_CPS_1" class="boutton_CPS_1" style="display:block"></a>
			<a href="#" onclick="eolienne_add_2()" id="boutton_CPS_1" class="boutton_CPE_2" style="display:none"></a>
			<a href="#" onclick="eolienne_add_3()" id="boutton_CPS_1" class="boutton_CPE_3" style="display:none"></a>
			<a href="#" onclick="eolienne_add_4()" id="boutton_CPS_1" class="boutton_CPE_4" style="display:none"></a>
			<a href="#" onclick="eolienne_add_5()" id="boutton_CPE_5" class="boutton_CPE_5" style="display:none"></a>
			<a href="#" onclick="eolienne_add_6()" id="boutton_CPE_6" class="boutton_CPE_6" style="display:none"></a>
			<a href="#" onclick="eolienne_add_7()" id="boutton_CPE_7" class="boutton_CPE_7" style="display:none"></a>
			<a href="#" onclick="eolienne_add_8()" id="boutton_CPE_8" class="boutton_CPE_8" style="display:none"></a>
			<a href="#" onclick="eolienne_add_9()" id="boutton_CPE_9" class="boutton_CPE_9" style="display:none"></a>
			<a href="#" onclick="eolienne_add_10()" id="boutton_CPE_10" class="boutton_CPE_10" style="display:none"></a>
			<a href="#" onclick="eolienne_add_11()" id="boutton_CPE_11" class="boutton_CPE_11" style="display:none"></a>





			<select name="année" class="selectAnneeCPS" dir="ltr" id="selectAnneeCPS" lang="fr">

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
			
			<select name="mois" class="selectMoisCPS" dir="ltr" id="selectMoisCPS" lang="fr">

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

			<select name="jour" class="selectJoursCPS" dir="ltr" id="selectJoursCPS" lang="fr">

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

			<select name="PiouPiou" class="selectPiouPiouCPS1" dir="ltr" id="selectPiouPiouCPS1" lang="fr">
				
				<option selected="value" value="ID PiouPiou"> --- ID du PiouPiou 1 --- </option>

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
      
      <select name="PiouPiou" class="selectPiouPiouCPS2" dir="ltr" id="selectPiouPiouCPS2" lang="fr">
				
				<option selected="value" value="ID PiouPiou"> --- ID du PiouPiou 2 --- </option>

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

		<select name="PiouPiou" class="selectPiouPiouCPS4" dir="ltr" id="selectPiouPiouCPS4" lang="fr">

		</select>	

		<select name="PiouPiou" class="selectPiouPiouCPS5" dir="ltr" id="selectPiouPiouCPS5" lang="fr">

		</select>	

		<select name="PiouPiou" class="selectPiouPiouCPS6" dir="ltr" id="selectPiouPiouCPS6" lang="fr">

		</select>	

		<select name="PiouPiou" class="selectPiouPiouCPS7" dir="ltr" id="selectPiouPiouCPS7" lang="fr">

		</select>	

		<select name="PiouPiou" class="selectPiouPiouCPS8" dir="ltr" id="selectPiouPiouCPS8" lang="fr">

		</select>	

		<select name="PiouPiou" class="selectPiouPiouCPS9" dir="ltr" id="selectPiouPiouCPS9" lang="fr">

		</select>	

		<select name="PiouPiou" class="selectPiouPiouCPS10" dir="ltr" id="selectPiouPiouCPS10" lang="fr">

		</select>	

      <!-- Eolienne -->

      <select name="Eolienne" class="selectEolienneCPS" dir="ltr" id="selectEolienneCPS" lang="fr">
				
				<option selected="value" value="ID_Eolienne"> --- Eolienne --- </option>

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
	<script type="text/javascript" src="./scripts/affichage_données_comparaison_sites.js"></script>
	</div>


</body>
</html>