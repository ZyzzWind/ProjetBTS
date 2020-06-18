#include <iostream>
#include <fstream>
#include <algorithm>
#include <functional>
#include <array>
#include <stdlib.h>
#include <mysql/mysql.h>
#include <bits/stdc++.h>
#include <boost/algorithm/string.hpp>
#include "jsoncpp/json/json.h"
#include "./donneesVents.h"

using namespace std;
using namespace Json;
using namespace boost;

string calculer_direction(vector <vector<float>> &donnee_vent);
vector <float> extraire_donnees_veille(int jour, int mois, int annees, int nb_pioupiou);
void enregistrer_base_de_donnees(string date, float vitesse, string direction);

int main()
{

    vector <string> vecteur_fichier = {"./tmp/tmp23.json","./tmp/tmp105.json","./tmp/tmp107.json","./tmp/tmp131.json","./tmp/tmp305.json","./tmp/tmp352.json","./tmp/tmp410.json","./tmp/tmp552.json","./tmp/tmp569.json","./tmp/tmp1006.json","./tmp/tmp1008.json"};
    vector <int> vecteur_numero = {23,105,107,131,305,352,410,552,569,1006,1008};
    for(int i = 0; i < 11 ; i++)
    {

    string start_date;
    string end_date;
    vector<string> start_date_split;
    vector<string> end_date_split;
    int start_day;
    int end_day;

    cout << "Saisie de la date de début YYYY-MM-DD(sur le même mois que la date de fin)" << endl;
    cin >> start_date;
    cout << "Saisie de la date de fin YYYY-MM-DD(sur le même mois que la date de début)" << endl;
    cin >> end_date;

    split(start_date_split, start_date, is_any_of("-"));
    split(end_date_split, end_date, is_any_of("-"));

    start_day = stoi(start_date_split[2]);
    end_day = stoi(end_date_split[2]);

    for (int day = start_day; day < end_day ; day++)
    {

    
    char request[170];
    sprintf(request,"curl -o %s 'http://api.pioupiou.fr/v1/archive/%d?start=%d-%02d-%02dT00:00:00&stop=%d-%02d-%02d&format=json'",vecteur_fichier[i].c_str(),vecteur_numero[i],stoi(start_date_split[0]),stoi(start_date_split[1]),day,stoi(start_date_split[0]),stoi(start_date_split[1]),day+1);
    system(request);
    // Déclaration variables gestion du JSON

    FILE *fp;
    int size;
    char *buffer;

    Reader reader;
    Value   root,
            data,
            donnee;

    vector <string> tableauVectorDeString;
    string ligneData;

    // Lecture du fichier JSON
    fp = fopen(vecteur_fichier[i].c_str(), "r");

    fseek(fp,0L, SEEK_END);
    size = ftell(fp); 
    buffer = (char *) malloc( size * sizeof(char) );
    fseek(fp,0L,0);

    fread(buffer, size, 1, fp);
    fclose(fp);

    if (!reader.parse(buffer,root))
    {
        free(buffer);
        exit(1);
    }
    else
    {

        free(buffer);
        
        // Decomposition du fichier JSON
        
        data = root["data"];
        for (size_t i = 0; i < data.size(); i++)
        {
            const Value dataValuesInTrame  = data.get(i,root) ;
		    ligneData = "" ;
            for(unsigned int indiceDataInTrame = 0 ; indiceDataInTrame < dataValuesInTrame.size() ; indiceDataInTrame++)
            {	
                if( (indiceDataInTrame == 0) )
                {
                    ligneData += dataValuesInTrame[indiceDataInTrame].asString() + "," ;
                }
                else if( (indiceDataInTrame == (dataValuesInTrame.size() -1 ) ) )
                {
                    ligneData += to_string(dataValuesInTrame[indiceDataInTrame].asFloat() ) ;
                }
                else
                {
                    ligneData += "" + to_string(dataValuesInTrame[indiceDataInTrame].asFloat() ) + "," ;
                }
            }
            tableauVectorDeString.push_back(ligneData) ;
        }
        // Tri des données
        sort(tableauVectorDeString.begin(), tableauVectorDeString.end()) ;

        // Stockage des objets de données dans un vecteur

        vector <donneesVents> donnees;
        for (unsigned int i = 0; i < data.size(); i++)
        {
            donnees.push_back(donneesVents(tableauVectorDeString[i]));
                            
        }

        int indice_data = 0,
            indice_data_init = 0,
            derniere_donnee = 0,
            heure_data_precedente = 0,
            heure_data_actu = 0,
            accumulation_temps = 0,
            secondes_creneau = 0,
            minute_creneau = 0,
            heure_creneau = 0,
            temps_creneau = 0;

        float   vitesse_data_precedente = 0,
                vitesse_data_actu = 0,
                accumulation_vitesse = 0,
                vitesse_moyenne_creneau = 0,
                vitesse_affichage = 0,
                vitesse_veille = 0,
                direction_veille = 0;


        vector <float>  direction_vent_vector,
                        donnees_veille;

        vector <vector <float>> donnees_vent_pour_direction;

        string  direction_creneau,
                date_creneau;

        for (int indice_echellon = 0; indice_echellon < 144 ; indice_echellon++)
        {
            accumulation_temps = 0;
            accumulation_vitesse = 0;
            cout << endl;
            cout << "indice echellon : " << indice_echellon << endl;
            do
            { 

                heure_data_actu = (donnees[indice_data].heures*3600) + (donnees[indice_data].minutes*60) + donnees[indice_data].secondes;
                
                if((indice_echellon == 143) && ((long unsigned int)indice_data == donnees.size()))
                {
                    heure_data_actu = 24*3600;
                }
                
                vitesse_data_actu = (donnees[indice_data].vitesse_Moyenne); 
                 
                cout << "indice data : " << indice_data << endl;

                if((indice_data == indice_data_init) && (heure_data_actu < (indice_echellon+1)*600))
                {

                    //Gestion premiere donnée d'un échellon 

                    if(indice_data == 0)
                    {
                        //Gestion premiere donnée du premier échellon
                        
                        accumulation_temps = heure_data_actu;
                        donnees_veille = extraire_donnees_veille(donnees[indice_data].jour, donnees[indice_data].mois, donnees[indice_data].annees,vecteur_numero[i]);
                        vitesse_veille = donnees_veille[0];
                        accumulation_vitesse = vitesse_veille * accumulation_temps;
                        vitesse_affichage = vitesse_veille;
                        heure_data_precedente = heure_data_actu;
                        direction_veille = donnees_veille[1];
                        direction_vent_vector.push_back(direction_veille);
                        direction_vent_vector.push_back(accumulation_temps);
                        donnees_vent_pour_direction.push_back(direction_vent_vector);
                        direction_vent_vector.erase(direction_vent_vector.begin(), direction_vent_vector.end());
                    }  
                    else
                    {
                        //Gestion premiere donnée des autres échellons
                        vitesse_affichage = vitesse_data_precedente;
                        accumulation_temps = (heure_data_actu - indice_echellon*600);
                        accumulation_vitesse = vitesse_data_precedente * accumulation_temps;
                        vitesse_data_precedente = vitesse_data_actu;
                        

                        if((donnees[indice_data-1].vitesse_Moyenne > 1.5))
                        {
                            direction_vent_vector.push_back(donnees[indice_data-1].direction);
                            direction_vent_vector.push_back(heure_data_actu-heure_data_precedente);
                            donnees_vent_pour_direction.push_back(direction_vent_vector);
                            direction_vent_vector.erase(direction_vent_vector.begin(), direction_vent_vector.end());
                        } 

                        heure_data_precedente = heure_data_actu;
                        
                    }
                    
                    indice_data++;
                    
                    cout << "premier histo : accumulation temps = " << accumulation_temps << " accumulation vitesse = " << accumulation_vitesse ;
                    cout << " vitesse : " << vitesse_affichage << endl;
                }
                else if((heure_data_actu < (indice_echellon+1)*600) && (indice_data != indice_data_init))
                {      

                    //Gestion données intermédiaires d'un échellon
                    vitesse_data_precedente = donnees[indice_data-1].vitesse_Moyenne;
                    vitesse_affichage = vitesse_data_precedente;
                    accumulation_temps = accumulation_temps + heure_data_actu - heure_data_precedente;
                    accumulation_vitesse = accumulation_vitesse + (vitesse_data_precedente * (heure_data_actu - heure_data_precedente));
                    
                    
                    //cout << "vitesse actu = " << vitesse_data_actu << " heure_data_actu = " << heure_data_actu << " Heure_data_precedente = " << heure_data_precedente << "\t";
                    
                    if(vitesse_data_precedente > 1.5)
                    {
                        direction_vent_vector.push_back(donnees[indice_data-1].direction);
                        direction_vent_vector.push_back(heure_data_actu-heure_data_precedente);
                        donnees_vent_pour_direction.push_back(direction_vent_vector);
                        direction_vent_vector.erase(direction_vent_vector.begin(), direction_vent_vector.end());
                    }

                    heure_data_precedente = heure_data_actu;
                    vitesse_data_precedente = vitesse_data_actu;

                    indice_data++;
                    cout << "histo intermediaire : accumulation temps = " << accumulation_temps << " accumulation vitesse = " << accumulation_vitesse  ;
                    cout << " vitesse : " << vitesse_affichage << endl;
                }
                else
                {

                    //Gestion donnée finale de d'un échellon
                    vitesse_affichage = vitesse_data_precedente;
                    accumulation_vitesse = accumulation_vitesse + vitesse_data_precedente * ((indice_echellon+1)*600 - heure_data_precedente);
                    accumulation_temps = accumulation_temps + (indice_echellon+1)*600 - heure_data_precedente;
                    if((donnees[indice_data-1].vitesse_Moyenne > 1.5))
                    {
                        direction_vent_vector.push_back(donnees[indice_data-1].direction);
                        direction_vent_vector.push_back(heure_data_actu-heure_data_precedente);
                        donnees_vent_pour_direction.push_back(direction_vent_vector);
                        direction_vent_vector.erase(direction_vent_vector.begin(), direction_vent_vector.end());
                    }
                    
                    temps_creneau = (heure_data_actu-(heure_data_actu-(indice_echellon+1)*600))-600;
                    heure_creneau = temps_creneau/3600;  
                    minute_creneau = (temps_creneau-(heure_creneau*3600))/60;
                    secondes_creneau = (temps_creneau-(heure_creneau*3600)-(minute_creneau*60));
                    cout << "dernier histo : accumulation temps = " << accumulation_temps << " accumulation vitesse = " << accumulation_vitesse ;
                    vitesse_moyenne_creneau = accumulation_vitesse/accumulation_temps;
                    if(vitesse_moyenne_creneau > 1.5)
                    {
                        direction_creneau = calculer_direction(donnees_vent_pour_direction); 
                    }
                    else
                    {
                        direction_creneau = "NULL";
                    }
                    
                    direction_vent_vector.erase(direction_vent_vector.begin(), direction_vent_vector.end());
                    donnees_vent_pour_direction.erase(donnees_vent_pour_direction.begin(), donnees_vent_pour_direction.end());
                    indice_data_init = indice_data;
                    vitesse_moyenne_creneau = vitesse_moyenne_creneau/3.6;
                    if(indice_echellon != 143)
                    {
                        date_creneau = to_string(donnees[indice_data].annees)+"-"+to_string(donnees[indice_data].mois)+"-"+to_string(donnees[indice_data].jour)+"T"+to_string(heure_creneau)+":"+to_string(minute_creneau)+":"+to_string(secondes_creneau);
                    }
                    else
                    {
                        date_creneau = to_string(donnees[indice_data-1].annees)+"-"+to_string(donnees[indice_data-1].mois)+"-"+to_string(donnees[indice_data-1].jour)+"T"+to_string(heure_creneau)+":"+to_string(minute_creneau)+":"+to_string(secondes_creneau);                    
                    }
                    
                    
                    cout << " vitesse : " << vitesse_affichage;
                    cout << " Heure : " << heure_creneau << ":" << minute_creneau << ":" << secondes_creneau << " Valeur moyenne : " << vitesse_moyenne_creneau << " m/s secteur vent : " << direction_creneau << endl;
                    enregistrer_base_de_donnees(date_creneau,vitesse_moyenne_creneau,direction_creneau);
                }
                
            }while((heure_data_actu >= indice_echellon*600) && (heure_data_actu < (indice_echellon+1) *600) && derniere_donnee != 1);

        }
        }
        }
    }

    return 0;
}

