<?php
header("Content-type: application/xhtml+xml"); 
print('<?xml version="1.0" encoding="UTF-8"?>');
?>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" xmlns:svg="http://www.w3.org/2000/svg">
<head>
  <meta charset="UTF-8"/>
  <title>BTS windbird</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="style.css"/>
  <link rel="stylesheet" href="bouttons.css"/>
  <link rel="stylesheet" href="graphProgression.css"/>
  <link rel="stylesheet" href="graphProgressionJour.css"/>
  <link rel="stylesheet" href="testphpformulaire.css"/>
</head>


<body>
<?php include('header.php') ?>
  <div class="particles"></div>
  <script type="text/javascript" src="./scripts/ShaderProgram.js"></script>
  <script type="text/javascript" src="./scripts/Stats2.js"></script>
  <script type="text/javascript" src="./scripts/Snow.js"></script>
  <script type="text/javascript" src="./scripts/function_calcul.js"></script>

<div class="rose">

<div id="formulaire">

  <form method="POST" id="form">
   <p> Eolienne<br /></p>
   <select id="Eolien">
      <option value="01">Eolienne 1</option>
      <option value="02">Eolienne 2</option>
   </select>
   
    <p>Annee<br /></p>
   <select id="Annee">
      <option value="2020">2020</option>
   </select>

    <p>PiouPiou<br /></p>
     <select id="Pioupiou">
      <option value="01">Pioupiou 1</option>
      <option value="02">Pioupiou 2</option>
   </select>

    <p>
   <input type="reset" name="Annuler" value="Annuler" />
    </p>
  </form>
  <input type="button" value="Envoyer"  onclick="calcul()"/>

</div>

  <!-- -->

<select name="mois" class="selectMoisPPE" dir="ltr" id="selectMoisPPE" lang="fr"></select>

  <div id="window_e1"></div>


  <!--
  _______      _______     _____ _____  _____  _    _ _____ ____  _    _ ______    _____        _____    __  __  ____ _____  _____ 
 / ____\ \    / / ____|   / ____|  __ \|  __ \| |  | |_   _/ __ \| |  | |  ____|  |  __ \ /\   |  __ \  |  \/  |/ __ \_   _|/ ____|
| (___  \ \  / / |  __   | |  __| |__) | |__) | |__| | | || |  | | |  | | |__     | |__) /  \  | |__) | | \  / | |  | || | | (___  
 \___ \  \ \/ /| | |_ |  | | |_ |  _  /|  ___/|  __  | | || |  | | |  | |  __|    |  ___/ /\ \ |  _  /  | |\/| | |  | || |  \___ \ 
 ____) |  \  / | |__| |  | |__| | | \ \| |    | |  | |_| || |__| | |__| | |____   | |  / ____ \| | \ \  | |  | | |__| || |_ ____) |
|_____/    \/   \_____|   \_____|_|  \_\_|    |_|  |_|_____\___\_\\____/|______|  |_| /_/    \_\_|  \_\ |_|  |_|\____/_____|_____/                                                                                                                          
  -->


  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="graph" id="graph" aria-labelledby="title" role="img">

  <g class="grid x-grid" id="xGrid">
  <line x1="90" x2="90" y1="0" y2="530"></line>
</g>
<g class="grid y-grid" id="yGrid">
  <line x1="90" x2="1200" y1="530" y2="530"></line>
</g>
  <g class="labels x-labels">
  <text x="120" y="560">Janvier</text>
  <text x="220" y="560">Fevrier</text>
  <text x="315" y="560">Mars</text>
  <text x="410" y="560">Avril</text>
  <text x="505" y="560">Mai</text>
  <text x="600" y="560">Juin</text>
  <text x="700" y="560">Juillet</text>
  <text x="790" y="560">Aout</text>
  <text x="890" y="560">Septembre</text>
  <text x="985" y="560">Octobre</text>
  <text x="1080" y="560">Novembre</text>
  <text x="1170" y="560">Decembre</text>


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
<g id="histo_mois" class="data" data-setname="Our first data set">
  <rect id="Histo_Janvier" x="90" y="0" width="50" height="0"  ></rect>
  <rect id="Histo_Fevrier" x="195" y="0" width="50" height="0" ></rect>
  <rect id="Histo_Mars" x="290" y="0" width="50" height="0" ></rect>
  <rect id="Histo_Avril" x="385" y="0" width="50" height="0" ></rect>
  <rect id="Histo_Mai" x="480" y="0" width="50" height="0" ></rect>
  <rect id="Histo_Juin" x="575" y="0" width="50" height="0" ></rect>
  <rect id="Histo_Juillet" x="670" y="0" width="50" height="0" ></rect>
  <rect id="Histo_Aout" x="765" y="0" width="50" height="0" ></rect>
  <rect id="Histo_Septembre" x="860" y="0" width="50" height="0" ></rect>
  <rect id="Histo_Octobre" x="955" y="0" width="50" height="0" ></rect>
  <rect id="Histo_Novembre" x="1050" y="0" width="50" height="0" ></rect>
  <rect id="Histo_Decembre" x="1145" y="0" width="50" height="0" ></rect>
</g>
</svg>


  <!--
  _______      _______     _____ _____  _____  _    _ _____ ____  _    _ ______    _____        _____          _  ____  _    _ _____  
 / ____\ \    / / ____|   / ____|  __ \|  __ \| |  | |_   _/ __ \| |  | |  ____|  |  __ \ /\   |  __ \        | |/ __ \| |  | |  __ \ 
