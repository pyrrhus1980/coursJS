/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nbEssai = 6;
var nbTest;
var essai = 0;

while (nbTest !== solution && essai < nbEssai) {
    nbTest = Number(prompt("Choisir un nombre : "));

    if (nbTest < solution)
        console.log("Le nombre est plus grand que " + nbTest);
    else if (nbTest > solution)
        console.log("Le nombre est plus petit que " + nbTest);
    essai++;
}

if (nbTest === solution)
    console.log("Bravo, le nombre était bien " + solution + " !\n Vous avez trouvé en " + essai + " essai(s)");
else
    console.log("Perdu, le nombre à trouver était " + solution);