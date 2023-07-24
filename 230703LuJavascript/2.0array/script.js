/* TABLEAUX */

let list_number = [5, 9, 3, 8];
let liste_fruits = ["banane", "poire", "pomme", "abricot", "cerise"];

console.log(list_number[2]);
console.log(liste_fruits[3]);

let tab_multi = [5, "Coucou", true, [25, 'age', 'male']]; // récup la valeur cible

console.log(tab_multi[3][2]); // récupère la valeur cible

tab_multi[3][0] = 35; // modif la val cible
console.log(tab_multi);
console.log(list_number.length); // connaître la longueur du tableau

let superhero = "batman, wonderwoman, Flash, Hulky"; 
superhero = superhero.split(','); // transforme un string en array 
// superhero = superhero.split('wonderwoman'); // transforme un string en array 
//en excluant la , 
console.log(superhero);

superhero = superhero.toString(); // array en string
console.log(superhero); 

// AJOUTER, MODIFIER
liste_fruits.push("fraise"); // add fraise à la fin du tab
console.log(liste_fruits);
liste_fruits.pop(); // supprime le der élément du tab
console.log(liste_fruits);
// shift et unshift font la même 
//pour le début du tab

console.log(liste_fruits.indexOf("poire")); 


// EXO 
// Réaliser un script
// qui permet d'ajouter un élément dans un tab 
// en fonction de la valeur saisie par l'user.
// Il pourra choisir de le mettre au début ou à la fin.
//      == 
// créer un tab 
// dmd à l'user d'y ajouter qque chose
// lui demander si il veut l'ajouter en début ou en fin du tab.

let array = ["a1", "a2", "a3"]; 
let valeur1 = prompt("écrivez quelque chose");
let place = prompt("Souhaitez-vous l'ajouter au début ou à la fin du tableau ? d ou f");
let continuer = prompt("Continuer? "); 

// for ()
if (place=="d") {
    array.unshift(valeur1);
} else if (place=="f"){
    array.push(valeur1);
} else {
alert(place);
}
alert(array);




// tableaux associatifs / objet littéral
let object = {"un": 1, "deux": 2, "trois": 3};
// il associe une clef à une valeur (!!! avec des '{}')
console.log(object.trois);


// LES BOUCLES >> 