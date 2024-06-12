"use strict";
//type object with interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log(`O produto está disponivel`);
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`o usuario tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é ${user.role}`);
    }
}
const u1 = { email: "nathanzinho@email.com", role: "Admin" };
showUserDetails(u1);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const nathan = {
    name: "nathan",
    age: 23
};
console.log(nathan);
const trunks = {
    name: "trunks",
    age: 25,
    superpowers: ["Masenko", "Burning Attack"]
};
console.log(trunks);
//6 - 
