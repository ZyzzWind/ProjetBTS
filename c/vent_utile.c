#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>

int vitesse_utile = 0;
int vitesse_actuelle = 0;
int value_10min;
int value_20min;

void    VU1()
{
    if (vitesse_actuelle < vitesse_utile)
        vitesse_utile = vitesse_actuelle;
    else
    {
        /* check la valeurs enregistre il y a 10min */
        if (value_10min > vitesse_utile)
            vitesse_utile = value_10min;
    }
}

void    VU2()
{
    if (vitesse_actuelle < vitesse_utile)
        vitesse_utile = vitesse_actuelle;
    else
    {
        /* check la valeurs enregistre il y a 10min */
        if ((value_20min && value_10min) > vitesse_utile)
            vitesse_utile = value_20min;
    }
}

void    VU3()
{
    if (direction_vent >= direction_vent_precedente+70 || direction_vent <= direction_vent_precedente-70)
        sleep(600);
    else if (vitesse_actuelle < vitesse_utile)
        vitesse_utile = vitesse_actuelle;
    else
    {
        if (value_10min > vitesse_utile)
            vitesse_utile = value_10min;
    }
}

void    VU4()
{
    if (direction_vent >= direction_vent_precedente+70 || direction_vent <= direction_vent_precedente-70)
        if (direction_vent >= direction_vent_precedente+140 || direction_vent <= direction_vent_precedente-140)
            sleep(1200)
        else
            sleep(600);
    else if (vitesse_actuelle < vitesse_utile)
        vitesse_utile = vitesse_actuelle;
    else
    {
        if (value_10min > vitesse_utile)
            vitesse_utile = value_10min;
    }
}

int     main(int argc, char *argv[])
{
    while(1)
    {
        if (eolienne == "axe vertical")
        {
            if (cas == '1')
            {
                VU(1);
            }
            else
            {
                VU(2);
            }
        }
        else
        {
            if (cas == '1')
            {
                VU(3);
            }
            else
            {
                VU(4);
            }
        }
    }
    return(0);
}