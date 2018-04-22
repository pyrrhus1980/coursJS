/*
Modifier la couleur de fond des trois éléments div lorsque l'utilisateur appuie 
sur la touche R (rouge), J (jaune), V (vert) ou B (blanc). 
On ne fera pas de distinction entre minuscules et majuscules.
*/

document.addEventListener("keypress", (e)=>{
	// On récupère la touche pressée
	var touche = String.fromCharCode(e.charCode);
	var couleur = "white";
	switch(touche){
		case "r":
		case "R":
			couleur = "red";
			break;
		case 'j':
		case 'J':
			couleur = "yellow";
			break;
		case 'v':
		case  'V':
			couleur = "green";
			break;
		case 'b':
		case 'B':
			couleur = "white";
			break;
	}
	var eltsDiv = document.getElementsByTagName("div");	
	for (var i=0; i<eltsDiv.length; i++){
		eltsDiv[i].style.backgroundColor = couleur;
	}	
});