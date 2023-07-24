
// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
console.log("Exercice 1");
for(let i = 0 ; i < 50 ; i++) {
	console.log("Bonjour");
}


// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B

// TODO
console.log("Exercice 2");


for(let i = 0 ; i < 5 ; i++) {
    console.log("A");
    console.log("B");
}
// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
console.log("Exercice 3");
// DONE
for (let i=0 ; i<3 ; i++ ) {
    for (let i=0 ; i<5 ; i++ ) {
    
        console.log("A");
    } 
    console.log("B");
}




// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4");
// DONE
for (let j=0 ; j<10 ; j++) {
    console.log(j);
}


// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
console.log("Exercice 5");
// DONE

for (let k=3 ; k<13; k++)  {
    console.log(k); 
}

// OR
console.log("OU")

k2=3;
for (let k1=0 ; k1<10 ; k1++) {
    console.log(k2);
    k2++;
} 

console.log("OU")

for(let k3 = 0 ; k3 < 10 ; k3++) {
    console.log(k3 + 3);
}


// Exercice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6");
// DOOOOOOOOOOOOOOONE!!!!!!!!!!!!!!!!!!!!!!

for(let l = 0 ; l < 10 ; l++) {
        console.log(l%4);
}
console.log(1%4)
// // for(let l = 0 ; l < 10 ; l++) {
//     console.log(l%4)

//     // for(let l1 = 0 ; l1 < 4 ; l1++) {

//     //     console.log(l1);
//     // }
//     // console.log(l)
//     // while ()
// //     if (l1=1) {
// //         l=true; 
// //     }
// }
// let i = 0;
// let nbDeUn = 0;
// while (true) {
//     i++;
//     console.log(i % 4);
//     i++;
//     if (i == 1) {

//     }

//     let nbDeI = 0;
//     let cpt = 0;

//     while (nbDeI < 3) {
//         console.log(cpt);
//         cpt++;

//         if (cpt == 1) {
//             nbDeI++;
//         }

//         if (cpt == 3) {
//             cpt = 0;
//         }
//     }
// }





// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");
// DONE mais

// for (m = 0 ; m < 10 ; m++){
//     while (m= 5, m=6, m=7) {
//         console.log("A"); 
//     }
//     else{
//     console.log(m);
//     }
// }

// for (let l3=0 ; l3 < 10 ; l3++) {
//     console.log(l3)
// }

for (let m = 0 ; m < 10 ; m++){
        if (m>4 && 8>m) {
            console.log("A"); 
        }
        else {
            console.log(m);
        }
       
        // console.log(m);
    }


/*
Correctiun :

Correc1>> On peut séparer la suite en trois parties : 
de 0 à 4, de 5 à 7 avec les "A", de 9 à 9. 

for (let i = 0 ; i < 5 ; i++) {
    console.log (i);
}
for (let i = 0 ; i < 5 ; i++) {
    console.log ("A");
}
for (let i = 8 ; i < 10 ; i++) {
    console.log (i);
}

______
console.log("exercice 7 - Correction 2"); 

première partie : 
ça va nous donner 1 A 2 A 3 A etc. 

for (let i=0 ; i < 10 ; i++) {
??? 
On sépare en deux conditions, on associe deux if else. 

for (let i=0 ; i < 10 ; i++) {
    if(i<5) {
        console.log(i)
    }
    else {
        if(i>7) {
            console.log(i);
        }
        else {
            console.log("A"); 
        }
    }
}
 !!!! pour la lisibilité, on préfère aligner les else. 
au-dessus ---->  
for (let i=0 ; i < 10 ; i++) {
    if(i<5) {
        console.log(i)
    } else if(i>7) {                  // en python, elif remplace else if 
            console.log(i);
    } else {
            console.log("A"); 
        }
    }
}

console.log (" exercice 7 - Correction 3 ");

Voir une table de vérité, logique booléenne. 

BOOLEEN, CONDITION QU'ON VIENT D'AJOUTER, ON 
MELANGE LES DEUX CONDITIONS ; SI UNE 
DES DEUX PARTIES = VRAIE, CONDITION VRAIE  
cf. lois de deMorgan
Il faut que i soit plus petit que 5 ou grand que 7 
|| = OU
for (let i=0 ; i<10; i++) {
    if (i<5 || i>7) { //cas1 ou cas2?
    console.log(i);
    } else {
        console.log("A");
    }
}

console.log("OU"); 


for (let i=0 ; i<10; i++) {
    if (i<5 && i>7) { //cas1 ou cas2?
    console.log(i);
    } else {
        console.log("A");
    }
}


___

console.log("Exercice 7 - Correc Prof :");



console.log("Exercice 7");
// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// console.log("A");
// console.log("A");
// console.log("A");

// console.log(8);
// console.log(9);

for(let i = 0 ; i < 5 ; i++) {
    console.log(i);
}

for(let i = 0 ; i < 3 ; i++) {
    console.log("A");
}

for(let i = 8 ; i < 10 ; i++) {
    console.log(i);
}

console.log("Exercice 7 bis");
for(let i = 0 ; i < 10 ; i++) {
    if(i < 5) {
        console.log(i);
    } else {
        if(i > 7) {
            console.log(i);
        } else {
            console.log("A");
        }
    }
}

console.log("Exercice 7 ter");
for(let i = 0 ; i < 10 ; i++) {
    if(i < 5) {
        console.log(i);
    } else if(i > 7) {
        console.log(i);
    } else {
        console.log("A");
    }
}

console.log("Exercice 7 quater");
for(let i = 0 ; i < 10 ; i++) {
    if(i<5 || i>7) { // cas1 ou cas2
        console.log(i);
    } else {
        console.log("A");
    }
}

console.log("Exercice 7 quinquies");
for(let i = 0 ; i < 10 ; i++) {
    if(i>4 && i<8) { // i est compris entre 4 et 8
        console.log("A");
    } else {
        console.log(i);
    }
}




console.log("et encore plusieurs cas en exemple : ");


if( cas 1 ) {
    // Code
    // du premier cas
} else if( cas 2  ) {
    // Code
    // du deuxième cas
} else if(cas 3 ) {
    // Code
    // du troisième cas
} else { // Cas par défaut
    // Code
    // du quatrième cas
}

*/




// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");
// DONE

for (let n = 0 ; n < 10 ; n++) {
    if (n%3 ==0) {
        console.log(n+100);
    }
    else { 
        console.log(n);
    }


}

// console.log(100);   // Starting number

// for (let n = 1; n <= 9; n++) {
//   if (n % 3 == 0) {
//     console.log(n + 100);   // Adding 100 to multiples of 3
//   } else {
//     console.log(n);
//   }
// }



/* 
_______
CORRECTION EXERCICE 8 

Un truc qui tourne en rond 
= un modulo !! 

onsole.log("Exercice 8");
for(let i = 0 ; i < 10 ; i++) {
    if(i%3 == 0) { // i est un multiple de 3 ; i est égal à 3*? + 0
        console.log(i+100);
    } else {
        console.log(i);
    }
}

console.log("Exercice 8 bis");
for(let i = 0 ; i < 10 ; i++) {
    if(i%3 != 0) { // i n'est pas un multiple de 3
        console.log(i);
    } else {
        console.log(i+100);
    }
}

*/

// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9



/* 




*/
console.log("Exercice 9");
// TODO
for (let o = 0 ; o < 10 ; o++) {
    if (o%2 !=0) {
        console.log(o+100);
    }
    else if (o%3 !=0) {
        console.log(o+200);
    }
    
    else { 
        console.log(o);
    }


}


for (let i = 0; i <= 9; i += 3) {
    console.log(i);
    console.log(i + 101);
    console.log(i + 202);
  }




  /* 
  
  console.log("Exercice 9");
for(let i = 0 ; i < 10 ; i++) {
    if(i%3 == 0) { // i est un multiple de 3
        console.log(i);
    } else if(i%3 == 1) { // i est un multiple de 3 + 1
        console.log(i+100);
    } else {
        console.log(i+200);
    }
}

console.log("Exercice 9 bis");
for(let i = 0 ; i < 10 ; i++) {
    console.log(i + (i%3)*100);
}
  
  

CORRECTION EXERCICE 9 

On réutilise ce qu'on a mis dans l'exercice 7 : on a 3 cas différents ; 
si on utilise le 1er cas, on fait tel, 
si on est dans le 2eme, on fait l'autre, et 3ème. 


les 101 104 107 sont les multiples 
de 3 plus 1 !!!!! 




OU 





  */ 
// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dés :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6



console.log("Exercice 10");
// TODO



    for (let e10 = 1 ; e10 < 7 ; e10++) {
    console.log (e10 + " " + e10);

}

// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");
// TODO

// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");
// TODO

// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");
// TODO

// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");
// TODO

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
// TODO

// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");
// TODO

// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");
// TODO

// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");
// TODO

// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
console.log("Exercice 19");
// TODO

// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/
console.log("Exercice 20");
// TODO

// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
console.log("Exercice 21");
// TODO

// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");
// TODO

// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
// TODO