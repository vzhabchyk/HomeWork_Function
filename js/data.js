'use strict';

const iphone13 = new Product("iPhone 13", 10, 2000);
const samsungS20 = new Product("Samsung S20", 5, 1900);
const phonesCategoryProducts = [iphone13, samsungS20];
const phones = new Category("Phones", phonesCategoryProducts);

const macbook13 = new Product("Macbook 13", 100, 500);
const notebooksCategoryProduct = [macbook13];
const notebooks = new Category("Notebooks", notebooksCategoryProduct);

const samsungBuds = new Product("Samsung Buds", 10, 300);
const accessoriesCategoryProducts = [samsungBuds];
const accessories = new Category("Accessories", accessoriesCategoryProducts);

const categories = [phones, notebooks, accessories];