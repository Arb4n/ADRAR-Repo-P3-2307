// Écrire une fonction f1 qui ne prend rien en entrée, 
// et qui affiche 17 dans la console.

// Utiliser la fonction f1 pour afficher 17 dans la console.
console.log("Ex1");

function f1() {
    console.log(17);
}
f1();

console.log("👌");
// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.
console.log("Ex2");

function f2() {
    return 18; 
}

// Utiliser la fonction f2 pour afficher 18 dans la console.

console.log(f2());

console.log("👌");

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir
// par rapport à f1 ?

/* On peut imaginer qu'on pourrait appeler une variable individuellement dans
l'entrée de f2() dans console.log
On peut utiliser return pour fermer la fonction, éventuellement.    // meeeh pas ouf comme rep
*/ 


/* Correc :

F1>> 
On a notre boîte noire F1 ; on doit 
afficher 17 dans la console. 
console.log suffit, mais on veut 
créer un outil qui le fera. 
>> Point de vue interne <<
    On crée une fonction qui ne prend 
    rien en entrée. 
    On a une fonction, 
    son nom est f1, et son corps
    indique ce qu'elle fait. 
Pour le moment on n'a rien, 
mais on a créé un robot qui est 
capable de le faire. Il 
faut juste lui demander. 
>> Point de vue externe <<
    On veut afficher 17, une fonction 
    a été créée pour ; comment ?
    GO 
    On appelle f1 :
    c>> 
    f1();
    c<< 
    et on a bien le 17 affiché
_____
_____

F2>> 
écrire la fonction 
rien en entrée
retourne 18
c>>
function f2() {
    return 18
}
c<<

l'utiliser pour afficher 18 in console. 

[...]

Pourquoi moins pratique ? 
Plus d'étapes. 
MAIS 
elle est plus souple.
permet plus de libertés. 
SI on veut faire de l'affichage, 
f1 suffit. 
Mais si on veut faire auter chose
comme répéter 18 fois une certaine action,
avec une fonction qui me renvoie 
une valeur, on peut le faire. 
On ne pourra pas faire grand chose 
avec f1 à part afficher 17. 


*/  



// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
// Utiliser la fonction f3 pour écrire dans la console le double de 98.
console.log("Ex3");

function f3(a3) {
    console.log(a3*2);
}
f3(98);


console.log("👌");



/* 
>> Correc f3 << 

On écrit une fonction qui a un nom en entrée. : 
c>> 
function f3 (n) {
    console.log(2*n);
}



*/
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
// INTERNE
console.log("Ex4");

