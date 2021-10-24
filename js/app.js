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

function getCategory() {
  let categoryNumber;
  do {
    categoryNumber = parseInt(prompt("Please enter the category number (from 1 to " + categories.length + "):"));
  } while (!(categoryNumber > 0 && categoryNumber <= categories.length));

  return categories[categoryNumber - 1];
}


function showProducts(productsCategory) {
  console.log("List of products:");
  for (let i = 0; i < productsCategory.length; i++) {
    console.log("Product #" + (i + 1) + ": " + productsCategory[i].name);
  }
}


function getProductNumber(productsCategory) {
  let productNumber;
  do {
    productNumber = parseInt(prompt("Please enter the product number (from 1 to " + productsCategory.length + "):"));
  } while (!(productNumber > 0 && productNumber <= productsCategory.length));

  return productsCategory[productNumber - 1];
}


function getProductAmount(selectedProduct) {
  let productAmount;
  do {
    productAmount = parseInt(prompt("Please enter the product amount (from 1 to " + selectedProduct.count + "):"));
  } while (!(productAmount > 0 && productAmount <= selectedProduct.count));

  return productAmount;
}


function priceCalculation(amount, price) {
  const priceObj = {
    totalPrice: amount * price,
  };

  if (priceObj.totalPrice > priceToGetDiscount) {
    priceObj.priceWithDiscount = priceObj.totalPrice * discountValueToCalculate;
  }
  return priceObj;
}


do {
  showCategories();
  const category = getCategory();
  const productsCategory = category.products;
  showProducts(productsCategory);
  const selectedProduct = getProductNumber(productsCategory);
  const productAmount = getProductAmount(selectedProduct);
  const priceObj = priceCalculation(productAmount, selectedProduct.price);
  const order = new Order(category, selectedProduct, productAmount, priceObj);
  order.showOrder();
} while (confirm('Do you want to repeat the order?'));
