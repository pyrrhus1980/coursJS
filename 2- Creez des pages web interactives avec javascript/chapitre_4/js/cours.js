var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";

// ...
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

//	Permet d'accéder aux styles définis dans un fichier CSS : getComputedStyle
var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB