/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

//  Déclaration de l'object Contact
var Contact = {
    nom: "",
    prenom: "",

    //  Initialisation des propriétés de l'objet
    init: function(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    },

    //  Affichage des propriétés
    afficher: function(){
        console.log("Nom: " + this.nom + ", prénom: " + this.prenom)
    }
}

//  On crée 2 contacts
var c1 = Object.create(Contact);
c1.init("Carole", "Lévisse");

var c2 = Object.create(Contact);
c2.init("Mélodie", "Nelsonne");

//  On les ajoute à la table des contacts
var tabContacts = [c1, c2];

console.log("Bienvenue  dans le gestionnaire de contacts !");
var choix = -1;
while (choix !== 0){
    //  On affiche les choix posssibles
    console.log("1: Lister les contacts");
    console.log("2: Ajouter les contacts");
    console.log("0: Quitter");

    //  L'utilisateur entre son choix
    choix = Number(prompt("Choisissez une option"));
    
    //  L'utilisation d'un switch plutôt que d'un if permet de prendre en compte 
    //  les erreurs de choix et d'envisager de rajouter plus tard d'autres options 
    //  (suppression, modification, ...)
    switch(choix){
        //  On quitte   
        case 0:{
            console.log("\nAu revoir !\n");          
            break;
        }
        //  On affiche la liste des contacts
        case 1:{
            console.log("\nVoici la liste de tous vos contacts: ");                
            tabContacts.forEach(function (contact){
                contact.afficher();
            });
            console.log("\n");
            break;
        }
        //  On ajoute un contact à la liste
        case 2:{            
            //  L'utilisateur entre ses nom et prénom
            var nom = prompt("Entrez le nom du nouveau contact");
            var prenom = prompt("Entrez le prénom du nouveau contact");
            //  On crée un objet Contact qu'on initialise aux valeurs entrées 
            var c = Object.create(Contact);
            c.init(nom, prenom);
            //  On l'ajoute à la liste des contacts
            tabContacts.push(c);
            //  On informe l'utilisateur que l'opération a réussi
            console.log("\nContact ajouté.\n");
            break;
        }
        default: 
            console.log("\n*** ERREUR - CHOIX NON VALIDE ***\n");            
            break;
    }
}