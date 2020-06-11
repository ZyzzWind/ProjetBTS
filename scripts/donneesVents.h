#ifndef DONNEESVENTS_H
#define DONNEESVENTS_H

using namespace std;

class donneesVents
{
public:
    donneesVents(string StringDonnees);
    float vitesse_Moyenne;
    float direction;
    string temps_String;
    int secondes;
    int minutes;
    int heures;
    int jour;
    int mois;
    int annees;
};

#endif /* DONNEESVENTS_H */