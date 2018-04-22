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


for (var i = 0 ; i < listeLiens.length; i++) {
   
    var pElt = document.createElement("p");
    pElt.classList.add("lien");
    
    var lienElt = document.createElement("a");
    lienElt.href = listeLiens[i].url;
    lienElt.textContent = listeLiens[i].titre;
    lienElt.style.color = "#428bca";
    lienElt.style.fontWeight= "bold";
    lienElt.style.textDecoration= "none";

    var spanElt = document.createElement("span");
    
    pElt.appendChild(lienElt);
    pElt.appendChild(spanElt);
    spanElt.appendChild(document.createTextNode(" " + listeLiens[i].url));
    spanElt.appendChild(document.createElement("br"));
    spanElt.appendChild(document.createTextNode("Ajouté par " + listeLiens[i].auteur));
    
    document.getElementById("contenu").appendChild(pElt);
}

