// TODO : écrire la fonction compterElements
function compterElements(nomElt){
    var nbElts = 0;
    nbElts = document.querySelectorAll(nomElt).length;
    return nbElts;
}
console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2