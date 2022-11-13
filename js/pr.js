"use strict";
console.log("pr.js");

const productEl = document.getElementById("item");

console.log("window.location.search ===", window.location.search);

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("prId");
console.log("productId ===", productId);

getSingleProduct(productId).then((productObj) => {
  console.log("productObj ===", productObj);
  const htmlProductEl = makeSingleOneItem(productObj);
  //   pataqlpinam i doma
  productEl.append(htmlProductEl);
  console.log("htmlProductEl ===", htmlProductEl);
});
