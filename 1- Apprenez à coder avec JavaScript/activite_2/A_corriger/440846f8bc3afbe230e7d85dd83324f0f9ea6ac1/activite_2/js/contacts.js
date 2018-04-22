/*
Activité : gestion des contacts
*/

//création de l'objet contact
var contact = {
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },

    decrire: function () {
        return "Nom : " + this.nom  + ", prénom : " + this.prenom;
    }
};


var contact1 = Object.create(contact);
contact1.init("Carole", "Lévisse");

var contact2 = Object.create(contact);
contact2.init("Mélodie", "Nelsonne");

// tableau contenant tous les contacts
var contacts = [contact1, contact2];

// tableau contenant les options
var options = ["\n" + "1 : Lister les contacts", "2 : Ajouter un contact", "0 : Quitter"];

console.log ("Bienvenue dans le gestionnaire des contacts !");

// On boucle tant que l'user n'a pas décidé de quitter
while (userOption !== 0) {
    for (var i = 0; i < options.length; i++) {
        // On affiche les différentes options dispos
        console.log(options[i]);
    };

    var userOption = Number(prompt("Choisisser une option :"));

    switch (userOption) {

        case 1:
            console.log("Voici la liste de tous vos contacts : ");

            for (var i = 0; i < contacts.length; i++) {
              console.log(contacts[i].decrire());
            };
            break;

        case 2:
            // On récupère les infos en vue de l'insertion
            var nom = prompt("Entrer le nom de la personne");
            var prenom = prompt("Entrer le prénom de la personne");

            // On créé un nouveu contact à l'aide de l'objet contact et des infos précédentes
            newContact = Object.create(contact);
            newContact.init(nom, prenom);

            // On l'ajoute à notre tableau
            contacts.push(newContact);

            // Message de confirmation pour l'user
            console.log("Le contact vient d'être ajouté !");
            break;

        case 0:
            console.log("Au revoir !");
        }
}
