/**
Les deux mots de passe saisis doivent être identiques.

Leur longueur doit être au minimum de 6 caractères.

Ils doivent contenir au moins un chiffre.
*/

var form = document.getElementsByTagName('form');
document.addEventListener("submit", e => {
	var mdp1 = document.getElementById("mdp1").value;
	var mdp2 = document.getElementById("mdp2").value;
	var regex = /[0-9]/;
	var msg = "";
			
	if(mdp1 === mdp2){
		if (mdp1.length > 5 && mdp1.length > 5){	
			if(regex.test(mdp1) && regex.test(mdp2)){
				msg = "Mots de pase OK";
			}
			else
				msg = "Erreur : Le mot de passe doit avoir au moins 1 chiffre.";
		}	
		else 
			msg = "Erreur : La longueur minimale du mot de passe est de 6 caractères.";
	}
	else{
		msg = "Erreur : Les mots de passe sont différents.";
	}

	document.getElementById("infoMdp").textContent = msg;
	e.preventDefault();
} );