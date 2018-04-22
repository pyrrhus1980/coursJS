var valeurs = [11, 3, 7, 2, 9, 10];
var valMax = 0;
valeurs.forEach(v => {
    if(valMax < v)
        valMax = v;
});
console.log("Maximum: " + valMax);