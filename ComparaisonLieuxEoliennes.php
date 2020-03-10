<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>BTS windbird</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="bouttons.css">
  <link rel="stylesheet" href="graphComparaison.css">Site
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


</div>

<script type="text/javascript" src="./scripts/affichage_données_comparaison_sites.js"></script>
</div>

</body>
</html>