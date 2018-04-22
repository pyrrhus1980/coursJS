// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}


//  --  Ajout des maisons au menu déroulante
var menuMaison = document.getElementById("maison");
//  Pour chaque maison de la liste, on crée un item que l'ajoute au menu déroulant
maisons.forEach(m => {
    var maison = document.createElement("option");
    maison.value = m.code;
    maison.setAttribute("name", m.nom);
    maison.innerHTML = m.nom;
    menuMaison.appendChild(maison);
});

//  --  Ajout d'un écouteur sur le choix d'une maison dans le menu déroulant
//  A l'envoi du formulaire (chx d'une maison), on affiche la liste des 
//  membres de cette maison avec getPersonnages
document.getElementsByTagName("select")[0].addEventListener("change", (e)=>{
    
    //  On récupère le code de la maison choisie
    var maisonChoisie = e.target.value;
    
    //  on récupère la liste des personnages de cette maison
    var persos = getPersonnages(maisonChoisie);

    //  On efface la liste précédente
    var listePersos = document.getElementById("persos");
    listePersos.innerHTML = "";
     
    //  on ajoute chaque personnages à la liste persos
    persos.forEach(nomPerso => {
        var perso = document.createElement("li");
        perso.textContent = nomPerso;            
        listePersos.appendChild(perso);
    });
});