var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];


function creerElementLien(titre, auteur, url) {
    var titreLien = document.createElement("a");
    titreLien.href = url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

//permet de factoriser la créer des éléments input
function createInput(nom, placeholder) {
    var inputElt = document.createElement("input");
    inputElt.type = "text";
    inputElt.name = nom;
    inputElt.id = nom;
    inputElt.required = true; // rend le champ obligatoire
    inputElt.placeholder = placeholder;
    inputElt.style.marginRight = "10px";

    return inputElt;
}

//permet de factoriser la création des éléments button
function createButton(id, content) {
    var buttonElt = document.createElement("button");
    buttonElt.id = id;
    buttonElt.textContent = content;

    return buttonElt;
}

//function qui permet de créer le carré bleu indiquant a l'utilisateur que ça requete à bien était ajouté.
function feedbackLienAjoute(titre) {
    //creer un element div et le met en forme
    var divElt = document.createElement("div");
    divElt.id = "feedback";
    divElt.style.backgroundColor = "#d6ecf6";
    divElt.style.color = "#6969ce";
    divElt.style.fontSize = "20px";
    divElt.style.marginBottom = "5px";
    divElt.style.padding = "25px"
    divElt.textContent = "Le lien \"" + titre + "\" à bien était ajouté"; // ajoute le titre que l'utilisateur à choisi

    contenu.insertBefore(divElt, document.querySelector("form")); // l'ajoute juste au-dessus du form

    //fonction permettant de le supprimer au bout de 2000 milisecondes
    setTimeout(function () {
        contenu.removeChild(document.getElementById("feedback"))
    }, 2000);
}

//creer le bouton pour ajouter des liens
var buttonAjoutLienElt = null;
buttonAjoutLienElt = createButton("ajoutLien", "Ajouter un lien");
//creer le formulaire
var form = document.createElement("form");
form.style.marginBottom = "10px";

var contenu = document.getElementById("contenu");
contenu.appendChild(buttonAjoutLienElt);
contenu.appendChild(form);


//affiche les 3 premiers liens
for (var i = 0; i < listeLiens.length; i++) {
    contenu.appendChild(creerElementLien(listeLiens[i].titre, listeLiens[i].auteur, listeLiens[i].url));
}



buttonAjoutLienElt.addEventListener("click", function (e) {
    //creer les input du formulaire
    var inputNomElt = createInput("nom", "Entrez votre nom");
    var inputTitreElt = createInput("titre", "Entrez le titre du lien");
    var inputLienElt = createInput("lien", "Entrez l'URL du lien");
    var buttonSubmitElt = createButton("ajoutLien", "Ajouter");
    //enlever le bouton pour ajouter des liens
    contenu.removeChild(buttonAjoutLienElt);

    //met tout les input dans le formulaire
    form.appendChild(inputNomElt);
    form.appendChild(inputTitreElt);
    form.appendChild(inputLienElt);
    form.appendChild(buttonSubmitElt);
});



form.addEventListener("submit", function (e) {
    var url = form.elements.lien.value;
    var auteur = form.elements.nom.value;
    var titre = form.elements.titre.value;
    // creer les expression reguliere pour tester l'url
    var regexUrl = /https:\/\//
    var regexUrl2 = /http:\/\//


    if (!regexUrl.test(url) && !regexUrl2.test(url)) {
        url = "http://" + url; //ajoute http:// si l'utilisateur ne la pas mis
    }
    
    contenu.insertBefore(creerElementLien(titre, auteur, url), document.getElementsByClassName("lien")[0]); // ajoute le lien a la liste de lien
    feedbackLienAjoute(titre); //on ajoute le carré bleu indiquand que le lien est bien mis
    contenu.insertBefore(buttonAjoutLienElt, form); // remet le bouton ajouter un lien
    form.innerHTML = ""; //vide le formulaire

    e.preventDefault(); // empeche l'envoie du formulaire
})
