/*  
    Vitesse = la vitesse du vent en m/s
    Surface = la surface du cercle de rayon égale a la longueur d'une pale (PiR^2)
    Rho = masse volumique de l'air (en moyenne = a 1.2 kg/m3)
*/
var Puissance, Vitesse, Surface, Rho, Limite_De_Betz;

Limite_De_Betz = 0.593;

Puissance = (1/2)*Rho*Surface*Vitesse^3;

Puissance = Limite_De_Betz*Puissance;

Puissance = 