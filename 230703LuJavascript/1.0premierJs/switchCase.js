// LA CONDITION SWITCH CASE
// switch (true) {
//     case age == 18:
//     console.log("la majorité"); 
//     break;
//     case age > 67: 
//     console.log("vieux");
//     break; 
// }
// // Permet de préciser plus la condition, code plus rapide. 

// C>>
// let fruit ="pasteque";
//  switch (fruit) {
//     case 'poire' : 
//     alert("c'est une poivre");
//     break;
//     case 'pomme': 
//     alert("c'est une promme");
//     break;
//     default : 
//     alert("fruit inconnu au batailon");
//  }
// C<<

//  Exercice mélange de couleurs : 
// Réaliser un script qui permet de mélanger deux couleurs en fonction
// de ce que l'utilisateur saisit.
// Exemple : blue et rouge = violet


let couleur1 = prompt("Veuillez saisir une première couleur primaire");
let couleur2 = prompt("Veuillez saisir une deuxième couleur primaire");
let couleur = couleur1 + couleur2;
// switch (couleur) {
//     case couleur = 'blue' + 'red' || 'red' + 'blue':
//         console.log("purple");
//     break; 
//     case couleur = 'blue' + 'yellow' || 'yellow' + 'blue':
//         console.log("green");
//     break;
//     case couleur = 'blue' + 'blue':
//         console.log("blue");
//     break;
//     case couleur = 'red' + 'yellow' || 'yellow' + 'red':
//         console.log("orange");
//     break;
//     case couleur = 'red' + 'red':
//         console.log("red");
//     break;
//     case couleur = 'yellow' + 'yellow':
//         console.log("yellow");
//     break;
// default: 
// alert("ceci n'est pas une des trois couleurs primaires")
// }


if (couleur = "orange" + "red") {
    console.log("redish");

} else {
    console.log("NO");
}

// Correc
// déclarer variables !!
if((couleurUtilisateur1 == "Rouge" && couleurUtilisateur2 == "Bleu")  (couleurUtilisateur1 == "Bleu" && couleurUtilisateur2 == "Rouge")){
    console.log("Violet");
} else if((couleurUtilisateur1 == "Jaune" && couleurUtilisateur2 == "Bleu")  (couleurUtilisateur1 == "Bleu" && couleurUtilisateur2 == "Jaune")){
    console.log("Vert");
} else if((couleurUtilisateur1 == "Rouge" && couleurUtilisateur2 == "Jaune") || (couleurUtilisateur1 == "Jaune" && couleurUtilisateur2 == "Rouge")){
    console.log("Orange");
} else{
    console.log("ARRETE D'ECRIRE DE LA MERDE PUTAIIIIIIIIIIIIIIIN");
}