vector <float> extraire_donnees_veille(int jour, int mois, int annees, int nb_pioupiou)
{
    char request[170];
    sprintf(request,"curl -o ./tmp/donnees_veilles.json 'http://api.pioupiou.fr/v1/archive/%d?start=%d-%02d-%02dT23:30:00&stop=%d-%02d-%02d&format=json'",nb_pioupiou,
                                                                                                                                                                                                  annees,
                                                                                                                                                                                                  mois,
                                                                                                                                                                                                  jour-1,
                                                                                                                                                                                                  annees,
                                                                                                                                                                                                  mois,
                                                                                                                                                                                                  jour);
    system(request);

    vector <float> donnees_veille ;
    FILE    *fp;
    int     size;
    char    *buffer;
    string  ligneData;
    Reader  reader;
    Value   root, 
            data,
            donnee;

    fp = fopen("./tmp/donnees_veilles.json", "r");

    fseek(fp,0L, SEEK_END);
    size = ftell(fp); 
    buffer = (char *) malloc( size * sizeof(char) );
    fseek(fp,0L,0);

    fread(buffer, size, 1, fp);
    fclose(fp);

    if (!reader.parse(buffer,root))
    {
        free(buffer);
        exit(1);
    }
    else
    {
        free(buffer);
        data = root["data"];
        int taille = data.size()-1;
        Value lastData = data.get(taille,root);
        donnees_veille.push_back(lastData[4].asFloat());
        donnees_veille.push_back(lastData[6].asFloat());
    }

    return donnees_veille;
}

