/* 
Activité : jeu de devinette
*/

const valMinDevinette = 1;
const valMaxDevinette = 100;

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solutionDevinette = Math.floor(Math.random() * valMaxDevinette) + valMinDevinette;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solutionDevinette + ")");

// TODO : complétez le programme
var nbEssais = 0; 
do 
{
  nombreDevinette = Number(prompt("Donner un nombre entre " + valMinDevinette + " et " + valMaxDevinette + " : "));
  nbEssais ++;
  if (nombreDevinette < solutionDevinette)
  {
        console.log(nombreDevinette + " est trop petit");
  }
  else if ( nombreDevinette > solutionDevinette)
  {
        console.log(nombreDevinette + " est trop grand")
  }
}
while ((nombreDevinette !== solutionDevinette ) && (nbEssais <6));
if (nombreDevinette === solutionDevinette)
{
    console.log("Bravo ! La solution était " + solutionDevinette);
    console.log("Vous avez trouvé en " + nbEssais + " essai(s)");
}
else
{
    console.log("Perdu... la solution était " + solutionDevinette);
}