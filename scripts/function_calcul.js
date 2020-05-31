var graph;
var json;

afficherGrapheMois();
/*
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
*/

function calcul()
{
    var objet_XHR = new XMLHttpRequest() ;
    objet_XHR.responseType = JSON;
    var url = 'donnees_vent.php';
    var Select1 = document.getElementById('Eolien');
    var Select2 = document.getElementById('Annee');
    var Select3 = document.getElementById('Pioupiou');
    var Val1 = Select1.options[Select1.selectedIndex].value;
    var Val2 = Select2.options[Select2.selectedIndex].value;
    var Val3 = Select3.options[Select3.selectedIndex].value;
    var data =     'Eolien=' + Val1
                 + '&Annee=' + Val2
                 + '&Pioupiou=' + Val3;

    objet_XHR.onreadystatechange = receptionner_donnees ;

    objet_XHR.open('POST',url,true);

    objet_XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objet_XHR.send(data) ;

    function receptionner_donnees() {
        if(objet_XHR.readyState == 4 && objet_XHR.status == 200) {
        var return_data = [objet_XHR.response];
        console.log(return_data);
        json = JSON.parse(return_data);
        console.log(json.valueJanvier);
        console.log(json.valueAvril);
     //   document.getElementById("formulaire").innerHTML = return_data;
        afficherGrapheMois2();
        }
      }
    }

    
function afficherGrapheMois()
{
    graph = 1;
    var graph_Jour = document.getElementById('graphJour');
    var graph_Mois = document.getElementById('graph');
    var bouton_Mois = document.getElementById('selectMoisPPE');
    graph_Jour.style.display = 'none';
    graph_Mois.style.display = 'block';
    bouton_Mois.style.display = 'none';

}

function afficherGrapheMois2()
{
    var production = [json.valueJanvier,0,0,json.valueAvril,0,0,0,0,0,0,0,0];
    var max = production[0];

    for (let i=0; i < 12; i++) 
    {
        if(production[i] > max)
        {
            max = production [i];
        }
    }

    var echelle_max = document.getElementsByClassName("pui_max");
    echelle_max[0].textContent = max;
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