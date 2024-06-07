"use strict";
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossivel realizar o calculo!");
    }
}
sum("1", "59");
sum(12, 31.21);
sum("6", 12);
// 2 - check value exist
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 5]);
operations([1, 2, 5], "sum");
operations([1, 2, 5], "multiply");
// 3 - instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(paul);
//4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log(`O cão não tem raça`);
    }
}
showDogDetails(turca);
showDogDetails(bob);
//4 - Challenge
class Review {
    constructor(score, review) {
        this.score = score;
        this.review = review;
    }
}
function checkReview(review) {
    if (!review) {
        console.log(`O usuario não avaliou`);
        return;
    }
    else {
        console.log(`Você deu a nota ${review}`);
    }
}
checkReview(false);
checkReview(15);
checkReview(2);
