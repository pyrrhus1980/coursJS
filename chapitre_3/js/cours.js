// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="C">C</li>';
// document.getElementById("langages").innerHTML = ""
document.querySelector("H1").innerHTML += " de programmation";
// document.querySelector("H1").setAttribute("id", "titre");
document.querySelector("H1").id = "titre";

//	Classlist
var titreElt = document.querySelector("h1");
//titreElt.classList.remove("debut");
titreElt.classList.add("titre");

//	Ajout d'un nouvel élément
var eltPython = document.createElement("li");
eltPython.id = "python";
eltPython.textContent = "Python";
document.getElementById("langages").appendChild(eltPython);

//	Variante : création d'un noeud textuel
var eltRuby = document.createElement("li");
eltRuby.id = "ruby";
eltRuby.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(eltRuby);

// Ajout d'un élément au tout début de la liste
document.getElementById('langages')
		.insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>');

//	Exercice : Ajout d'un paragraphe
var pElt = document.createElement("p");
pElt.innerHTML = "En voici une <a href=\"https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation\">liste</a> plus complète.";
document.getElementById("contenu").appendChild(pElt);