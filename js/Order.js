"use strict";

function Order(category, product, productAmount, priceObj) {
  this.category = category;
  this.product = product;
  this.productAmount = productAmount;
  this.priceObj = priceObj;

  this.showOrder = function () {
    document.write("<p> Category: " + this.category.name + "</p>");
    document.write("<p> Product: " + this.product.name + "</p>");
    document.write(
      "<p>The price of your order is: " +
        this.productAmount +
        "*" +
        this.product.price +
        " = $" +
        this.priceObj.totalPrice +
        "</p>"
    );

    if (this.priceObj.priceWithDiscount) {
      document.write("<p>You will get the discount " + discountValue + "%</p>");
      document.write(
        "<p>The final price is: $" + this.priceObj.priceWithDiscount + "</p>"
      );
    }
    document.write("</br>");
  };
}
