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
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
listeLiens.forEach(lien => {    

    // -- Création et Formatage de l'élement
    
    //  Création de l'url présente dans le titre
    var url = document.createElement("a");
    url.textContent = lien.titre;
    url.href = lien.url;
    url.style.textDecoration = "none";
    url.style.marginRight = "10px"; 
    
    //  Création du titre lui-même
    var titre = document.createElement("h2");
    titre.appendChild(url);
    url.style.color = "#428bca";    
    titre.innerHTML += "<span>" + lien.url + "</span>";

    //  On ajoute le nom de l'auteur
    var p = document.createElement("p");
    p.textContent = "Ajouté par "+ lien.auteur;

    //  On assemble le tout dans une div de classe "lien"
    var divLien = document.createElement("div");
    divLien.appendChild(titre);
    divLien.appendChild(p);
    divLien.classList.add("lien");

    //  Ajout de l'élement à la div de contenu
    var contenu = document.getElementById("contenu");
    contenu.appendChild(divLien);
});