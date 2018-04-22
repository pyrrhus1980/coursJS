
function ajaxGet(url, callback){
    // Création d'une requête HTTP
    var req = new XMLHttpRequest();
    
    // Requête HTTP GET asynchrone vers l'url
    req.open("GET", url);

    // GEstion de l'événement indiquant la fin de la requête
    req.addEventListener("load", function(){
        if (req.status >= 200 && req.status < 400){
            // Affiche la réponse reçue pour la requête
            callback(req.responseText);
        }
        else
            console.error(req.status + " " + req.statusText); 
    });

    req.addEventListener("error", function(){
        // La requête n'a pas réussi à atteindre le serveur
        console.error("Erreur réseau");
    });

    req.send(null);    
}



