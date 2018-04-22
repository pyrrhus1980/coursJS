var couleurTexte = prompt("Entrez la couleur du texte");
var couleurFond = prompt("Entrez la couleur du fond");
var listeDiv = document.getElementsByTagName("div");
console.log(listeDiv)
for( var i=0; i<listeDiv.length; i++) {
	listeDiv[i].style.color = couleurTexte;
	listeDiv[i].style.backgroundColor = couleurFond;
}