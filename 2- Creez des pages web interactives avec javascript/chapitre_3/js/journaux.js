// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
journaux.forEach(jLien => {
	var eltLien = document.createElement("a");
	eltLien.href = jLien;
	eltLien.textContent = jLien;
	
	document.getElementById("contenu").appendChild(eltLien).insertAdjacentHTML("afterend", "<br>");
})