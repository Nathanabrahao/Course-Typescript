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
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.type);
//7 - ReadOnlyArray
let myArray = ["Maça", "Laranja", "Banana"];
console.log(myArray);
//impossibilita modificações
myArray.forEach((item) => {
    console.log("Fruta:" + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ["Nathan", 23];
console.log(anotherUser[0]);
//9 - Tupla with Readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
