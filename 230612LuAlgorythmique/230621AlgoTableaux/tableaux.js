// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.

// let arr = [14, 25, 36, -1, 12.3456];

// console.log(arr);


let tab1 = [ 144,202, 216, 216, 222, 64]; 
console.log(tab1); 

// 2) Ajouter le nombre 0 à la fin du tableau tab1.

tab1.push(0);
console.log(tab1);


// 3) Afficher *un par un* tous les éléments du tableau tab1.



console.log(tab1[0]);
console.log(tab1[1]);
console.log(tab1[2]);
console.log(tab1[3]);
// etc. 

for (let i = 0; i < tab1.length; i++) {
  console.log(tab1[i]);
}



console.log(tab1);
// 4) Retirer le dernier élément du tableau tab1.

tab1.pop();
console.log(tab1);


// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.

let tab2 = [238, 222, 228, 216, 200];


// 6) Ajouter le nombre 58 à la fin de tab2.

tab2.push(58);
console.log(tab2);


// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.

// let tab1 = [144, 202, 216, 216, 222, 64];
// let tab2 = [238, 222, 228, 216, 200];

// for (let i = 0; i < tab2.length; i++) {
//   tab1.push(tab2[i]);
// }

// console.log(tab1);

console.log("Exo7");

// tab1.push( tab2[0] ); 
// tab1.push( tab2[1] ); 
// tab1.push( tab2[2] ); 
// tab1.push( tab2[3] ); 
// tab1.push( tab2[4] ); 
// tab1.push( tab2[5] ); 

for (let i =0; i < tab2.length; i++ ) {
    tab1.push(tab2[i]);
} 

console.log(tab1);

// 8) Afficher *un par un* tous les éléments du tableau tab1.
console.log("Exo8");


for (let i = 0; i<tab1.length; i++){
    console.log(tab1[i])
}


// 9) Retirer et stocker dans la variable maVariable 
// le dernier élément du tableau tab1.
console.log("Exo9");

let maVariable = tab1.pop(); 

console.log(maVariable);

// 10) Afficher la taille du tableau tab1.
console.log("Exo10");

console.log(tab1.length);


// 11) Ajouter le nombre 66 à la fin du tableau tab1.
console.log("Exo11");

tab1.push(66);

console.log(tab1);


// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.
console.log("Exo12");

for (i = 0 ; i < tab1.length ; i++) {
    tab1[i] /= 2; 
}
console.log(tab1);


console.log("Exo13");
// 13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes de code suivantes :
console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
// (On ne cherchera pas à comprendre ça)


/*


Correc>> 


// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.
let tab1 = [144, 202, 216, 216, 222, 64];

// 2) Ajouter le nombre 0 à la fin du tableau tab1.
tab1.push(0);

// 3) Afficher *un par un* tous les éléments du tableau tab1.
console.log(tab1[0]);
console.log(tab1[1]);
console.log(tab1[2]);
console.log(tab1[3]);
console.log(tab1[4]);
console.log(tab1[5]);
console.log(tab1[6]);

// 4) Retirer le dernier élément du tableau tab1.
tab1.pop();

// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.
let tab2 = [238, 222, 228, 216, 200];

// 6) Ajouter le nombre 58 à la fin de tab2.
tab2.push(58);

// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.
// tab1.push(   tab2[0]   ); // J'ajoute à la fin de tab1 la case numéro 0 de tab2
// tab1.push(tab2[1]);
// tab1.push(tab2[2]);
// tab1.push(tab2[3]);
// tab1.push(tab2[4]);
// tab1.push(tab2[5]);

for(let i = 0 ; i < tab2.length ; i++) {
    tab1.push(tab2[i]);
}

// 8) Afficher *un par un* tous les éléments du tableau tab1.
for(let i = 0 ; i < tab1.length ; i++) {
    console.log(tab1[i]);
}
// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

Afficher plus
tableaux2.js
2 Ko
Pierre — Aujourd’hui à 12:00
On continue la correction ?
Pierre — Aujourd’hui à 12:11
// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.
let maVariable = tab1.pop();

// 10) Afficher la taille du tableau tab1.
console.log("Le premier tableau contient", tab1.length, "cases.");

// 11) Ajouter le nombre 66 à la fin du tableau tab1.
tab1.push(66);

// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.
for(let i = 0 ; i < 12 ; i++) {
    tab1[i] = tab1[i] / 2;
}



*/
