var table = document.getElementById("tableaux");
table.style.alignItems = "left"
ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json",
    (reponse) => {
        var tabTableaux = JSON.parse(reponse);
        
        tabTableaux.forEach(t => {
            var ligne = document.createElement("tr");
            
            var caseNom = document.createElement("td"); caseNom.textContent = t.titre;
            var caseAuteur = document.createElement("td"); caseAuteur.textContent = t.auteur;
            var caseAnnee = document.createElement("td"); caseAnnee.textContent = t.annee;

            ligne.appendChild(caseNom);
            ligne.appendChild(caseAnnee);
            ligne.appendChild(caseAuteur);            
            table.appendChild(ligne);
        });
         
    }
);

document.body.appendChild(table);