/**
 * 
 * @param {String} element_name 
 * @param {String} text 
 * @param {DOMElement} parent 
 * @param {Object} attribute 
 * @returns
 * 
 */

const templateElement = (element_name, text, parent, attribute) => {
    const template = document.createElement(element_name)
    text ? template.textContent = text : ""
    parent ? parent.appendChild(template) : ""
    !attribute ? "" : attribute.length > 1 ? attribute.forEach(attr => template.setAttribute(attr.name, attr.value)) : template.setAttribute(attribute.name, attribute.value)
    return template
  }

// Create element in DOM
const header = templateElement("header", "", document.body)
const nav = templateElement("nav", "", header)
const title = templateElement("h1", "Search Universities APP", nav)

//Main
const main = templateElement("main", "", document.body)

// Form
const form = templateElement("form", "", main, {name: "id", value: "form"})
const input = templateElement("input", "", form)
const searchButton = templateElement("button", "Rechercher", form, {name: "type", value: "submit"})

searchButton.addEventListener('click', function(e){
    e.preventDefault()
    clearDOM('changeFirstInput')
    let searchName = input.value
    searchName ? api(searchName) : alert("Vous n'avez pas saisi de pays !")
  })

// api call function
const api = search => {
    fetch("http://universities.hipolabs.com/search?country="+search)
    .then(response =>  {return response.json()})
    .then(data => {(data.length > 50) ? filterUniv(data) : showUniv(data)})
    .catch(err => console.log(err))
}


// filter results function
const filterUniv = universities => {
    clearDOM('filter')
    const filteredUniv = checkDuplicate(universities)
    const formFilter = templateElement("form", "", main, {name:"id", value:"formFilter"})
    const inputFilter = templateElement("input", "", formFilter, {name: "placeholder", value:"Soyez plus précis"})
    const buttonFilter = templateElement("button", "Rechercher", formFilter, {name: "type", value: "submit"})

    buttonFilter.addEventListener('click', function(e){
        e.preventDefault()
        let searchFilter = inputFilter.value
        if(searchFilter){
            let listFilter = []
            filteredUniv.filter(university => {
                const currentUniv = university.name.toLowerCase().includes(searchFilter.toLowerCase())
                if (currentUniv === true){
                    listFilter.push(university)
                }
            })
            showUniv(listFilter)
        }else{
            alert("Vous n'avez pas saisie de filtre à votre recherche !")
        }
    })
}

// show results function
const showUniv = universities => {
    clearDOM('changeFilterInput')
    const filteredUniv = checkDuplicate(universities)
    const sectionNumberUniv = templateElement("section", "", main, {name: "id", value: "afficheNumber"})
    templateElement("h2", "Il y a " + filteredUniv.length + " universités", sectionNumberUniv)
    templateElement("img", '', sectionNumberUniv, {name: "src", value: "https://flagsapi.com/"+ universities[0].alpha_two_code +"/flat/64.png"})
    const sectionResult = templateElement("section", "", main)
    filteredUniv.forEach(function(university){
        let articleResult = templateElement("article", "", sectionResult)
        templateElement("h3", "", articleResult)
        templateElement("a", university.name, articleResult, [{name: "href", value: university.web_pages}, {name: "target", value: "_blank"}])
    })
}

const checkDuplicate = object => {
    const filteredUniv = {};
    for (let key in object) {
        const value = JSON.stringify(object[key]);
        if (!filteredUniv[value]) {
            filteredUniv[value] = object[key];
        }
    }
    return Object.values(filteredUniv);
}

// remove elements function
const clearDOM = sender => {
    if(sender == "changeFirstInput"){
        document.getElementById("afficheNumber") ?  document.getElementById("afficheNumber").remove() : ""
        document.getElementById("formFilter") ?  document.getElementById("formFilter").remove() : ""
        document.querySelectorAll("article") !== 0 ?  document.querySelectorAll("article").forEach(article => article.remove()) : ""
    }else{
        document.getElementById("afficheNumber") ?  document.getElementById("afficheNumber").remove() : ""
        document.querySelectorAll("article") !== 0 ?  document.querySelectorAll("article").forEach(article => article.remove()) : ""
    }
}