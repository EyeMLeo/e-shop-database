"use strict";
console.log("Shop.js");

class Shop {
  el = {};
  items = [];
  constructor() {
    this.initTargets();
    this.getItems();
  }
  initTargets() {
    this.el.list = document.getElementById("products");
  }

  getItems() {
    getProducts().then((products) => {
      this.items = products;
      this.renderList();
      //   console.log("products[0] ===", JSON.stringify(products[0], null, 2));
    });
  }

  makeOneItem(itemObj) {
    const divEl = document.createElement("div");
    divEl.className =
      "shop-item card border-primary mb-3 pb-4 overflow-hidden shadow col-6";

    divEl.innerHTML = `<img class="h-50" src="${itemObj.thumbnail}" alt="preke"/>
    <h3 class="ps-4 pt-2">${itemObj.title}</h3>
    <p class="price ps-4">${itemObj.price} Eur</p>
    <p class="ps-4">Category: ${itemObj.category}  # ${itemObj.id}</p>
    <div class="control ps-4">
      <button class="btn btn-outline-light">Buy now</button>
      <a class="btn btn-outline-secondary" href="product.html?prId=${itemObj.id}">More info ></a>
    </div>`;
    return divEl;
  }

  renderList() {
    this.el.list.innerHTML = "";
    this.items
      .map((iObj) => this.makeOneItem(iObj))
      .forEach((htmlEl) => this.el.list.append(htmlEl));
  }
}
const app = new Shop();
console.log("app ===", app);
