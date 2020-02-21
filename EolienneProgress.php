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
  <line x1="90" x2="90" y1="50" y2="580"></line>
</g>
<g class="grid y-grid" id="yGrid">
  <line x1="90" x2="1200" y1="580" y2="580"></line>
</g>
  <g class="labels x-labels">
  <text x="120" y="610">Janvier</text>
  <text x="220" y="610">Fevrier</text>
  <text x="315" y="610">Mars</text>
  <text x="410" y="610">Avril</text>
  <text x="505" y="610">Mai</text>
  <text x="600" y="610">Juin</text>
  <text x="700" y="610">Juillet</text>
  <text x="790" y="610">Aout</text>
  <text x="890" y="610">Septembre</text>
  <text x="985" y="610">Octobre</text>
  <text x="1080" y="610">Novembre</text>
  <text x="1170" y="610">Decembre</text>
  <text x="1200" y="640" class="label-title">Eoliennes</text>

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
  <rect id="Histo_Janvier" x="90" y="380" width="50" height="0"  ></rect>
  <rect id="Histo_Fevrier" x="195" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Mars" x="290" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Avril" x="385" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Mai" x="480" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Juin" x="575" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Juillet" x="670" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Aout" x="765" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Septembre" x="860" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Octobre" x="955" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Novembre" x="1050" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Decembre" x="1145" y="380" width="50" height="0" ></rect>
</g>
</svg>

</div>

</body>
</html>