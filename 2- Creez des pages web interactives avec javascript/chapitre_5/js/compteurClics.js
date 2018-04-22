var compteur = 0;
var btnCompteur = document.getElementById("clic");
var spanCompteur = document.getElementById("compteurClics");
var btnDesactiverCompteur = document.getElementById("desactiver");

function ajouterCompteur(){	
	spanCompteur.textContent = ++compteur; 
}

function desactiverCompteur(evt){		
	btnCompteur.removeEventListener("click", ajouterCompteur);
}

btnCompteur.addEventListener("click", ajouterCompteur);
btnDesactiverCompteur.addEventListener("click", desactiverCompteur);