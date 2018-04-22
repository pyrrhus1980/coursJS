// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
var eltDl = document.createElement("dl");
mots.forEach(mot => {
    
    var eltDt = document.createElement("dt");
    eltDt.innerHTML = "<strong>" + mot.terme +"</strong>";
    console.log(eltDt);
    var eltDd = document.createElement("dd");
    eltDd.textContent = mot.definition; 
        
    eltDl.appendChild(eltDt);
    eltDl.appendChild(eltDd);    
});

console.log(eltDl);
document.getElementById("contenu").appendChild(eltDl);