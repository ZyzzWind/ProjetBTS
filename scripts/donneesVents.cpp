#include <iostream>
#include <boost/algorithm/string.hpp>
#include "./donneesVents.h"

using namespace std;
using namespace boost;

donneesVents::donneesVents(string StringDonnees)
{
    vector<string> resultat_split;
    split(resultat_split, StringDonnees, is_any_of(","));
    this->temps_String = resultat_split[0];
    this->vitesse_Moyenne = stof(resultat_split[4]);
    this->direction = stof(resultat_split[6]);

    vector<string> result;
    vector<string> date;
    vector<string> heure;
    split(result,this->temps_String,is_any_of("T"));
    split(date, result[0], is_any_of("-"));
    split(heure, result[1], is_any_of(":"));
    this->secondes = stoi(heure[2]);
    this->minutes = stoi(heure[1]);
    this->heures = stoi(heure[0]);
    this->jour = stoi(date[2]);
    this->mois = stoi(date[1]);            
    this->annees = stoi(date[0]);
}