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

listeLiens.forEach(function(objet) {
	var pElt = document.createElement("p");
	pElt.style.backgroundColor="white";
	pElt.style.paddingLeft="10px";
	pElt.style.paddingTop="10px";
	pElt.style.paddingBottom="10px";
	
	var strongElt=document.createElement("strong");
	
	var urlElt = document.createElement("a");
	urlElt.setAttribute("href",objet.url);
	urlElt.textContent=objet.titre;
	urlElt.style.color="#428bca";
	urlElt.style.textDecoration="none";
	
	strongElt.appendChild(urlElt);
	
	var brElt= document.createElement("br");
	
	pElt.appendChild(strongElt);
	pElt.appendChild(document.createTextNode(" " + objet.url));
	pElt.appendChild(brElt);
	pElt.appendChild(document.createTextNode("Ajouté par " + objet.auteur));
	
	document.getElementById("contenu").appendChild(pElt);
	
	
	
	
});