string calculer_direction(vector <vector <float>> &donnee_vent)
{
    vector <string> secteurs_vents = {"NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO","N"};
    vector <int> nb_secteurs_vents(16,0); // déclaration de n vector à 0
    
    
    for(long unsigned int i = 0; i < donnee_vent.size(); i++)
    {
        for(int j = 0; j < 15 ; j++)
        {
            if((donnee_vent[i][0] > (((j+1) * 22.5) - 11.25 )) && (donnee_vent[i][0] <= (((j+1) * 22.5) + 11.25 )))
            {
                nb_secteurs_vents[j] += donnee_vent[i][1];
            }

            if(donnee_vent[i][0] > 348.75 && donnee_vent[i][0] <= 11.25)
            {
                nb_secteurs_vents[15] += donnee_vent[i][1];
            }
        }  
    }

    int indice_secteur_max = 0;
    int max = 0;

    for (int i = 0; i < 15; i++)
    {
        if (nb_secteurs_vents[i] >= max)
        {
            max = nb_secteurs_vents[i];
            indice_secteur_max = i;
        }
    }

    string retour;

    if (max == 0)
    {
        retour = "NULL"; 
    }
    else
    {
        retour = secteurs_vents[indice_secteur_max];
    }
    
    return retour;
}

void enregistrer_base_de_donnees(string date, float vitesse, string direction)
{

    int vitesse_convertit = vitesse*100;
    string vitesse_string = to_string(vitesse_convertit);
    string requete_string = "INSERT INTO donnees_vent (time, wind_speed_avg, wind_heading_secteur) VALUES ('"+date+"', "+vitesse_string+", '"+direction+"')";
    const char * requete = requete_string.c_str();
    MYSQL* conn;
    conn = mysql_init(0);
    if((mysql_real_connect(conn,"localhost","root","@Eclipse1@","windmeter",3306,NULL,0)) == NULL)
    {
        cout << "Erreur: " << mysql_error(conn) << " [" << mysql_errno(conn) << "]" << endl;
        mysql_close(conn);
        exit(1);
    }
    cout << "Connexion BDD réussie" << endl;

    if(mysql_query(conn,requete))
    {
        cout << "Erreur: " << mysql_error(conn) << " [" << mysql_errno(conn) << "]" << endl;
        mysql_close(conn);
        exit(1);
    }
    
    mysql_close(conn);
}