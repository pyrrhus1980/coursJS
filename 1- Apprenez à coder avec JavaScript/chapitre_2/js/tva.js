var prixBrut = Number(prompt("Entrez le prix brut"));
var tauxTVA = Number(prompt("Entrez le taux de TVA"));
alert("Le prix TTC est de " + prixBrut*(1+tauxTVA/100));