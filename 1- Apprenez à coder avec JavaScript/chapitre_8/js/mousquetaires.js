var mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les trois mousquetaires :");
for(var i=0; i < mousquetaires.length; i++){
	console.log(mousquetaires[i]);
}

console.log("A présent, ils sont quatre !");
mousquetaires.push("D'Artagnan");
mousquetaires.forEach(m => console.log(m));
