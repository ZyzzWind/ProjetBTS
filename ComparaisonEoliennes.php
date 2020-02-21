<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>BTS windbird</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="bouttons.css">
  <link rel="stylesheet" href="graphComparaison.css">

</head>
<body>
<?php include('header.php') ?>
  <div class="particles"></div>
  <script type="text/javascript" src="./scripts/ShaderProgram.js"></script>
  <script type="text/javascript" src="./scripts/Stats2.js"></script>
  <script type="text/javascript" src="./scripts/Snow.js"></script>

  <div class="rose">


  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="graphComp" aria-labelledby="title" role="img">
  <title id="title">Graphique de la progression de la production</title>
<g class="grid x-grid" id="xGrid">
  <line x1="90" x2="90" y1="50" y2="580"></line>
</g>
<g class="grid y-grid" id="yGrid">
  <line x1="90" x2="1200" y1="580" y2="580"></line>
</g>
  <g class="labels x-labels">
  <text x="120" y="610">Eolienne 1</text>
  <text x="220" y="610">Eolienne 2</text>
  <text x="315" y="610">Eolienne 3</text>
  <text x="410" y="610">Eolienne 4</text>
  <text x="505" y="610">Eolienne 5</text>
  <text x="600" y="610">Eolienne 6</text>
  <text x="700" y="610">Eolienne 7</text>
  <text x="790" y="610">Eolienne 8</text>
  <text x="890" y="610">Eolienne 9</text>
  <text x="985" y="610">Eolienne 10</text>
  <text x="1080" y="610">Eolienne 11</text>
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
  <rect id="Histo_Eolienne1" x="90" y="380" width="50" height="0"  ></rect>
  <rect id="Histo_Eolienne2" x="195" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Eolienne3" x="290" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Eolienne4" x="385" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Eolienne5" x="480" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Eolienne6" x="575" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Eolienne7" x="670" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Eolienne8" x="765" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Eolienne9" x="860" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Eolienne10" x="955" y="380" width="50" height="0" ></rect>
  <rect id="Histo_Eolienne11" x="1050" y="380" width="50" height="0" ></rect>
</g>
</svg>


</div>


</body>
</html>