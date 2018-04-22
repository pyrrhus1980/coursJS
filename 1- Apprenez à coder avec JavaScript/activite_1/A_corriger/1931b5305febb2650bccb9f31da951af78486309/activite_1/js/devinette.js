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

var cpt = 5;
var flag = false;

while (cpt >= 0){
    var test = Number(prompt("Veuillez saisir un nombre entre 1 et 100"))
    if(test > solution){
        console.log(test + " est trop grand");
    }
    else if(test < solution){
        console.log(test + " est trop petit");
    }
    else{
        console.log("Bravo! La solution était " + test);
        console.log("Vous avez trouvé en " + (6-cpt) + " essai(s).");
        flag = true;
        break;
    }
    cpt--;
}

if(cpt === -1 && !flag){
    console.log("Perdu... La solution était " + solution);
}

// TODO : complétez le programme