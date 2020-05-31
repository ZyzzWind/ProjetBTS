
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

var eolienne = [];
var valeur = [];

function souris(event)
{
    document.getElementById('positionX').value = event.clientX;
    document.getElementById('positionY').value = event.clientY;
}

var_window = document.getElementById("window_e1");

for(let i = 0; i < 11; i++)
{
    valeur[i] = (production[i]/max)*530;
    eolienne[i] = document.getElementById("Histo_Eolienne"+(i+1));
    eolienne[i].setAttribute("height",valeur[i]);
    eolienne[i].setAttribute("y",530-valeur[i]);

    eolienne[i].onmouseover = function()
    {
        
        var styleDgrm = getComputedStyle(eolienne[i],"fill");
        var couleur = styleDgrm.fill;
        var_window.style.display= "block";
        var_window.style.position = 'absolute';
        var_window.style.borderColor = couleur;
        var lineBreak = document.createElement('br');
        var text1 = document.createTextNode("Eolienne "+(i+1));
        var text2 = document.createTextNode('Puissance Produite: '+Math.round(production[i])+" MW");
        var_window.appendChild(text1);
        var_window.appendChild(lineBreak);
        var_window.appendChild(text2);
    }
    eolienne[i].onmousemove = function()
    {
        var_window.style.left = event.clientX-150 + 'px';
        var_window.style.top = event.clientY-130 + 'px';
    }
    eolienne[i].onmouseout = function()
    {
        var_window.style.display= "none";
 
        while(var_window.firstChild)
        {
          var_window.removeChild(var_window.firstChild);
        }
    }
    }
