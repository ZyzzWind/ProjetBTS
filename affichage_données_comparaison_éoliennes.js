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

éolienne_1 = document.getElementById("Histo_Eolienne1");
var valeur_1 = (production[0]/max)*530;
éolienne_2 = document.getElementById("Histo_Eolienne2");
var valeur_2 = (production[1]/max)*530;
éolienne_3 = document.getElementById("Histo_Eolienne3");
var valeur_3 = (production[2]/max)*530;
éolienne_4 = document.getElementById("Histo_Eolienne4");
var valeur_4 = (production[3]/max)*530;
éolienne_5 = document.getElementById("Histo_Eolienne5");
var valeur_5 = (production[4]/max)*530;
éolienne_6 = document.getElementById("Histo_Eolienne6");
var valeur_6 = (production[5]/max)*530;
éolienne_7 = document.getElementById("Histo_Eolienne7");
var valeur_7 = (production[6]/max)*530;
éolienne_8 = document.getElementById("Histo_Eolienne8");
var valeur_8 = (production[7]/max)*530;
éolienne_9 = document.getElementById("Histo_Eolienne9");
var valeur_9 = (production[8]/max)*530;
éolienne_10 = document.getElementById("Histo_Eolienne10");
var valeur_10 = (production[9]/max)*530;
éolienne_11 = document.getElementById("Histo_Eolienne11");
var valeur_11 = (production[10]/max)*530;

éolienne_1.setAttribute("height",valeur_1);
éolienne_1.setAttribute("y",530-valeur_1);
éolienne_2.setAttribute("height",valeur_2);
éolienne_2.setAttribute("y",530-valeur_2);
éolienne_3.setAttribute("height",valeur_3);
éolienne_3.setAttribute("y",530-valeur_3);
éolienne_4.setAttribute("height",valeur_4);
éolienne_4.setAttribute("y",530-valeur_4);
éolienne_5.setAttribute("height",valeur_5);
éolienne_5.setAttribute("y",530-valeur_5);
éolienne_6.setAttribute("height",valeur_6);
éolienne_6.setAttribute("y",530-valeur_6);
éolienne_7.setAttribute("height",valeur_7);
éolienne_7.setAttribute("y",530-valeur_7);
éolienne_8.setAttribute("height",valeur_8);
éolienne_8.setAttribute("y",530-valeur_8);
éolienne_9.setAttribute("height",valeur_9);
éolienne_9.setAttribute("y",530-valeur_9);
éolienne_10.setAttribute("height",valeur_10);
éolienne_10.setAttribute("y",530-valeur_10);
éolienne_11.setAttribute("height",valeur_11);
éolienne_11.setAttribute("y",530-valeur_11);



éolienne_1.addEventListener("mouseover", mouseOver);
éolienne_1.addEventListener("mouseout", mouseOut);
var_window = document.getElementById("window_e1");

function mouseOver() {
    var_window.style.display= "block";
  }
  
function mouseOut() {
    var_window.style.display= "none";
  }