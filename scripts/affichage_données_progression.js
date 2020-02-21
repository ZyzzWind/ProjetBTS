var graph = 0; 
if(graph == 1)
{
    var production = [359,186,159,252,47,589,521,357,685,145,147,521];
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
}
else
{
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

    jour_1 = document.getElementById("Histo_1");
    var valeur_1 = (production[0]/max)*530;
    jour_2 = document.getElementById("Histo_2");
    var valeur_2 = (production[1]/max)*530;
    jour_3 = document.getElementById("Histo_3");
    var valeur_3 = (production[2]/max)*530;
    jour_4 = document.getElementById("Histo_4");
    var valeur_4 = (production[3]/max)*530;
    jour_5 = document.getElementById("Histo_5");
    var valeur_5 = (production[4]/max)*530;
    jour_6 = document.getElementById("Histo_6");
    var valeur_6 = (production[5]/max)*530;
    jour_7 = document.getElementById("Histo_7");
    var valeur_7 = (production[6]/max)*530;
    jour_8 = document.getElementById("Histo_8");
    var valeur_8 = (production[7]/max)*530;
    jour_9 = document.getElementById("Histo_9");
    var valeur_9 = (production[8]/max)*530;
    jour_10 = document.getElementById("Histo_10");
    var valeur_10 = (production[9]/max)*530;
    jour_11 = document.getElementById("Histo_11");
    var valeur_11 = (production[10]/max)*530;
    jour_12 = document.getElementById("Histo_12");
    var valeur_12 = (production[11]/max)*530;
    jour_13 = document.getElementById("Histo_13");
    var valeur_13 = (production[12]/max)*530;
    jour_14 = document.getElementById("Histo_14");
    var valeur_14 = (production[13]/max)*530;
    jour_15 = document.getElementById("Histo_15");
    var valeur_15 = (production[14]/max)*530;
    jour_16 = document.getElementById("Histo_16");
    var valeur_16 = (production[15]/max)*530;
    jour_17 = document.getElementById("Histo_17");
    var valeur_17 = (production[16]/max)*530;
    jour_18 = document.getElementById("Histo_18");
    var valeur_18 = (production[17]/max)*530;
    jour_19 = document.getElementById("Histo_19");
    var valeur_19 = (production[18]/max)*530;
    jour_20 = document.getElementById("Histo_20");
    var valeur_20 = (production[19]/max)*530;
    jour_21 = document.getElementById("Histo_21");
    var valeur_21 = (production[20]/max)*530;
    jour_22 = document.getElementById("Histo_22");
    var valeur_22 = (production[21]/max)*530;
    jour_23 = document.getElementById("Histo_23");
    var valeur_23 = (production[22]/max)*530;
    jour_24 = document.getElementById("Histo_24");
    var valeur_24 = (production[23]/max)*530;
    jour_25 = document.getElementById("Histo_25");
    var valeur_25 = (production[24]/max)*530;
    jour_26 = document.getElementById("Histo_26");
    var valeur_26 = (production[25]/max)*530;
    jour_27 = document.getElementById("Histo_27");
    var valeur_27 = (production[26]/max)*530;
    jour_28 = document.getElementById("Histo_28");
    var valeur_28 = (production[27]/max)*530;
    jour_29 = document.getElementById("Histo_29");
    var valeur_29 = (production[28]/max)*530;
    jour_30 = document.getElementById("Histo_30");
    var valeur_30 = (production[29]/max)*530;
    jour_31 = document.getElementById("Histo_31");
    var valeur_31 = (production[30]/max)*530;

    jour_1.setAttribute("height",valeur_1);
    jour_1.setAttribute("y",530-valeur_1);
    jour_2.setAttribute("height",valeur_2);
    jour_2.setAttribute("y",530-valeur_2);
    jour_3.setAttribute("height",valeur_3);
    jour_3.setAttribute("y",530-valeur_3);
    jour_4.setAttribute("height",valeur_4);
    jour_4.setAttribute("y",530-valeur_4);
    jour_5.setAttribute("height",valeur_5);
    jour_5.setAttribute("y",530-valeur_5);
    jour_6.setAttribute("height",valeur_6);
    jour_6.setAttribute("y",530-valeur_6);
    jour_7.setAttribute("height",valeur_7);
    jour_7.setAttribute("y",530-valeur_7);
    jour_8.setAttribute("height",valeur_8);
    jour_8.setAttribute("y",530-valeur_8);
    jour_9.setAttribute("height",valeur_9);
    jour_9.setAttribute("y",530-valeur_9);
    jour_10.setAttribute("height",valeur_10);
    jour_10.setAttribute("y",530-valeur_10);
    jour_11.setAttribute("height",valeur_11);
    jour_11.setAttribute("y",530-valeur_11);
    jour_12.setAttribute("height",valeur_12);
    jour_12.setAttribute("y",530-valeur_12);
    jour_13.setAttribute("height",valeur_13);
    jour_13.setAttribute("y",530-valeur_13);
    jour_14.setAttribute("height",valeur_14);
    jour_14.setAttribute("y",530-valeur_14);
    jour_15.setAttribute("height",valeur_15);
    jour_15.setAttribute("y",530-valeur_15);
    jour_16.setAttribute("height",valeur_16);
    jour_16.setAttribute("y",530-valeur_16);
    jour_17.setAttribute("height",valeur_17);
    jour_17.setAttribute("y",530-valeur_17);
    jour_18.setAttribute("height",valeur_18);
    jour_18.setAttribute("y",530-valeur_18);
    jour_19.setAttribute("height",valeur_19);
    jour_19.setAttribute("y",530-valeur_19);
    jour_20.setAttribute("height",valeur_20);
    jour_20.setAttribute("y",530-valeur_20);
    jour_21.setAttribute("height",valeur_21);
    jour_21.setAttribute("y",530-valeur_21);
    jour_22.setAttribute("height",valeur_22);
    jour_22.setAttribute("y",530-valeur_22);
    jour_23.setAttribute("height",valeur_23);
    jour_23.setAttribute("y",530-valeur_23);
    jour_24.setAttribute("height",valeur_24);
    jour_24.setAttribute("y",530-valeur_24);
    jour_25.setAttribute("height",valeur_25);
    jour_25.setAttribute("y",530-valeur_25);
    jour_26.setAttribute("height",valeur_26);
    jour_26.setAttribute("y",530-valeur_26);
    jour_27.setAttribute("height",valeur_27);
    jour_27.setAttribute("y",530-valeur_27);
    jour_28.setAttribute("height",valeur_28);
    jour_28.setAttribute("y",530-valeur_28);
    jour_29.setAttribute("height",valeur_29);
    jour_29.setAttribute("y",530-valeur_29);
    jour_30.setAttribute("height",valeur_30);
    jour_30.setAttribute("y",530-valeur_30);
    jour_31.setAttribute("height",valeur_31);
    jour_31.setAttribute("y",530-valeur_31);
}
       