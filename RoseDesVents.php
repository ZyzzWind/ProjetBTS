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
<script type="application/javascriptt" src="./scripts/periode_de_visualisation.js"></script>
<script type="application/javascriptt" src="./scripts/gestionnaire_event.js"></script>
<script type="application/javascript" src="./scripts/selection_menu_RDV.js"></script>
<script type="application/javascript" src="./scripts/affichage_informations.js"></script>
<script type="application/javascript" src="./scripts/zoom.js"></script>
<script type="application/javascript" src="./scripts/detection_resolution.js"></script>



<div class="rose">
    <div id="rose_des_vents1">
			
			<!--<img style="width:700px; height:700px; position:absolute; opacity:0;" usemap="#zone_circulaire1"/>
			<map name="zone_circulaire1">
				<area shape="circle" coords="350,350,350" id="img_zone_circulaire1"/>
			</map>-->
			
			<!-- Zone SVG -->
			<svg:svg width="700px" height="700px">

				<!-- Grand cercle -->
				<svg:circle r="350" cy="350" cx="350" stroke-width="4" stroke="white" fill="none"/>

				<!-- Groupement des barres -->
				<svg:g id="barres1" stroke="grey" stroke-width="0.5"/>
		
				<!-- Petit cercle -->
				<svg:circle r="150" cy="350" cx="350" stroke-width="1" stroke="white" fill="white" id="c150"/>
		

				<!-- Groupement des lignes -->
				<svg:g id="lignes_zones1" stroke="white" stroke-width="3"/>
				

				<!-- Groupement des noms de zone -->
				<svg:g stroke="black">
					<svg:text x="340" y="360" id="num_barres1" num="1" style="font-size:2em">1</svg:text>
					<svg:text x="345" y="220" stroke="darkred">N</svg:text>
					<svg:text x="385" y="230" stroke="darkred">NNE </svg:text>
					<svg:text x="430" y="260" stroke="darkred">NE</svg:text>
					<svg:text x="455" y="305" stroke="darkred">ENE</svg:text>
					<svg:text x="480" y="355" stroke="darkred">E</svg:text>
					<svg:text x="455" y="405" stroke="darkred">ESE</svg:text>
					<svg:text x="435" y="450" stroke="darkred">SE</svg:text>
					<svg:text x="387" y="480" stroke="darkred">SSE</svg:text>
					<svg:text x="345" y="490" stroke="darkred">S</svg:text>
					<svg:text x="285" y="480" stroke="darkred">SSO</svg:text>
					<svg:text x="250" y="450" stroke="darkred">SO</svg:text>
					<svg:text x="215" y="405" stroke="darkred">OSO</svg:text>
					<svg:text x="208" y="355" stroke="darkred">O</svg:text>
					<svg:text x="215" y="305" stroke="darkred">ONO</svg:text>
					<svg:text x="245" y="260" stroke="darkred">NO</svg:text>
					<svg:text x="280" y="233" stroke="darkred">NNO</svg:text>
				</svg:g>
				
			</svg:svg>
		</div>
	</div>


</body>
</html>