| (___  \ \  / / |  __   | |  __| |__) | |__) | |__| | | || |  | | |  | | |__     | |__) /  \  | |__) |       | | |  | | |  | | |__) |
 \___ \  \ \/ /| | |_ |  | | |_ |  _  /|  ___/|  __  | | || |  | | |  | |  __|    |  ___/ /\ \ |  _  /    _   | | |  | | |  | |  _  / 
 ____) |  \  / | |__| |  | |__| | | \ \| |    | |  | |_| || |__| | |__| | |____   | |  / ____ \| | \ \   | |__| | |__| | |__| | | \ \ 
|_____/    \/   \_____|   \_____|_|  \_\_|    |_|  |_|_____\___\_\\____/|______|  |_| /_/    \_\_|  \_\   \____/ \____/ \____/|_|  \_\                                                                                                                
  -->


<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="graphJour" id="graphJour" aria-labelledby="title" role="img">

  <g class="grid x-grid" id="xGrid">
  <line x1="90" x2="90" y1="0" y2="530"></line>
</g>
<g class="grid y-grid" id="yGrid">
  <line x1="90" x2="1200" y1="530" y2="530"></line>
</g>
  <g class="labels x-labels">
  <text x="95" y="560">1</text>
  <text x="130" y="560">2</text>
  <text x="165" y="560">3</text>
  <text x="200" y="560">4</text>
  <text x="235" y="560">5</text>
  <text x="270" y="560">6</text>
  <text x="300" y="560">7</text>
  <text x="340" y="560">8</text>
  <text x="375" y="560">9</text>
  <text x="410" y="560">10</text>
  <text x="445" y="560">11</text>
  <text x="480" y="560">12</text>
  <text x="515" y="560">13</text>
  <text x="550" y="560">14</text>
  <text x="585" y="560">15</text>
  <text x="620" y="560">16</text>
  <text x="655" y="560">17</text>
  <text x="690" y="560">18</text>
  <text x="725" y="560">19</text>
  <text x="760" y="560">20</text>
  <text x="795" y="560">21</text>
  <text x="830" y="560">22</text>
  <text x="865" y="560">23</text>
  <text x="900" y="560">24</text>
  <text x="935" y="560">25</text>
  <text x="970" y="560">26</text>
  <text x="1005" y="560">27</text>
  <text x="1040" y="560">28</text>
  <text x="1075" y="560">29</text>
  <text x="1110" y="560">30</text>
  <text x="1145" y="560">31</text>


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
  <rect id="Histo_1" x="90" y="0" width="20" height="0"  ></rect>
  <rect id="Histo_2" x="125" y="0" width="20" height="0" ></rect>
  <rect id="Histo_3" x="160" y="0" width="20" height="0" ></rect>
  <rect id="Histo_4" x="195" y="0" width="20" height="0" ></rect>
  <rect id="Histo_5" x="230" y="0" width="20" height="0" ></rect>
  <rect id="Histo_6" x="265" y="0" width="20" height="0" ></rect>
  <rect id="Histo_7" x="300" y="0" width="20" height="0" ></rect>
  <rect id="Histo_8" x="335" y="0" width="20" height="0" ></rect>
  <rect id="Histo_9" x="370" y="0" width="20" height="0" ></rect>
  <rect id="Histo_10" x="405" y="0" width="20" height="0" ></rect>
  <rect id="Histo_11" x="440" y="0" width="20" height="0" ></rect>
  <rect id="Histo_12" x="475" y="0" width="20" height="0" ></rect>
  <rect id="Histo_13" x="510" y="0" width="20" height="0"  ></rect>
  <rect id="Histo_14" x="545" y="0" width="20" height="0" ></rect>
  <rect id="Histo_15" x="580" y="0" width="20" height="0" ></rect>
  <rect id="Histo_16" x="615" y="0" width="20" height="0" ></rect>
  <rect id="Histo_17" x="650" y="0" width="20" height="0" ></rect>
  <rect id="Histo_18" x="685" y="0" width="20" height="0" ></rect>
  <rect id="Histo_19" x="720" y="0" width="20" height="0" ></rect>
  <rect id="Histo_20" x="755" y="0" width="20" height="0" ></rect>
  <rect id="Histo_21" x="790" y="0" width="20" height="0" ></rect>
  <rect id="Histo_22" x="825" y="0" width="20" height="0" ></rect>
  <rect id="Histo_23" x="860" y="0" width="20" height="0" ></rect>
  <rect id="Histo_24" x="895" y="0" width="20" height="0" ></rect>
  <rect id="Histo_25" x="930" y="0" width="20" height="0" ></rect>
  <rect id="Histo_26" x="965" y="0" width="20" height="0" ></rect>
  <rect id="Histo_27" x="1000" y="0" width="20" height="0" ></rect>
  <rect id="Histo_28" x="1035" y="0" width="20" height="0" ></rect>
  <rect id="Histo_29" x="1070" y="0" width="20" height="0" ></rect>
  <rect id="Histo_30" x="1105" y="0" width="20" height="0" ></rect>
  <rect id="Histo_31" x="1140" y="0" width="20" height="0" ></rect>

</g>
</svg>
<?php include('./scripts/gestion_données_progression.php'); ?>

</div>

<!--<script type="text/javascript" src="./scripts/affichage_données_progression.js"></script>-->
<script type="text/javascript" src="./scripts/function_calcul.js"></script>
<!--<script type="text/javascript" src="./scripts/gestion_données_progression.js"></script>-->
</body>
</html>