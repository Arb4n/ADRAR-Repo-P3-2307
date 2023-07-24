console.log("Hello");

// ------------------------

// Ne cible que le prmier élément button
// sélect le button element avec le query selector
// queryselector method execute une fonction callback.
// 
let btn = document.querySelector('button');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Vous avez cliqué');
});


/**
 * !!!!! si on veut souligner tous les boutons : 
 * !!! queryselector all retourne une node list = collection d'elements ~= tab
 * IL FAUT : itérer tout le long de la nodelist pour 
 * ajouter le evebt listener sur chawue button. 
 * → boucle foreach. 
 */
let btns = document.querySelectorAll('button');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        // event.preventDefault
        console.log('Vous avez cliqué');
    })

})