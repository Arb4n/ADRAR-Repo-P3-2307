/** 
 * Accéder à l'élément avec l'id "titre" 
 * et afficher son contenu
 * 
 * Accéder à l'élément avec l'id "paragraphe", 
 * modifie son contenu.
 * et ajoute-lui la classe "article".
 * 
 * Accéder à l'élément avec l'id "liste"
 * et affiche le nombre d'éléments
 * <li> qu'il contient, utiliser la méthode : 
 * getElementByTagName(). 
 * 
 * Parcours tous les  <li> et affiche le contenu.  
*/

let titre1 = document.getElementById("titre1");
console.log(titre1);

let parag1 = document.getElementById("pg1");
parag1.setAttribute("class", "article");
parag1.textContent = "Mon nouveau paragraphe";

let list1 = document.getElementById("list1");
let trucs = list1.getElementsByTagName("li");

console.log(`Nombre de li est de: ${trucs.length}`);


// -----------------


// Accéder à l'élément avec l'id "titre" 
//et afficher son contenu

// Accéder à l'élément avec l'id "paragraphe", 
//modifie son contenu 
//et ajoute lui la classe "article"

// Accéder à l'élément avec l'id "liste" 
//et affiche le nombre d'element 
//<li> qu'il contient, vous pour utiliser la méthode 
// .getElementsByTagName()

// Parcours tous les <li> et affiche leur contenu


let h2 = document.createElement('h2');
h2.setAttribute("id", "titre");
h2.textContent = "Mon titre";

// n'oublie pas d'ajouter l'element h2 au titre
document.body.appendChild(h2);

let titre = document.getElementById("titre");
console.log(titre.textContent);



let p = document.createElement('p');
p.setAttribute("id", "paragraphe");
p.textContent = "Un paragraphe avec p.textContent";
console.log(p.textContent)

document.body.appendChild(p)

let parag = document.getElementById("paragraphe");
parag.setAttribute("class", "article")
parag.content = "Mon nouveau paragraphe avec parag.content";
console.log(parag.content);



let listeElement = document.getElementById("list1");
let items = listeElement.getElementsByTagName("li");
console.log(`Nombre de li 1 est de: ${items.length}`);
for(let item of items){
    console.log(item.textContent);
}



// Essayer de gérer l'ordre des éléments SP1 et sp2 : échec
// https://developer.mozilla.org/fr/docs/Web/API/Node/insertBefore
// Crée un nouvel élément simple de type <span>
let sp1 = document.createElement("span")
console.log(sp1);      
// Obtient l'élément de référence
let sp2 = document.getElementById("childElement")
sp2.textContent = "sp2 text";
// Get the parent element
let parentDiv = sp2.parentNode
console.log(sp2);


// Insert le nouvel élément dans avant sp2
parentDiv.insertBefore(sp1, sp2)



