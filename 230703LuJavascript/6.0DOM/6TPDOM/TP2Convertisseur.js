/** 
 * Vous aller créer avec JS un formulaire qui permettra 
 * de convertir les euros en franc suisse.
 * Créer deux input, un pour euros et l'autre pour francs suisses
 * Vous allez ajouter un événement input ou change 
 * ou click pour afficher
 * dans le champ correspondant la valeur 
 * saisie dans l'autre. 
Aide : pour récup la valeur d'un champ input, on utilise .value 

*/


let form1 = document.createElement('form', 'form1');
console.log(form1);


    let field1 = document.createElement('input');
    field1.setAttribute('euros', 50);
    let  field2= document.createElement('input');
    field2.setAttribute('francsSuisses', 51);
   
    
    form1.appendChild(field1);
  
  


let form = document.createElement("form"); 
let input1 = document.createElement("input"); 
let input2= document.createElement("input"); 

document.body.appendChild(form);
form.appendChild(input1);
form.appendChild(input2);

input1.addEventListener("input", function(){
    let euro = input1.value;
    euro ? input1.value = euro * 1.08 : input1.value;
})
input2.addEventListener("input", function(){
    let franc = input2.value;
    franc ? input2.value = franc / 1.08 : input2.value; // 
})


//  //Nicolas — Aujourd’hui à 12:25
// let form = document.createElement("form");
// let input1 = document.createElement("input");
// let input2 = document.createElement("input");

// document.body.appendChild(form)
// form.appendChild(input1)
// form.appendChild(input2)

// input1.addEventListener("input", function(){
//     let euro = input1.value;
//     euro ? input2.value = euro * 1.08 : input2.value = "";
// })

// input2.addEventListener("input", function(){
//     let franc = input2.value;
//     franc ? input1.value = franc / 1.08 : input1.value = "";
// })
 


/** 
 * Exo afficher un tableau de fruits
 */






//  ______________________________
// __________________________________

/**CORREC>>
 * 
 * @param {String} element_name 
 * @param {String} text 
 * @param {DOMElement} parent 
 * @param {Object} attribute 
 * @returns 
 */

const templateElement = (tag_name, text, parent, attribute) => {
    const template = document.createElement(tag_name);
    text ? template.textContent = text : "";
    parent ? parent.appendChild(template) : "";
    !attribute ? "" : attribute.length > 1 ? attribute.forEach(attr => template.setAttribute(attr.name, attr.value)) : template.setAttribute(attribute.name, attribute.value);
    return template;
  }