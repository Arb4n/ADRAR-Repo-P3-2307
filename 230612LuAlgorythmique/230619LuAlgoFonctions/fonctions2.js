console.log ("__  fonctions2  __");



/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
console.log("code_name:syracuse"); 

function syracuse(nombre) {
    if (nombre%2!=0) {
        return nombre*3+1; 
    }
    else {
        return nombre/2; 
    }
}

console.log(syracuse(41));
console.log(syracuse(6));

console.log("🤘");

/*
Écrire une fonction countDown qui reçoit un nombre positif en entrée, 
et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countDown(3)` devra afficher
3
2
1
0
*/
console.log("code_name:countDown"); 

function countDown (nb) {
    for (let i = nb; i >= 0; i--) {
        console.log(i); 
    }
}

countDown(3); 

console.log("🤘");

/*
Écrire une fonction fastCountDown qui reçoit un nombre en entrée et qui affiche 
un compte à rebours en partant de cette valeur. 
La valeur sera divisée par 2 à chaque fois, 
et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountDown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/

console.log("code_name:fastCountdown"); 

function fastCountDown (nb) {
    for (let i = nb; i >= 0.1; i/=2) {
        console.log(i); 
    }
}

fastCountDown(3); 

console.log("🤘");

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées 
et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
console.log("code_name:evenNumbers"); 

function evenNumbers(a, b) {
    // for (let i = 0 ; a> i < b || a > i < b; i++){
    
    for (let i = a ; i < b ; i++) {
        if (i%2 == 0) {
            console.log(i);
        }
    }
        
    
}

evenNumbers(5,14); 

/*
Sur la page wikipedia du PGCD 
(pas besoin de savoir ce que c'est), 
on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/

console.log("code_name:euclide"); 

function euclide(a,b) {
    if (b==0){
        return a;
    } else { 
        return euclide(b, a%b);
    }
}

console.log(euclide(6,10));
console.log(6%10);

/*
À la main, calculer `euclide(6,10)`.
*/

/*
indice : c'est une fonction récursive
C'est-à-dire : elle s'appelle elle-même.
En effet, dans son else, pour réaliser le but 
d'obtnir le PGCD, elle va intéragir avec 
ses propres variables : pour arriver 
à faire ressortir le pgcd gcd, on remplace a 
par b, et b par a modulo b. 



Pour commencer, on appelle la fonction qu'on nomme euclide,
avec une entrée entre parenthèses.
On crée dans cette entrée les variables a et b pour les rattacher 
à cette fonction . 
on cherche à obtenir le plus grand diviseur commun entre 
les deux valeurs des variables.
Dans le corps de la fonction, entre les accolades, on va 
donc établir une condition : si (if) b est égal à 
0, la valeur rendue est a, car on ne pourra pas diviser 0.
Autrement, on programmera la fonction 
pour retourner un remplacement de a par b 
et un autre de b par a modulo de b. 




*/