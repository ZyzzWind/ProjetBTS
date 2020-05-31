var graph;

afficherGrapheMois();

var Changement_Graph = document.getElementById('bouton_PPE');

    Changement_Graph.onclick = function()
    {  
        if(graph == 1)
        {
            afficherGrapheJour();
        }
        else
        {
            afficherGrapheMois();
        }
    };


/*
function afficherGrapheJour()
{
    var graph_Jour = document.getElementById('graphJour');
    var graph_Mois = document.getElementById('graph');
    var bouton_Mois = document.getElementById('selectMoisPPE');
    graph = 0;
    graph_Jour.style.display = 'block';
    graph_Mois.style.display = 'none';
    bouton_Mois.style.display = 'block';

    var production = [359,186,1000,252,47,589,521,357,685,145,147,521,359,186,159,252,47,589,521,357,685,145,147,521,578,965,541,258,635,254,587];
    var max = production[0];

    for (let i=0; i < 31; i++) 
    {
        if(production[i] > max)
        {
            max = production [i];
        }
    }

    var echelle_max = document.getElementsByClassName("pui_max");
    echelle_max[1].textContent=max;
    var echelle_inter2 = document.getElementsByClassName("pui_inter_2");
    echelle_inter2[1].textContent=Math.round((max/3)*2);
    var echelle_inter1 = document.getElementsByClassName("pui_inter_1");
    echelle_inter1[1].textContent=Math.round(max/3);

    var jour = [];
    var valeur =[];
    
    function souris(event)
    {
        document.getElementById('positionX').value = event.clientX;
        document.getElementById('positionY').value = event.clientY;
    }
    
    var_window = document.getElementById("window_e1");
    
    for(let i = 0; i < 31; i++)
    {
        valeur[i] = (production[i]/max)*530;
        jour[i] = document.getElementById("Histo_"+(i+1));
        jour[i].setAttribute("height",valeur[i]);
        jour[i].setAttribute("y",530-valeur[i]);
    
        jour[i].onmouseover = function()
        {
            
            var styleDgrm = getComputedStyle(jour[i],"fill");
            var couleur = styleDgrm.fill;
            var_window.style.display = "block";
            var_window.style.position = 'absolute';
            var_window.style.borderColor = couleur;
            var lineBreak = document.createElement('br');
            var text1 = document.createTextNode("Jour "+(i+1));
            var text2 = document.createTextNode('Puissance Produite: '+Math.round(production[i])+" MW");
            var_window.appendChild(text1);
            var_window.appendChild(lineBreak);
            var_window.appendChild(text2);
        }
        jour[i].onmousemove = function()
        {
            var_window.style.left = event.clientX-150 + 'px';
            var_window.style.top = event.clientY-130 + 'px';
        }
        jour[i].onmouseout = function()
        {
            var_window.style.display= "none";
     
            while(var_window.firstChild)
            {
              var_window.removeChild(var_window.firstChild);
            }
        }
    }

}*/

function afficherGrapheMois()
{
    graph = 1;
    var graph_Jour = document.getElementById('graphJour');
    var graph_Mois = document.getElementById('graph');
    var bouton_Mois = document.getElementById('selectMoisPPE');
    graph_Jour.style.display = 'none';
    graph_Mois.style.display = 'block';
    bouton_Mois.style.display = 'none';
    var production = [0,0,0,0,0,0,0,0,0,0,0,12];
    var max = production[0];

    for (let i=0; i < 12; i++) 
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

    var id_Mois = ["Histo_Janvier","Histo_Fevrier","Histo_Mars","Histo_Avril","Histo_Mai","Histo_Juin","Histo_Juillet","Histo_Aout","Histo_Septembre","Histo_Octobre","Histo_Novembre","Histo_Decembre"];
    var nom_Mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
    var mois = [];
    var valeur = [];

    function souris(event)
    {
        document.getElementById('positionX').value = event.clientX;
        document.getElementById('positionY').value = event.clientY;
    }

    var_window = document.getElementById("window_e1");

    for(let i = 0 ; i < 12 ; i++)
    {
        mois[i] = document.getElementById(id_Mois[i]);
        valeur[i] = (production[i]/max)*530;
        mois[i].setAttribute("height",valeur[i]);
        mois[i].setAttribute("y",530-valeur[i]);

        mois[i].onmouseover = function()
        {
        
            var styleDgrm = getComputedStyle(mois[i],"fill");
            var couleur = styleDgrm.fill;
            var_window.style.display = "block";
            var_window.style.position = 'absolute';
            var_window.style.borderColor = couleur;
            var lineBreak = document.createElement('br');
            var text1 = document.createTextNode(nom_Mois[i]);
            var text2 = document.createTextNode('Puissance Produite: '+Math.round(production[i])+" MW");
            var_window.appendChild(text1);
            var_window.appendChild(lineBreak);
            var_window.appendChild(text2);
        }
        mois[i].onmousemove = function()
        {
            var_window.style.left = event.clientX-150 + 'px';
            var_window.style.top = event.clientY-130 + 'px';
        }
        mois[i].onmouseout = function()
        {
            var_window.style.display= "none";
    
            while(var_window.firstChild)
            {
                var_window.removeChild(var_window.firstChild);
            }
        }
    }
}