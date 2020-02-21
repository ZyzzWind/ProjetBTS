var production = [359,257,159,252,47,589,521,357,685,145,147,521];
var max = production[0];

for (let i=0; i < 12; i++) 
{
    if(production[i] > max)
    {
        max = production [i];
    }
}

var barre_Janvier = document.getElementById("Histo_Janvier");
var valeur_Janvier = (production[0]/max)*530;
var barre_Fevrier = document.getElementById("Histo_Fevrier");
var valeur_Fevrier = (production[1]/max)*530;
var barre_Mars = document.getElementById("Histo_Mars");
var valeur_Mars = (production[2]/max)*530;
var barre_Avril = document.getElementById("Histo_Avril");
var valeur_Avril = (production[3]/max)*530;
var barre_Mai = document.getElementById("Histo_Mai");
var valeur_Mai = (production[4]/max)*530;
var barre_Juin = document.getElementById("Histo_Juin");
var valeur_Juin = (production[5]/max)*530;
var barre_Juillet = document.getElementById("Histo_Juillet");
var valeur_Juillet = (production[6]/max)*530;
var barre_Aout = document.getElementById("Histo_Aout");
var valeur_Aout = (production[7]/max)*530;
var barre_Septembre = document.getElementById("Histo_Septembre");
var valeur_Septembre = (production[8]/max)*530;
var barre_Octobre = document.getElementById("Histo_Octobre");
var valeur_Octobre = (production[9]/max)*530;
var barre_Novembre = document.getElementById("Histo_Novembre");
var valeur_Novembre = (production[10]/max)*530;
var barre_Decembre = document.getElementById("Histo_Decembre");
var valeur_Decembre = (production[11]/max)*530;

barre_Janvier.setAttribute("height",valeur_Janvier);
barre_Janvier.setAttribute("y",530-valeur_Janvier);
barre_Fevrier.setAttribute("height",valeur_Fevrier);
barre_Fevrier.setAttribute("y",530-valeur_Fevrier);
barre_Mars.setAttribute("height",valeur_Mars);
barre_Mars.setAttribute("y",530-valeur_Mars);
barre_Avril.setAttribute("height",valeur_Avril);
barre_Avril.setAttribute("y",530-valeur_Avril);
barre_Mai.setAttribute("height",valeur_Mai);
barre_Mai.setAttribute("y",530-valeur_Mai);
barre_Juin.setAttribute("height",valeur_Juin);
barre_Juin.setAttribute("y",530-valeur_Juin);
barre_Juillet.setAttribute("height",valeur_Juillet);
barre_Juillet.setAttribute("y",530-valeur_Juillet);
barre_Aout.setAttribute("height",valeur_Aout);
barre_Aout.setAttribute("y",530-valeur_Aout);
barre_Septembre.setAttribute("height",valeur_Septembre);
barre_Septembre.setAttribute("y",530-valeur_Septembre);
barre_Octobre.setAttribute("height",valeur_Octobre);
barre_Octobre.setAttribute("y",530-valeur_Octobre);
barre_Novembre.setAttribute("height",valeur_Novembre);
barre_Novembre.setAttribute("y",530-valeur_Novembre);
barre_Decembre.setAttribute("height",valeur_Decembre);
barre_Decembre.setAttribute("y",530-valeur_Decembre);