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

var nbMaxEssais = 6;
var nbEssais = 0;
var trouve = false;

//	Tant qu'on n'a pas trouvé et que l'on a fait moins de 6 essais
while(nbEssais < nbMaxEssais && trouve == false){
	//	On entre un nombre
	var nbPropose = Number(prompt("Entrez un nombre en 1 et 100"));
	//	Si on a trouvé	
	if(nbPropose == solution){
		trouve = true;
	}
	//	Si le nombre est trop petit
	else if (nbPropose < solution){
		console.log(nbPropose + " est trop petit");
	}
	//	Si le nombre est trop grand
	else{
		console.log(nbPropose + " est trop grand");
	}
	//	On passe à l'essai suivant
	nbEssais ++;
}

//	Affichage du résultat
if (trouve){
	console.log("Bravo! la solution était "+solution);
	console.log("Vous avez trouvé en " + nbEssais + " essais.");
}
else{
	console.log("Perdu... la solution était " + solution);
}