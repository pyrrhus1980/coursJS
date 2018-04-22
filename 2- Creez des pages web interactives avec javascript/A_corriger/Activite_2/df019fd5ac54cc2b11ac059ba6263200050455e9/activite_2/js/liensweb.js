/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
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

// TODO : compléter ce fichier pour ajouter les liens à la page web
// Récupération de l'élement d'id "contenu"
contenuElt = document.getElementById("contenu");

// Parcours du tableau d'objets
listeLiens.forEach(ajouterLien);

function ajouterLien(lien)
{
    // Création d'un nouveau div de classe lien
    var divElt = document.createElement("div");
    divElt.className = "lien";

    // Création et décoration du lien
    var titreElt = document.createElement("a");
    titreElt.href = lien.url;
    titreElt.textContent = lien.titre;
    titreElt.style.color = "#428bca"; //ajoute la couleur des specs
    titreElt.style.textDecoration = "none"; //supprime le soulignement
    titreElt.style.fontWeight = "bold"; // en gras

    // Création de la balise span
    var lienElt = document.createElement("span");
    lienElt.textContent = lien.url;

    // Ajout des éléments créé au div créé
    divElt.appendChild(titreElt);
    divElt.appendChild(document.createTextNode(" "));
    divElt.appendChild(lienElt);
    divElt.appendChild(document.createElement("br"));
    divElt.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    // Ajout du div au contenu global
    contenuElt.appendChild(divElt);

}

ajoutElt = document.createElement("div");
ajoutElt.style.marginBottom = "20px";

// Cette fonction permet d'afficher le bouton "Ajouter" dans le div ci dessus
function ajoutDiv() {
    ajoutElt.innerHTML = "";
    var ajoutButtonElt = document.createElement("button");
    ajoutButtonElt.textContent = "Ajouter un lien";
    ajoutElt.appendChild(ajoutButtonElt);
    document.body.insertBefore(ajoutElt, contenuElt);
    ajoutButtonElt.addEventListener("click", displayForm);
}

// Cette fonction affiche le formulaire si le bouton a été cliqué
function displayForm(){
    ajoutElt.innerHTML = "";
    var formElt = document.createElement("form");
    var nameElt = document.createElement("input");
    nameElt.placeholder = "Entrez votre nom";
    nameElt.name = "name";
    nameElt.required = true;
    var titreElt = document.createElement("input");
    titreElt.placeholder = "Entrez le titre du lien";
    titreElt.name = "titre";
    titreElt.required = true;
    var lienElt = document.createElement("input");
    lienElt.placeholder = "Entrez l'URL";
    lienElt.name = "lien";
    lienElt.required = true;
    nameElt.type = titreElt.type = lienElt.type = "text";
    var submitElt = document.createElement("input");
    submitElt.type = "submit";
    submitElt.innerText = "Ajouter";
    formElt.appendChild(nameElt);
    formElt.appendChild(titreElt);
    formElt.appendChild(lienElt);
    formElt.appendChild(submitElt);
    ajoutElt.appendChild(formElt);
    formElt.addEventListener("submit", submitForm);
}

// Cette fonction réagit à la soumuission du formulaire
function submitForm(e){
    var regex = /https?:\/\//;

    if (! regex.test(e.target.elements.lien.value))
    {
        e.target.elements.lien.value = "http://" + e.target.elements.lien.value;
    }

    var nouveauLien = {
        titre: e.target.elements.titre.value,
        url: e.target.elements.lien.value,
        auteur: e.target.elements.name.value
    };
    ajouterLien(nouveauLien);

    confirmInsert(e.target.elements.titre.value);
    e.preventDefault();
}

// Cette fonction affiche le cadre de confirmation et le détruit au bout de 3 secondes
function confirmInsert(titre){
    ajoutElt.innerHTML = "";
    var confirmElt = document.createElement("div");
    confirmElt.style.padding = "20px";
    confirmElt.style.marginTop = "20px";
    confirmElt.style.marginBottom = "20px";
    confirmElt.style.color = "#1e0dff";
    confirmElt.style.backgroundColor = "#c9d1ff";
    confirmElt.innerText = "Votre lien \"" + titre + "\" a bien été ajouté !";
    document.body.insertBefore(confirmElt, ajoutElt);
    setTimeout(function(){confirmElt.remove()},3000);
    ajoutDiv();
}

ajoutDiv();