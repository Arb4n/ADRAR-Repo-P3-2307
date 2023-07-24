// throw et try...catch

// try{

// throw new Error("Il y a une erreur");

// }catch (err){
//     console.error(err);
// }

// function division(number1, number2){
//     try{
//         if(number2 === 0){
//             throw new Error("Division par zéro impossible")
//         }
//         let result = number1 / number2;
//         console.log(result);
//     }catch(err){
//         console.error(err);
//     }
// }

// division(10, 2)
// division(8, 0)

/**
 * Gestion d'un tableau vide
 * Ecrivez un fonction qui prend en argument un tableau et
 * renvoie le premier élément de ce tableau. Si le tableau 
 * est vide, la fonction doit générer une erreur.
 */



// let tabError = ["", "", "", "", "", "",];

// class tabTryCatch {
//     constructor(tabError) {
//         this.tabError = tabError;
//         try{
//             if(number2 === 0){
//                 throw new Error("Division par zéro impossible")
//             }
//             let result = number1 / number2;
//             console.log(result);
//         }catch(err){
//             console.error(err);
//         }
//     }
    
// } NOOOOOOOOOPE !!!



/** // Une fonction qui affiche le 1er élément d'un tab
Attend un tableau
lance le if sur la length ; si le tab esy libre, renvoie une erreur.
Else, on return le 1er élément du tab. 
Et là, dans catch, un petit log error de l'erreur.

*/

// CORREC>>

function affichePremierElement(tableau){
    try {
        if(tableau.length === 0){
            throw new Error("Tableau vide ! ");
        }
        return tableau[0];
    }catch(e){
        console.error(e);
    }
}



/**
 * Gestion propriété inexistante
 * Ecrivez un fonction qui prend en argument un objet et 
 * une clé, elle renvoie la valeur de la propriété.
 * Si la clé n'existe pas, la fonction génère une erreur.
 */


/**
 * On a un objet de base 
 * une fonction va afficher la propriété
 * le ! pour vérifier si la propriete est dans l'objet.
 * OU>> for in pour un algoboss comme Steve 
  */

const objet = {
    nom: "Toto",
    age: 38
}
function affichePropriete(objet, propriete){
    try{
        if(!(propriete in objet)){
            throw new Error("Pas de propriété ?!");
        }
        return objet[propriete];
    }catch(e){
        console.error(e);
    }
}

console.log(affichePropriete(objet, "nom"));
console.log(affichePropriete(objet, "prenom"));


/**
 * const objet = {
    nom: "toto",
    age: 38
}

// for(let propriety in objet){
//     console.log(`${propriety} : ${objet[propriety]}`);
//     // nom: toto 
// }

function affichePropriety(objet, propriete){
    try{
        if(!(propriete in objet)){
            throw new Error("Propriete inexistante");
        }
        return objet[propriete];
    }catch(e){
        console.error(e);
    }
}

console.log(affichePropriety(objet, "nom"));
console.log(affichePropriety(objet, "prenom"));

 */