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

</head>
<body>
<?php include('header.php') ?>
  <div class="particles"></div>
  <script type="text/javascript" src="./scripts/ShaderProgram.js"></script>
  <script type="text/javascript" src="./scripts/Stats2.js"></script>
  <script type="text/javascript" src="./scripts/Snow.js"></script>


  <div class="rose">

  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="graph" aria-labelledby="title" role="img">
  <title id="title">Graphique de la progression de la production</title>

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
  <text x="1200" y="580" class="label-title">Mois</text>

  <!-- decalage de 100 en x -->

</g>
<g class="labels y-labels">
  <text x="80" y="60">15</text>
  <text x="80" y="240">10</text>
  <text x="80" y="420">5</text>
  <text x="80" y="600">0</text>
</g>

<g class="label y-titre">
 <text x="50" y="290" class="label-title">Mw</text>
</g>
<!-- height = prod energetique y = 380 - height -->
<g class="data" data-setname="Our first data set">
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

</div>
<script type="text/javascript" src="./scripts/affichage_données_progression.js"></script>
</body>
</html>