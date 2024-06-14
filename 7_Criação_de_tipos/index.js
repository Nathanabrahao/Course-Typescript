"use strict";
//1- generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
//2 - constrint em generic
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0 };
const myPen = { name: "Caneta", wheels: false, engine: false };
console.log(myCar);
console.log(myPen);
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Nathan",
    age: 23,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
const someVar = 5;
const testing = "some text";
