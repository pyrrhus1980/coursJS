
// A l'envoi d'un formulaire...
document.querySelector("form").addEventListener("submit", (e) => {
	
	// Récupération des données et création d'un objet représentant un article
	var article = {
		"titre": e.target.titre.value,
		"contenu": e.target.contenu.value
	};
	

	// Envoi de l'objet au serveur
	var urlCible = "https://oc-jswebsrv.herokuapp.com/article";
	// 'http://localhost/javascript-web-srv/post_json.php';
	ajaxPost(urlCible, article, function (reponse) {
	        // Le film est affiché dans la console en cas de succès
	        document.getElementById("resultat").innerText = "L'article \"" + article.titre + "\" a été envoyé au serveur";
	    },
	    true // Valeur du paramètre isJson
	);
	
	e.preventDefault();
});

