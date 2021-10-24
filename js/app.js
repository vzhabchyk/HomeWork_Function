'use strict';

const priceToGetDiscount = 15000;
const discountValue = 5;
const discountValueToCalculate = 1 - discountValue / 100;


function showCategories() {
  console.log("List of categories:");
  for (let i = 0; i < categories.length; i++) {
    console.log("Categories #" + (i + 1) + ": " + categories[i].name);
  }
}
showCategories();

function getCategoryProducts() {
  let categoryNumber;
  do {
    categoryNumber = parseInt(prompt("Please enter the category number (from 1 to " + categories.length + "):"));
  } while (!(categoryNumber > 0 && categoryNumber <= categories.length));

  return categories[categoryNumber - 1].products;
}

const productsCategory = getCategoryProducts();

function showProducts() {
  console.log("List of products:");
  for (let i = 0; i < productsCategory.length; i++) {
    console.log("Product #" + (i + 1) + ": " + productsCategory[i].name);
  }
}
showProducts();

function getProductNumber() {
  let productNumber;
  do {
    productNumber = parseInt(prompt("Please enter the product number (from 1 to " + productsCategory.length + "):"));
  } while (!(productNumber > 0 && productNumber <= productsCategory.length));

  return productsCategory[productNumber - 1];
}

const selectedProduct = getProductNumber();

function getProductAmount() {
  let productAmount;
  do {
    productAmount = parseInt(prompt("Please enter the product amount (from 1 to " + selectedProduct.count + "):"));
  } while (!(productAmount > 0 && productAmount <= selectedProduct.count));

  return productAmount;
}

const productAmount = getProductAmount();

function priceCalculation(amount, price) {
  const priceObj = {
    totalPrice: amount * price,
  };

  if (priceObj.totalPrice > priceToGetDiscount) {
    priceObj.priceWithDiscount = priceObj.totalPrice * discountValueToCalculate;
  }
  return priceObj;
}

function showPrice(obj) {
  document.write("<p>The price of your order is: $" + obj.totalPrice + "</p>");
  if (obj.priceWithDiscount) {
    document.write("<p>You will get the discount " + discountValue + "%</p>");
    document.write("<p>The final price is: $" + obj.priceWithDiscount + "</p>");
  }
}

const priceObj = priceCalculation(productAmount, selectedProduct.price);
showPrice(priceObj);
