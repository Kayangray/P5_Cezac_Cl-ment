
  async function getData() {
    return new Promise((resolve, reject) => {
      const res = fetch("http://localhost:3000/api/products")
        .then((response) => {
          if (response.status !== 200) {
            reject("Erreur serveur");
            return false;
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((e) => reject(e));
    });
  }
  
  async function init() {
      // Récupérer la liste Canapés
    const canaps = await getData();
    if (!canaps) {
      return false;
    }
    // Init html
    let html = "";
    // Boucle
    for (const canap of canaps) {
      html += `<a href="./product.html?id=${canap._id}">`;
    }
    console.log(html);
  
    // Todo : remplir avec les bonnes donnees
  //   <a href="./product.html?id=42">
  //             <article>
  //               <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
  //               <h3 class="productName">Kanap name1</h3>
  //               <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
  //             </article>
  
  // Réinjecter le résultat dans le html 
  }
  
  init();
  
  // Insérer Canapés index en créant nouvel élément HTML
  
  // const newCard = document.createElement("a");
  

  /* 
function displayProducts(canaps) {
  let productContainer = document.getElementById("items")
  for (canap of canaps) {
    let linkElement = document.createElement("a")
    let articleElement = document.createElement("article")
    let pictureElement = document.createElement("img")
    let nameElement = document.createElement("h3")
    let textElement = docuement.createElement("p")

    productContainer.appendChild(linkElement)
    linkElement.appendChild(articleElement)
    articleElement.appendChild(pictureElement)
    articleElement.appendChild(nameElement)
    articleElement.appendChild(textElement)
  }
}
  */
