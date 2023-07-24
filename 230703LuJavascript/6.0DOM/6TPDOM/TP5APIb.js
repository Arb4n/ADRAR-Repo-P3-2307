/**
 * DES URLS INTERESSANTES>>
 * 
 * Nicolas — Aujourd’hui à 10:00
https://api.openweathermap.org/data/2.5/weather?appid=%22cl%C3%A9 api"&q="ville"&units"metrics"
[10:01]
https://api.openweathermap.org/data/2.5/weather?appid=cl%C3%A9api&q=%22ville%22&units=metrics

Yasmine — Aujourd’hui à 10:21
https://api.betaseries.com/search/movies?text=avatar&key=
NOUVEAU

Nicolas — Aujourd’hui à 11:14
Recherche par film: https://api.betaseries.com/movies/movie?id=266&key=
[11:14]
Les plus populaires: https://api.betaseries.com/movies/discover?type=popular&key=
[11:15]
Recherche toutes catégories confondues: https://api.betaseries.com/search/all?query=avatar&key=
 */


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

// !! pour cibler, faire une reqt 
// en fonction de parametres
//




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
.Filter pour filtrer les données 
*/


// Créer un champ qui va saisir la donnée du pays 
// saisir un champ pour chercher l'API  =50% du trav
//PUIS ttement des données →  .filter ; data ~= tableau . 

/**
// check elements dupliques
// filtrer elements du dom
affichage de données

*/











/**
 * 
 * BEDFLIX>>
 * 
 * 
 * 

 * 
 * Barre nav : 
 *      page vers series
 *      page vers films
 *      page avec liste de sélection
 *      search bar, vers page de resultats*
 *      page de connection
 *      
 * 
 *  * banner image de fonds aléatoire / hero banner aleatoire
 *  * carousel qui va generer aleatoirement des films* 
 *  *                generer aleatoirement des series*
 */