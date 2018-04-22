/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: " http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: " http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: " http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page
var i = 0;
while (i < listeLiens.length){
    var contenuElt = document.createElement("div");
    var titreElt = document.createElement("a");
    var urlElt = document.createElement("span");
    var auteurElt = document.createElement("p");
    titreElt.href = listeLiens[i].url;
    titreElt.textContent = listeLiens[i].titre;
    urlElt.textContent = listeLiens[i].url;
    auteurElt.textContent = "Proposé par " + listeLiens[i].auteur;
    contenuElt.appendChild(titreElt);
    contenuElt.appendChild(urlElt);
    contenuElt.appendChild(auteurElt);
    document.getElementById("contenu").appendChild(contenuElt);
    contenuElt.style.backgroundColor = "white";
    titreElt.style.textDecoration = "none";
    titreElt.style.color = "#428bca";
    i++;
}