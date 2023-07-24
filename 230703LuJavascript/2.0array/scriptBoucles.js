// LES BOUCLES


// permet de factoriser son code = réduire la longueur / poids
// et répéter l'action plusieurs fois. 

//BOUCLES FOR

// for (expression initiale ; condition ; incrément) {
//     instruction
// }
let liste_fruits = ["banane", "poire", "pomme", "abricot", "cerise"];
// for (let i= 0 ; i < liste_fruits.length; i++) {
//     console.log(list.liste_fruits[i]);
// }

// EXO Vous avez un tab avec des nombres de 1 à 10,
// afficher dans la console les nombres pairs
// Ajouter la somme des nombres pairs

let result = 0;
for (let i=0 ; i <= 10; i++) {
    if ( i%2==0) {
    console.log(i);
    // result+=i%2;
    }
    // console.log(result);
}


let sum = 0; 
for (let i = 0; i<= 10 ; i++) {
    if(i%2 === 0) {
        console.log(i);
        sum+= i;
    }
}
console.log( "La somme des pairs est : " + sum);


// BOUCLES WHILE
// while (condition) { // tant que 
//     // code... 
// }

// let nb = 0;
// while(j<3) {
//     console.log(n);
//     nb++;
// }
    // Si on a une condition à remplir et on veut boucler 
    // en fonction de cette condition, utiliser while. 


// EXO permettre à l'utilisateur de saisir un nombre et 
// lui retourner la table de multiplication de ce nombre : 
/*
let nombre = prompt("Entrez un nombre");
fois=0;
console.log("Table de " + nombre);
while (fois <=15){
// nombre *= fois;
    console.log(nombre + " x "+ fois);
    console.log(nombre*fois);
    fois++;
    
}
*/



// Trouver le premier nombre divisible par 7, 9, 13 en partant de 1
let divisible = 1;
while (!(divisible%7 == 0 && divisible%9 == 0  && divisible%13 == 0 )) {
    divisible++; 
    
}
console.log(divisible);



// FOR ... OF
// Parcourt le tableau mais directement dans ses éléments. 
// let liste_fruits = ["banane", "poire", "pomme", "abricot", "cerise"]; cf. l.16
for (let fruit of liste_fruits) {
    console.log(fruit);
}

// FOR ... IN
// for (let element in object) {
//     console.log(element + ": " + object[element]);
// }

//  EXO Créer un tableau de contact: 
// Exemple
// let users = [
//     { 
//         "nom": "Toto"
//         "prenom": "Jojo"
//         "adresse": "85 Av de Momo"
//         "age": 12
//         "mail": [mail1, mail2]
//     }
//     {

//     }
// ]

// afficher le mail 2 de chaque utilisateur avec son nom devant.

let users = [ 
    {"nom": "Toto", "prenom": "Jojo", "adresse":
"85 Av de Mo", "age": 12, 
"mail": ["toto.jojo@live.con", "tojo11@gmel.fre"]},
    {"nom": "Tata", "prenom": "Jaja", "adresse":
"12, rue des Tululu", "age": 16, 
"mail": ["tata.jj@live.con", "ttaja11@gmel.fre"]}
]
for (let user of users) {
    console.log(user);
}

// console.log (`Je veux savoir ${users} comment ${users} ${users}`) 
// C'est comme ça qu'on se sert des backticks pour gagner du temps. 

//  ___________________________________________________________________
//________________________________________________________________


// ***  W3SCHOOL    ***

const ages = [32, 33, 16, 40];

document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}



// Return the values in ages[] that are over a specific number:

function checkAge(age) {
    return age > document.getElementById("ageToCheck").value;
  }
  
  function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAge);
  }