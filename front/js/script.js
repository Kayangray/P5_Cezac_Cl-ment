
fetch('http://localhost:3000/api/products')
.then(response => response.json())
.then(data => console.log(data))


// Insérer Canapés index en créant nouvel élément HTML

const newCard = document.createElement("a")



// Récupérer la liste Canapés, faire une boucle sur ces canapés,
// générez le html en récupérant les éléments : let hmtl = "" => lancer boucle => ajouter dans le html une <a href> 