    function genererLettres(){
    	var listeLettres = document.createElement("div");    	
    	listeLettres.innerHTML = '	 <a href="#">A</a> | '+
							    	'<a href="#">B</a> | '+
							    	'<a href="#">C</a> | '+
							    	'<a href="#">D</a> | '+
							    	'<a href="#">E</a> | '+
							    	'...';
		listeLettres.id = "alphabet";
    	document.body.appendChild(listeLettres);
    }


	function traitement(e){
	    var lettre = e.target.textContent;
		console.log(lettre);
	    ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/"+lettre, function (reponse){
	    	var rep = JSON.parse(reponse);
	    	console.log(rep)
	
	    });
	}

	genererLettres();
    var liste = document.querySelector("#alphabet");   
    liste.addEventListener("click", traitement);