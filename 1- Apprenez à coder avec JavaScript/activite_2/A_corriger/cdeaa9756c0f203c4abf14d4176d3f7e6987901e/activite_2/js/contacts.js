/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var optionChoisie = ""; // on initialise l'option pour entrer dans la boucle while
var carnetContacts = []; // on initialise le carnet de contact

var Contact = {
	init: function(nom, prenom){
		this.nom = nom;
		this.prenom = prenom;
	},
	decrire: function(){
		var description = "Nom : " + this.nom + ", Prenom : " + this.prenom;
		return description;
	}
};

// Une fonction qui va lister les contacts
listerContacts = function(){
	console.log("\nVoici la liste de tous vos contacts : ")
	carnetContacts.forEach(function(contact){
		console.log(contact.decrire());
	});
	console.log("");
};

// Une fonction qui va creer un contact
creerContact = function(){
	var contact = Object.create(Contact);
	var nom = prompt("Entrez le nom de votre contact : ");
	var prenom = prompt("Entrez le prenom de votre contact : ");
	contact.init(nom, prenom);
	carnetContacts.push(contact); // on pousse le nouveau contact dans le carnet de contacts
	console.log("Le contact nouveau a été ajouté");
	console.log("");
};

//on créé nos 2 contact par defaut
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");
carnetContacts.push(contact1); // on pousse le nouveau contact dans le carnet de contacts
var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");
carnetContacts.push(contact2); // on pousse le nouveau contact dans le carnet de contacts

// Ici on créer la boucle while coeur du programme
while (optionChoisie !== "0"){
	console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
	optionChoisie = prompt("Entrez une option : ");
	switch (optionChoisie){
		case "0":
			// todo quitte
			break;
		case "1":
			listerContacts();
			break;
		case "2":
			creerContact();
			break;
		default:
			console.log("Je n'ai pas compris votre option, choisissez entre 1, 2 ou 0");
	}
}