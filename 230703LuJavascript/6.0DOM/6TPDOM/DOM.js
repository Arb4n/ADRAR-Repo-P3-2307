let titre1 = document.querySelector("h1");
let parag4 = document.querySelectorAll("p");

// console. ??
// .?.??.




// accéder via son id 
let element = document.getElementById("titre1");
console.log(element);




// via la classe

let classe = document.getElementsByClassName("parag4");
console.log(classe);

// pour suppr un element
titre1.remove();


// Pour créer un élément
let section = document.createElement('section');
let section2 = document.createElement('section');

// Ajouter du texte
section.textContent = "Je suis une section";
section2.textContent = "Je suis aussi une section";

// Ajouter une section au DOM

document.body.appendChild(section) // ajoute en dernier
document.body.prepend() // ajoute en premier

// Ajouter, récupérer et ajouter un attribut
section.setAttribute("class", "principale");
let attribut = section.getAttribute("class");

console.log(attribut);
section.removeAttribute("class");






// LES EVENEMENTS

// In html : 
//     PAR LES ATTRIBUTS
//     <button > Clique sur moiii ♥ </button>
//         ↓         ↓
//     <button onclick="console.log> Clique sur moiii ♥ </button>

//     !! Il y a sur le web des listes d'événement

//     <button onmouseover ="console.log> Clique sur moiii ♥ </button>
//     Trsè pratique en ReactJS 

//     PAR ADDEVENTLISTENER
//     La methode la plus recommandée si tu eux faire du js 
//     natif.
//     Deux params : le premier est le type d'event nana.
//     Le deuxième va attendre une fonction. 
    
let btn = document.querySelector('button');

btn.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Vous avez cliqué');
})