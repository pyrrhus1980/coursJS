function infosLiens(){
    var liens = document.querySelectorAll("a");
    console.log(liens.length);
    console.log(liens[0]);    
    console.log(liens[liens.length -1]);
}

function possede(nom, type){
    if(document.getElementById(nom))
        console.log(document.getElementById(nom).classList.contains(type)); 
    else
        console.log("Aucun instrument ne possède l'identifiant " + nom);
}

//infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
