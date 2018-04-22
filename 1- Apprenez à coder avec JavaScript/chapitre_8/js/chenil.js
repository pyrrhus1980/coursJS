var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};


var c1 = Object.create(Chien); c1.init("Crokdur","mâtin de Naples",75);
var c2 = Object.create(Chien); c2.init("Pupuce","bichon",22);
var c3 = Object.create(Chien); c3.init("Médor","labrador",58);
var chenil = [c1,c2,c3];
chenil.forEach(c => console.log(c.nom + " est un " + c.race + " mesurant " + c.taille + ". Il aboit: " + c.aboyer()));

function soustraction(nombre1, nombre2) {
    return nombre2 - nombre1;
 }
 console.log(soustraction(5, 7));

 var a = {
    prop1: "toto"
};
var b = Object.create(a);
b.prop2 = "titi";
var c = Object.create(b);
c.prop3 = "tutu";
console.log(c.prop1);