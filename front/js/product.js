// Récupérer l'ID dans l'url

const queryString = window.location.search

// console.log(queryString)

const urlParams = new URLSearchParams(queryString)
const getId = urlParams.get("id")

//récupération des choix de l'utilisateur 

let color = null;
let quantity = null;
let addCartBtn = null;
let price = null;
let article = null;

// execution après le chargement de la page.

window.onload = function() 
{
    //intégration de l'id de chaque produit dans l'url

    fetch("http://localhost:3000/api/products/" + getId)
        // transformation des informations de l'api au format json pour lecture par JS

        .then(data => data.json()) 
        .then(product => {

            // on intègre les informations de l'api à l'emplacement html dédié

            article = product;
            document.getElementById("price").textContent = product.price;
            document.getElementById("title").textContent = product.name;
            document.getElementById("description").textContent = product.description;
            document.getElementById("productImg").src = product.imageUrl;
            document.getElementById("productImg").alt = product.altTxt;
            document.getElementById("pageTitle").textContent = product.name;

            // on intègre les options de couleur spécifiques pour le produit affiché
            
            const color = document.getElementById("colors");
            const optionColor = product.colors;
            for(let i=0; i < optionColor.length; i++){
                let opt = optionColor[i];
                let el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                color.appendChild(el);
            }
        });
}

color = document.getElementById("colors");
quantity = document.getElementById("quantity");
addCartBtn = document.querySelector("button");
price = document.getElementById("price");


//  pour recup détails canaps

/*async function init() {
  const canap =  await getData()
  console.log(canap[0].price)

    // injectez éléments reçus au bon endroit

    const priceElt = document.getElementById('price')
    if (priceElt) {
      priceElt.textContent = canap.price
    } 
}

// Essayer d'ajouter canap dans panier

init ()*/
