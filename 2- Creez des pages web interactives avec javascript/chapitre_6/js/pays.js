// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var txtPays = document.getElementById("pays");
var suggestions = document.getElementById("suggestions");
txtPays.addEventListener("input", (e) => {
	//	on efface la liste des suggestions
	suggestions.innerHTML = "";
	
	//	On récupère l'entrée de l'utilisateur
	var entree = e.target.value.toUpperCase();
	if (entree !== ""){		
		//	On compare les premières lettres de chaque pays avec l'entrée de l'utilisateur
		listePays.forEach(pays => {
			if(pays.toUpperCase().indexOf(entree) > -1 && pays.toUpperCase().indexOf(entree) < entree.length){
				var divSugg = document.createElement("div");
				divSugg.id = pays;
				divSugg.textContent = pays;
				divSugg.addEventListener("click", (e) => {					
					txtPays.value = e.target.id;
					suggestions.innerHTML = "";						
				});
				suggestions.appendChild(divSugg);
			}
		});
	}
});