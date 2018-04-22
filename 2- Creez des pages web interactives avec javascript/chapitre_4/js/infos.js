var style = getComputedStyle(document.getElementById("contenu"));
var  pElt = document.createElement("p");
pElt.textContent = "Informations sur l'élément";

var hauteur = document.createElement("li"); 
hauteur.textContent = "Hauteur : " + style.height; 

var longueur = document.createElement("li"); 
longueur.textContent = "Longueur : " + style.width; 

var listeInfos = document.createElement("ul");
listeInfos.appendChild(hauteur);
listeInfos.appendChild(longueur);

document.getElementById("infos").appendChild(listeInfos);


console.log(document.body.childNodes[1])