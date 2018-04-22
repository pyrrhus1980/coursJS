
//  Traitement - Affichage des données de profil
function afficherInfos(reponse) {
    var data = JSON.parse(reponse);
    console.log(data);

    // Récup de la photo, du nom et de l'url depuis la page html renvoyée        
    var infos = document.createElement("div");

    var photo = document.createElement("img");
    photo.src = data.avatar_url;
    
    var nom = document.createElement("h2");
    nom.textContent = data.name;
    
    var blog = document.createElement("a");
    blog.textContent = data.blog;
    blog.href = data.blog;

    infos.appendChild(photo);
    infos.appendChild(nom);
    infos.appendChild(blog);
    document.querySelector("#profil").innerHTML = '';
    document.querySelector("#profil").appendChild(infos);
}

document.addEventListener("submit", (e) => {
    var nom = e.target.nom.value;

    // Accès aux informations publiques sur le profil
    ajaxGet("https://api.github.com/users/"+nom, afficherInfos);
    e.preventDefault();    
});