/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var Contact = {
	//Initialise le contact
	init: function (nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	},

	//Decrire le contact
	decrire: function () {
		return("Nom : " + this.nom + ", prénom : " + this.prenom);
	}
};

//Le permier contact Carole
var Carole = Object.create(Contact);
Carole.init("Lévisse", "Carole");

//Le deuxieme contact Melodie
var Melodie = Object.create(Contact);
Melodie.init("Nelsonne", "Mélodie");

//Le tableau des contacts
var contacts = [Carole, Melodie];

console.log("Bienvenue dans le gestionnaire des contacts !");

//Variable contenant le choix de l'utilisateur de valeur aléatoire 4
var choix = 4;

while(choix !== 0) {
	console.log("\n1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter");
	choix = Number(prompt("Choisissez une action :"));
	//Les actions
	switch(choix){
		case 1: 
			console.log("Voici la liste de tous vos contacts :")
			for (var i = 0; i < contacts.length; i++){
				console.log(contacts[i].decrire());
			}
			break;
		case 2:
			var nom = prompt("Entrez le nom du nouveau contact :")
			var prenom = prompt("Entrez le prenom du nouveau contact :")
			var nouveauContact = Object.create(Contact);
			nouveauContact.init(nom, prenom);
			contacts.push(nouveauContact);
			console.log("Le nouveau contact a été bien ajouté");
			break;
		case 0:
			console.log("Au revoir !");
			break;
		default :
			console.log("Erreur");
			break;
	}
}