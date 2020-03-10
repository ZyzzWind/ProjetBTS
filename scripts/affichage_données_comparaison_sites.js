var production = [359,186,159,252,47,589,521,357,685,145,147];
var max = production[0];

for (let i=0; i < 11; i++) 
{
    if(production[i] > max)
    {
        max = production [i];
    }
}

var echelle_max = document.getElementsByClassName("pui_max");
echelle_max[0].textContent=max;
var echelle_inter2 = document.getElementsByClassName("pui_inter_2");
echelle_inter2[0].textContent=Math.round((max/3)*2);
var echelle_inter1 = document.getElementsByClassName("pui_inter_1");
echelle_inter1[0].textContent=Math.round(max/3);

var site = [];
var valeur =[];

for(let i = 0; i < 11; i++)
{
    valeur[i] = (production[i]/max)*530;
    site[i] = document.getElementById("Histo_Site"+(i+1));
    site[i].setAttribute("height",valeur[i]);
    site[i].setAttribute("y",530-valeur[i]);
}
