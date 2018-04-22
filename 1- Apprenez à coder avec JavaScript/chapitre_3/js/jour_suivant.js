var jour = prompt("Quel jour sommes-nous ?");
var jourApres = '';
switch(jour){
	case 'lundi':{
		jourApres = 'mardi';
		break;
	}
	case 'mardi':{
		jourApres = 'mercredi';
		break;
	}
	case 'mercredi':{
		jourApres = 'jeudi';
		break;
	}
	case 'jeudi':{
		jourApres = 'vendredi';
		break;
	}
	case 'vendredi':{
		jourApres = 'samedi';
		break;
	}
	case 'samedi':{
		jourApres = 'dimanche';
		break;
	}
	case 'dimanche':{
		jourApres = 'lundi';
		break;
	}
	default: {
		jourApres = "Erreur : jour incorrect";
	}
}
console.log(jourApres.length);
if(jourApres.length < 9 )
	alert('Demain, nous serons '+jourApres+' !');
else
	alert(jourApres);