
var isRoule = false;
var btnDemarrer = document.getElementById("demarrer");
var btnArreter = document.getElementById("arreter");


var cadre = document.getElementById('cadre');
var ballon = document.getElementById('ballon');
var vitesse = 8;

// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var largeurBallon = parseFloat(getComputedStyle(ballon).width);
var animationId = null; // Identifiant de l'animation
var dir = "right"


function deplacerBallon(){
	// Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBallon = parseFloat(getComputedStyle(ballon).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).width);
    
    if(xBallon + largeurBallon <= xMax && xBallon >= 0){ // Si le bloc n'est pas encore au bout du cadre       
        // Déplacement du ballon
    	if (dir == "right")
        	ballon.style.left = (xBallon + vitesse) + "px";
      	else 
    		ballon.style.left = (xBallon - vitesse) + "px";
    	    	    	
        // Demande au navigateur d'appeler deplacerBallon dès que possible
        animationId = requestAnimationFrame(deplacerBallon);
    }
    if(xBallon + largeurBallon > xMax){
    	dir = "left";
    	ballon.style.left = (xBallon - vitesse) + "px";
    	animationId = requestAnimationFrame(deplacerBallon);
    }
    if(xBallon < 0){
        dir = "right";
        ballon.style.left = (xBallon + vitesse) + "px";    	
    	animationId = requestAnimationFrame(deplacerBallon);
    }
}


btnDemarrer.addEventListener("click", (e) => {
	isRoule = true;
	btnDemarrer.disabled = true;	
	btnArreter.disabled = false;
	animationId = requestAnimationFrame(deplacerBallon); // Début de l'animation    	
});

btnArreter.addEventListener("click", (e) => {
	isRoule = false;
	btnDemarrer.disabled = false;	
	btnArreter.disabled = true;
	 // Annulation de l'animation
    cancelAnimationFrame(animationId);
});

document.getElementById("div").addEventListener("click", function () {
    console.log("Clic sur l'élément div");
});
document.getElementById("span").addEventListener("click", function () {
    console.log("Clic sur l'élément span");
});
document.getElementById("input").addEventListener("input", function () {
    console.log("Coucou");
});

setTimeout(function () {
    setInterval(
        function () {
            console.log("Top");
        },
        1000);
}, 2000);
