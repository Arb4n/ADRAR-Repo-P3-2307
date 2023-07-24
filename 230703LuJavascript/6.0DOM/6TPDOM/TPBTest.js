// url api : https://api.betaseries.com

// Redirection en JS
// Redirection simple avec : document.location.href
//document.location.href récupère l'url de la page courante

//example
/**
let btn = document.createElement('button');
btn.textContent = "lien";
document.body.appendChild(btn);

btn.addEventListener('click', function(){
    document.location.href = "https://www.betaseries.com/api"
})

async function toto(){
    const response = await fetch();
    // La réponse
    const data = await response.json();
}

JSON.stringify(objet); //Permet de convertir un objet en chaine de caracteres json
*/
// Web storage

// web storage enregistre dans le navigateur des donnees sous la forme cle/ valeur

/*
localStorage.setItem('nom', 'Nicolas'); // initialise un nouvel item
let identifiant = localStorage.getItem('nom'); // récupère une valeur via la cle

localStorage.removeItem('nom') // supprimer mon item

localStorage.clear(); // permet de tout cupprimer
localStorage.key(1); //aller chercher la clé située à l'index indiqué
localStorage.length; // retourne le nombre d'items stockés

// C'est stocké sous forme de cle / valeur, mais chaque valeur a un index. 


// Test 
localStorage.setItem("id", "f8f4725b6bf120ffda3d73e51b869f32"); // stocke en local
sessionStorage.setItem("nom", "Toto"); // sur la session en ligne


console.log(key(1));
*/



