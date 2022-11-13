"use strict";
console.log("fns.js");

// https://dummyjson.com/products
const BASE_URL = "https://dummyjson.com";
const BASE_URL_DEVELOPMENT = "db.json";

// bendrine fetch funkcija

function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .catch((err) => console.warn("klaida getData", err));
}

// konkreti funkcija gauti produktaqms
function getProducts() {
  return getData(`${BASE_URL_DEVELOPMENT}`).then((data) => data.products);
}

function getSingleProduct(id) {
  return getData(`${BASE_URL}/products/${id}`).then((item) => item);
}

// getSingleProduct(5);

//
// getProducts().then(products);

function makeSingleOneItem(itemObj) {
  const divEl = document.createElement("div");
  divEl.className = "shop-item pb-3 border-primary overflow-hidden";

  divEl.innerHTML = `
  <h1 class="ps-4 pt-2">${itemObj.title}</h1>
  <img class="w-50" src="${itemObj.thumbnail}" alt="preke"/>
  <img class="w-50" src="${itemObj.images[0]}" alt="preke"/>
  <img class="w-50" src="${itemObj.images[1]}" alt="preke"/>

    <h3 class="ps-4 pt-2">${itemObj.title}</h3>
    <p class="price ps-4">${itemObj.price} Eur</p>
    <p class="ps-4">Category: ${itemObj.category}  # ${itemObj.id}</p>
    <p class="ps-4">Description: ${itemObj.description}</p>
    <div class="control ps-4">
      <button class="btn btn-outline-light">Add to cart</button>
      <a class="btn btn-outline-secondary" href="index.html">< Go back</a>
    </div>`;
  return divEl;
}
