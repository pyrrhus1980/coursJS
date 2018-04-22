/* 
Activité 2
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

//
//  Fonction de création du formulaire d'ajout d'un lien
//
function creerFormAjoutLien(){
    // on crée les input du formulaire et le bouton d'ajout 
    var frmAjoutLien = document.createElement("form");
    frmAjoutLien.style.width = "100%";
    var eltAuteur = document.createElement("input");
    eltAuteur.id = "auteur";
    eltAuteur.required = true;
    eltAuteur.placeholder = "Entrez votre nom";
    eltAuteur.style.width = "15%";
    eltAuteur.style.marginRight ="10px";

    var eltTitre = document.createElement("input");
    eltTitre.id = "titre";
    eltTitre.required = true;
    eltTitre.placeholder ="Entrez le titre du lien";        
    eltTitre.style.width = "25%";
    eltTitre.style.margin ="0 10px";    

    var eltUrl = document.createElement("input"); 
    eltUrl.id = "url";   
    eltUrl.required = true;
    eltUrl.style.width = "25%";
    eltUrl.placeholder ="Entrez l'URL du lien";
    eltUrl.style.margin ="0 10px";    

    var btnAjout = document.createElement("button");
    btnAjout.id = 'btnAjout';
    btnAjout.innerHTML = "Ajouter";
    btnAjout.style.padding= "2px 20px";
    btnAjout.style.borderRadius = "5px";
    btnAjout.style.borderStyle= "solid";
    btnAjout.style.backgroundColor = "white";
    btnAjout.style.marginLeft ="0 10px";    

    // on les ajoute au formulaire
    frmAjoutLien.appendChild(eltAuteur);
    frmAjoutLien.appendChild(eltTitre);
    frmAjoutLien.appendChild(eltUrl);
    frmAjoutLien.appendChild(btnAjout);

    return frmAjoutLien;
}

//
//  Fonction d'ajout d'un lien à un contenu cible
//
function ajouterLien(lien, eltCible, place = "last"){
    // -- Création et Formatage de l'élement
    
    //  Création de l'url présente dans le titre
    var url = document.createElement("a");
    url.textContent = lien.titre;
    url.href = lien.url;
    url.style.textDecoration = "none";
    url.style.marginRight = "10px"; 
    
    //  Création du titre lui-même
    var titre = document.createElement("h2");
    titre.appendChild(url);
    url.style.color = "#428bca";    
    titre.innerHTML += "<span>" + lien.url + "</span>";

    //  On ajoute le nom de l'auteur
    var p = document.createElement("p");
    p.textContent = "Ajouté par "+ lien.auteur;

    //  On assemble le tout dans une div de classe "lien"
    var divLien = document.createElement("div");
    divLien.appendChild(titre);
    divLien.appendChild(p);
    divLien.classList.add("lien");

    //  Ajout de l'élement à la div de contenu    
    if (place === "first"){
        var first = eltCible.firstElementChild;
        eltCible.insertBefore(divLien, first);
    }
    else 
        eltCible.appendChild(divLien);
}

//
//  --  MAIN
//
var contenu = document.getElementById("contenu");

//  Création de la div où l'on va placer le bouton, le formulaire 
//  et le message d'ajout de lien
var divAjoutLien = document.createElement("div"); 
divAjoutLien.id = "ajoutLien";
divAjoutLien.style.backgroundColor = "#eee";
divAjoutLien.style.width= "100%";
divAjoutLien.style.padding= "10px 0";
divAjoutLien.style.margin= "10px 0";

divAjoutLien.style.display ="inline-flex";

//  On place cette div au dessus de la div "contenu"
var parent = contenu.parentNode;
parent.insertBefore(divAjoutLien, contenu);

// Ajout du bouton qui permet d'afficher le formulaire
var btnAjoutLien = document.createElement("button");
btnAjoutLien.innerHTML = "Ajouter un lien";
btnAjoutLien.style.backgroundColor = "white";
btnAjoutLien.style.padding= "2px 20px";
btnAjoutLien.style.borderRadius = "5px";
btnAjoutLien.style.borderStyle= "solid";
divAjoutLien.appendChild(btnAjoutLien);

//  Ajout du formulaire 
var frmAjoutLien = creerFormAjoutLien();
frmAjoutLien.style.display = "none";
divAjoutLien.appendChild(frmAjoutLien);

//  On crée une div pour afficher le résultat d'ajout qui n'apparaîtra que 2s 
var divResultat = document.createElement("div");
divResultat.id = "resultat";
divResultat.style.backgroundColor = "grey";
divResultat.style.width = "100%";
divResultat.style.padding = "20px";
divResultat.style.color = "pink";
divResultat.style.display = "none";
divAjoutLien.appendChild(divResultat);


// Au clic sur le bouton ...
btnAjoutLien.addEventListener("click", (e)=>{    
    // on efface le bouton d'ajout et on le remplace par le formulaire
    btnAjoutLien.style.display = "none";
    frmAjoutLien.style.display = "block";
});

// Au clic sur le bouton d'ajout, on efface le formulaire
document.addEventListener("submit", (e)=>{
    var verifTxt = /\w+/;//" \^[a-zA-Z0-9_]{3,16}$\ ");
    var verifUrl =  new RegExp("^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\-\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$");    
    var isConforme = false;

    var newTitre = document.querySelector("#titre").value 
    var newAuteur = document.querySelector("#auteur").value 
    var newUrl = document.querySelector("#url").value;

    // On vérifie la pertinence des champs
    if  (verifTxt.test(newTitre) 
        && verifTxt.test(newAuteur) 
        && verifUrl.test(newUrl)){
        
        // on ajoute le div de message de succès
        isConforme = true;
        
        // Si l'url entrée n'a pas "http://", on le rajoute
        if(!newUrl.includes("http://") && !newUrl.includes("https://")){
            newUrl = "http://" + newUrl;    
        }        
        divResultat.textContent = "Le lien " + newTitre + " a bien été ajouté.";        
    }
    else{
        divResultat.innerHTML = "Erreur de saisie.";   
    }

    // on efface le formulaire
    frmAjoutLien.style.display = "none"; 
    divResultat.style.display = "block";       

    // On affiche le div de résultat pendant 2 secondes    
    setTimeout(() => {            
        setTimeout(function(){
            divResultat.style.display = "none";             
        },0);

        // on fait réapparaitre le bouton d'ajout d'un lien
        btnAjoutLien.style.display = "block";
    }, 2000);

    if (isConforme){
        var nouveauLien = {
            titre: newTitre,
            url: newUrl,
            auteur: newAuteur
        };

        ajouterLien(nouveauLien, contenu, "first");  
        console.log("Lien ajouté");
    }
    else console.log("erreur");

    e.preventDefault();
});
       

//
//  Affichage des liens dans la liste
//
listeLiens.map(lien => {        
    ajouterLien(lien, contenu);
});
