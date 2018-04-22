// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

//  Fonction d'affichage de réponse à la place du bouton
function afficherReponse(reponse){
    console.log(reponse);    
}
var i = 0;
questions.forEach(q => {
    var divContenu = document.getElementById("contenu");

    //  On récupère la question et on la place dans un paragraphe
    var pEnonce = document.createElement("p");
    pEnonce.innerHTML = "<strong>Question " + (i+1) + " : </strong><i>" + q.enonce + "</i><br>";
    
    //  on crée un bouton 
    var btnReponse = document.createElement("button");
    btnReponse.id = "btnReponse" + i;
    btnReponse.textContent = "Afficher la réponse";
    //  Au clic, on lui associe une fonction d'affichage de la réponse à sa place
    btnReponse.addEventListener("click", function(){
        var parent = document.getElementById(this.id).parentNode;
        var sReponse = document.createElement("span");
        sReponse.textContent = q.reponse;
        parent.replaceChild(sReponse,this);
    });
    //  On ajoute le bouton de réponse au paragraphe de la question courante
    pEnonce.appendChild(btnReponse);

    //  On ajoute ce paragraphe à la div "contenu"
    divContenu.appendChild(pEnonce);
    i++;
});