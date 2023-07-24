console.log(" - TABLEAUX 2 - ");


console.log("E2-1");
// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
let tab = [10, 20, 3];

function ftab(){
    // tab3 = [1, 2, 3];  // !!!!! non non non 
    console.log(tab[2]);
} 

ftab(tab);




/*
Début de correction de tableaux2.js :
// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function displayLast(t) {
    let indexOfLastCell = t.length - 1;
    console.log(t[indexOfLastCell]);
}



*/

console.log("correction");

function displayLast(t) {
    let indexOfLastCell = t.length - 1; // Cette ligne calcule l'index du dernier element dans le tableau 't'. 
    // la propriété length donne le nb d'elements dans le tab. 
    //  puisque les indices du tab commencent à zéro, soustraire 1 à la longueur donne l'index du denier élément (???).

    console.log(t[indexOfLastCell]); // passer par la variable indexOfLastCell est obligatoire pour accéder à l'intérieur du tableau. 
}

//  En exter, on peut appeler le tab. 
let t = [34, 12, 78, 34, 95];
displayLast(t);

/*




*/ 
console.log("E2-2");
// Écrire une fonction qui prend un tableau en entrée et retourne 
// le dernier élément de ce tableau.

function ftab2() {
    return tab[2];  // C'est toujours pas ça !!!
}

console.log (ftab2(tab));




console.log("Correc2");

function displayLastReturn(t){
    let indexOfLastCell = t.length - 1; 
    return t[indexOfLastCell];
}

console.log(displayLastReturn(t));


console.log("E2-3");

// Écrire une fonction qui prend en entrée un tableau 
// et qui retourne le minimum de ce tableau.

// Déclaration de tab, pour la postérité
tab = [12, 20, 3, 12, 91, 10];


// function returnMinimum(tab) {
//     // let 
//     // for (i = 0 ; i < tab.length ; i++){
//     tabMinimum = Math.min(tab.length);
//     return tab[tabMinimum];
//     // }
// }

// console.log(returnMinimum(tab));




function returnMinimum(tab) {
  return Math.min(...tab);
}


console.log(returnMinimum(tab));

console.log("😖");


function returnMini(tab) {
    let valeurMinimum = tab[0];
    for (let i = 0 ; i < tab.length ; i++ ) {
        
        if (tab[i] < valeurMinimum) { // ici aussi ! Pas 'i' ! Même si ça marchait lol. 
            valeurMinimum = tab[i];  // juste i = 0 ; cibler une valeur du tab = [i]
        }
    // return valeurMinimum -► !!! pas ici !!! Retourne index 0. 
    }
    return valeurMinimum; 
}

console.log(returnMini(tab));

console.log("🤯")

/*
function euclide(a,b) {
    if (b==0){
        return a;
    } else { 
        return euclide(b, a%b);
    }
}

console.log(euclide(6,10));
console.log(6%10);
*/
// function ftab3(a,b) {
//     b = tab[0];

//     // for (i = 0 ; i <tab.length ; i++){
//     //     console.log(tab[i]);
//         if (b==0) {
//             return a;
//         } else {
//             return ftab3(b, a%i)
//         }
//     // }
    
// }

// ftab3();


console.log("Ex2-4");
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function maximumValue(tab) {
    let maximum = tab[0] ; // tab[0] et pas [i] parce que point de départ. 
    for (let i = 0 ; i < tab.length ; i++) {
        if (tab[i] > maximum) {
            maximum = tab[i];
        }
    }
    return maximum; 
}
console.log(maximumValue(tab));


// [Plus difficile - bonus] Écrire une fonction qui prend en entrée 
// un tableau de nombres positifs et qui retourne 
// la deuxième plus grande valeur du tableau.



// Écrire une fonction qui prend en entrée 
// un tableau et un nombre et qui retourne 
// le nombre de fois que ce nombre apparaît dans le tableau.

console.log("Ex2-5");

/*
On veut une fonction qui prend en entrée un tableau + un nb. 
Simple.
La fonction doit : retourner le nb de fois qu'on voit apparaître le nombre
entré / ses occurences.

Déjà, on doit entrer un tableau et un nb dans l'entrée de la fonction. 
On va devoir parcourir le tableau utilisé.
    boucle for.
On va forcément devoir utiliser une condition : 
    par exemple, SI on lit telle valeur, on augmente le nb d'occurences ; 
    cette occurence serait donc une autre valeur, associée à une variable donnée!



*/
tab = [12, 20, 3, 12, 91, 10, 12];
let n = 12; 
function countTheNumber(tab, n) {
    let count = 0; 
    for (let i = 0 ; i < tab.length ; i++) {
        if (tab[i] == n) {   // Ne pas oublier : *! '==' !* → valeur numéraire ? 
            count++; 
        } 
    }
    return count; 
}
let occurences = countTheNumber(tab, n); // !!! créer une nouvelle variable pour intégrer la valeur de la fonction cf. ? 
console.log(occurences);


console.log("💪😆");

console.log("Exo 2-6");
// Écrire une fonction qui prend en entrée un tableau 
// et un nombre et qui retourne true si le nombre existe 
// dans le tableau, false sinon.






// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]







/*
>>> CORREC <<<

Début de correction de tableaux2.js :
// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function displayLast(t) {
    let indexOfLastCell = t.length - 1;
    console.log(t[indexOfLastCell]);
}

displayLast([1,4,-2,0]);
displayLast([10,20,30]);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnLast(t) {
    return t[t.length-1];
}

console.log(returnLast([1,4,-2,1]));
console.log(returnLast([10,20,31]));



*/