function f4(a4) {
    return (a4*2);
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
// EXTERNE

console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.

let a = f4(99); 
console.log(a);


console.log("👌");
// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
console.log("Ex5");

function f5(a,b) {
    let result = a+b; 
    console.log(result);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 41 et 77.

f5(41, 77);

console.log("👌");

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
console.log("Ex6");

function f6(a, b) {
    let result = a+b;
    return result; 
}


// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.

console.log(f6(42, 77));


// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
// a+=f6(a1,b);
// console.log(a);

// a += f6(42, 77);
// a = a + f6(42, 77);
a = f6(a, f6(42,77));

// !!!! ⬆⬆⬆ a !=f6(a)

console.log("La variable a contient", a);

console.log("🤔")


// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
console.log("Ex7");

function f7 (a, b){
    if (a>b) { 
         return a; 
    } else {
        return b;
    }
    
}

console.log(f7(4, 7));

console.log("🤘");

// Écrire une fonction f8 qui prend trois nombres 
// en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : 
// sans utiliser f7, et en utilisant f7).
console.log("Ex8");


function f8 (a, b, c) {
    if (a > b && a > c) {
        return a;  
    } else if (b > a && b > c) {   
        // on peut se passer de b > a, 
        // la condition est remplie avant avec else
        return b;
    } else {
        return c;
    }
}

console.log(f8(4,8,10));


console.log("OU") ; 


function f8b(a,b,c) {
    if(a>b) {
        return a
    } else if (b>c){
        return b 
    } else {
        return c;
    }
        
    
}

console.log(f8b(5,6,7)); 



console.log("OU") ; 


// En utilisant la fonction précédente f7

//  !!! je ne peux pas mettre 
// >> f7(a, b, c); << , f7 n'ayant que 
// deux variables déclarées. 


function f8c(a, b, c) {
    if ( f7()>c){
        return f7(a,b,c);

    } else {
        return c; 
    }
}


console.log(f8c(7,4,8));


//  !!!!! MAIS !!!!
// Problème ? Temps de calcul 
// Complique les opérations : 2 opérations pour rien 
//  Penser : pour évier de refaire le calcul, 
// mémoriser l'info /résultat dans une  variable
// qui est la petite case mémoire


function f8c(a, b, c) {
    if ( f7()>c){
        return f7(a,b,c);

    } else {
        return c; 
    }
}


console.log(f8c(7,4,8));



console.log("🤘");

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console 
// ce mot ce nombre de fois.
console.log("Ex9");

function f9 (a,b) { 
    for (let i = 0; i < a; i++ ) {
    console.log(b);
    }
}

// console.log(f9(4, "hello"));  >> un console.log en trop !!!
f9(4, "hello");

// Là on a utilisé une boucle FOR dans la fonction,
// comme dans pika.
// 


console.log("🤘");



/*
_______________________
________________________

// Écrire une fonction f1 qui ne prend rien en entrée, 
et qui affiche 17 dans la console.
// Point de vue interne
function f1() {
    console.log(17);
}

// Utiliser la fonction f1 pour afficher 17 dans la console.
// Point de vue externe
// J'appelle f1 :
f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.
// Point de vue interne
function f2() {
    return 18;
}

// Utiliser la fonction f2 pour afficher 18 dans la console.
// Point de vue externe
console.log(f2());
console.log(17+2);

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
// La fonction f1 est spécialisée pour faire de l'affichage, alors que la fonction f2 permet plus de libertés.
// Si on veut faire de l'affichage, f1 est plus simple à utiliser, mais on peut s'en sortir avec f2.
// Si on veut faire autre chose que de l'affichage, on ne peut pas avec f1.



// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n) {
    console.log(2*n);
}

// Utiliser la fonction f3 pour écrire dans la console le double de 98.
f3(98);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n) {
    return 2*n;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));

// Afficher dans la console le résultat de l'appel de f4 auquel j'ai donné la valeur 99

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);
// Pour vérifier que la variable a contient la bonne valeur :
console.log("La variable a contient", a);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(n1, n2) {
    console.log(n1+n2);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 41 et 77.
f5(41, 77);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(n1, n2) {
    return n1+n2;
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42, 77))

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
// a += f6(42, 77);
// a = a + f6(42, 77);
a = f6(a, f6(42,77));


console.log("La variable a contient", a);


// Écrire une fonction f9 qui prend un nombre et un mot en entrée, 
et qui affiche dans la console ce mot ce nombre de fois.

// Si je le faisais à la main, sans fonction
// let n = 12;
// let word = "Clavier";

// for(let i = 0 ; i < n ; i++) {
    // console.log(word);
// }

function f9(n, word) {
    for(let i = 0 ; i < n ; i++) {
        console.log(word);
    }
}


// Test de f9
f9(25, "Bonjour");
f9(0, "Au revoir");
f9(2545, "Maison");
f9(7, "Azerty");




// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

console.log("Tests f7");
console.log(f7(5,10));
console.log(f7(10,5));

__________________


// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(n1, n2, n3) {
    if(n1 > n2) {
        if(n1 > n3) {
            return n1;
        } else {
            return n3;
        }
    } else {
        // n1 n'est pas plus grand que n2
        if(n2 > n3) {
            return n2;
        } else {
            return n3;
        }
    }
}

console.log("Tests f8");
console.log(f8(5,10,15));
console.log(f8(5,15,10));
console.log(f8(15,10,5));

function f8Bis(n1, n2, n3) {
    if(n1 >= n2 && n1 >= n3) {
        return n1;
    } else if(n2 >= n1 && n2 >= n3) {
        return n2;
    } else {
        return n3;
    }
}

console.log("Tests f8Bis");
console.log(f8Bis(5,10,15));
console.log(f8Bis(5,15,10));
console.log(f8Bis(15,10,5));

function f8Ter(n1, n2, n3) {
    let maxN1N2 = f7(n1,n2);
    if(maxN1N2 > n3) {
        return maxN1N2;
    } else {
        return n3;
    }
}

console.log("Tests f8Ter");
console.log(f8Ter(5,10,15));
console.log(f8Ter(5,15,10));
console.log(f8Ter(15,10,5));

function f8Quater(n1, n2, n3) {
    // let maxN1N2 = f7(n1,n2);
    // return f7(maxN1N2, n3);
    
    return f7(f7(n1,n2), n3);
}

console.log("Tests f8Quater");
console.log(f8Quater(5,10,15));
console.log(f8Quater(5,15,10));
console.log(f8Quater(15,10,5));



*/