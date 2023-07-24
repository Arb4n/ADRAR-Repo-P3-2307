/**
 * API FETCH>>
Méthode de données externes. 

>
>> Ici, récup de données.
>

D'autres formats : 
XMLHTTPREQUEST
ajax, sympa , fait de l'asynchrone
fecth, instantané. 

>>
>
>>méthode fetch 
>
. then va traiter le résultat
ça attend une fonction
On va d'ab traduire les données en json ('response.json')
>
Pour chaque data qu'on récup, on peut les log
>
ici, on peut faire un data.country
oudata.name pour récup le pays ou l'univ etc. 
>
in barre de navig : taper name=montpellier
>

RECAP>>
fetch permet de faire la reqt à la cible
cible = url ; 
.then permet de traduire /formater les données en json /tab associatif.
deuxième.then permet de récup les données
Et .catch capture les erreurs potentielles de la reqt.
 */


// API fetch 

fetch("http://universities.hipolabs.com/search?name=Middle&country = Turkey") // fetch qui permet de faire la requête à la cible
.then(response => {// premier then qui permet de formater les données en JSON
    console.log(response);
    return response.json();
})
.then(data => { // deuxième then qui de récupérer les données.
    console.log(data);
    console.log(`Mes données : ${JSON.stringify(data)}`);
    return data;
})
.catch(error => console.error(error)) // catch qui capture les erreurs potentiel de la requête

/**
 * D'utiliser cette api et réaliser un outil de recherche. 
 * Un recherche par Pays et par ville par formulaire.
 * affichage sous forme de liste. 
 */

// 1 Créer un form
// 2 : 



const searchForm = document.getElementById("searchForm");
const countryInput = document.getElementById("countryInput");
const cityInput = document.getElementById("cityInput");
const universitiesList = document.getElementById("universitiesList");

searchForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le rechargement de la page 
  // lors de la soumission du formulaire

  const country = countryInput.value;
  const city = cityInput.value;

  // Effectuer la requête à l'API avec les paramètres de recherche
  fetch(`http://universities.hipolabs.com/search?country=${country}&city=${city}`)
    .then(response => response.json())
    .then(data => {
      // Réinitialiser la liste des universités
      universitiesList.innerHTML = "";

      // Afficher les résultats de recherche sous forme de liste
      data.forEach(university => {
        const listItem = document.createElement("li");
        listItem.textContent = university.name;
        universitiesList.appendChild(listItem);
      });
    })
    .catch(error => console.error(error));
});


// !! pour cibler, faire une reqt 
// en fonction de parametres
//



/**
 * Laura V — Aujourd’hui à 13:33 */
let searchBarVille = document.createElement("input");
document.body.appendChild(searchBarVille);
searchBarVille.setAttribute("placeholder", "ville");

let searchBarPays = document.createElement("input");
document.body.appendChild(searchBarPays);
searchBarPays.setAttribute("placeholder", "pays");

let btn = document.createElement("button");
document.body.appendChild(btn);
btn.textContent = "rechercher";

btn.addEventListener("click", () => {
  const ville = searchBarVille.value;
  const pays = searchBarPays.value;
  search(ville, pays);
});

function search(ville, pays) {
  fetch(`http://universities.hipolabs.com/search?name=${ville}&country=${pays}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`Mes données : ${JSON.stringify(data)}`);
      let Ul = document.createElement("ul");
      document.body.appendChild(Ul);
      for (let item of data) {
        let li = document.createElement("li");
        li.textContent = item.name; 
        Ul.appendChild(li);
      }
      return data;
    })
    .catch(error => console.log(error));
}
 


/**
 * Amélioration de l'algo search universities
 * 
 * Créer un champ qui attend un pays 
 * et lancer l'api avec cette donnée. 
 * Si le nombre d'universités est supérieur à 50, créer un nouveau champ 
 * pour préciser votre recherche. 
 * Si c'est inférieur à 50 on affiche les données.
 * 
 * Gérer les doublons en les supprimant. 
 * Mettre à jour le DOM quand vous modifiez l'un des champs.
Aide: date.length 
Filter pour filtrer les données 
*/


// let tachesRow = document.createElement('div');
// let tachesCell = document.createElement('td');

// // tachesCell.setAttribute("class", "card");
// // let card = tachesCell .getAttribute("class");

// // console.log(card);

// // tachesCell.textContent = tache;
// // tachesRow.appendChild(tachesCell);
// // listeTaches.appendChild(tachesRow);
// Créer un champ qui va saisir la donnée du pays 
// saisir un champ pour chercher l'API  =50% du trav
//PUIS ttement des données →  .filter ; data ~= tableau . 


let divPays = document.createElement('div');
let champPays = document.createElement("input");
divPays

document.body.appendChild(champPays);
champPays.setAttribute("placeholder", " Entrez_un_nom_de_pays");


let btun = document.createElement("button");
document.body.appendChild(btn);
btun.textContent = "rechercher";

btn.addEventListener("click", () => {
  const ville = searchBarVille.value;
  const pays = searchBarPays.value;
  search(ville, pays);})



  // api call function
const api = search => {  /**  =  function api(search){*/
  fetch("http://universities.hipolabs.com/search?country="+search)
  .then(response =>  {return response.json()})
  .then(data => {(data.length > 50) ? filterUniv(data) : showUniv(data)})
  .catch(err => console.log(err))
}







/**
 * "http://universities.hipolabs.com/search?country=%22+search
fetch("http://universities.hipolabs.com/search?country=%22+search)
fetch("http://universities.hipolabs.com/search?country="+search)
data => data.length > 50
// api call function
const api = search => {
    fetch("http://universities.hipolabs.com/search?country="+search)
    .then(response =>  {return response.json()})
    .then(data => {(data.length > 50) ? filterUniv(data) : showUniv(data)})
    .catch(err => console.log(err))
}
function api(search){
 */