ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", 
    (reponse) => {console.log(reponse);}
);

var avions = [
    {
        marque : "Airbus", 
        couleur: "A320"
    },
    {
        marque : "Airbus",
        couleur: "A380"
    }
];

var txtAvions = JSON.stringify(avions);
console.log("Version stringify: " + txtAvions);

console.log("Version parse: "); 
console.log(JSON.parse(txtAvions));

//  Création d'une liste ul
var ul = document.createElement("ul");
// Récup et affichage de la liste des films au format JSON

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt",
    (reponse) => {
        var langages = reponse.split(";");
        console.log(langages);
        langages.forEach(l => {
            var li = document.createElement("li");
            li.textContent = l;
            ul.appendChild(li)
        });
    }
);

document.body.appendChild(ul);