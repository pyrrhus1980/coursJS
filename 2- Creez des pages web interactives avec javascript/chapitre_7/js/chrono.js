
var compteur = 0;
var btn = document.querySelector("button");
var enMarche = false;
var intervalId = undefined;

function augmenterCompteur(){
	document.querySelector("span").textContent = ++compteur;
}

btn.addEventListener("click", (e)=>{
					
	if (enMarche){
		console.log(intervalId)
		clearInterval(intervalId);
		btn.textContent = "Démarrer";
		console.log(enMarche);
		enMarche = false;		
	}
	else{
		// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
		intervalId = setInterval(augmenterCompteur, 1000);
		console.log(intervalId);
		console.log(enMarche);
		btn.textContent = "Arrêter";		
		enMarche = true;
	}
	
});


