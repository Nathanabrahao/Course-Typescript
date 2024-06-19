function myDecorator() {
    console.log("Iniciando decorator!");

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        console.log("Executando decorator")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}


class myClass {
    @myDecorator()
    testing() {
        console.log("Terminando execução do método")
    }
}

const myObj = new myClass();

myObj.testing();

// 2- multiplos decorators
function a() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("executou A.")
    }
}

function b() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("executou B.")
    }
}

class MultipleDecorators {
    @a()
    @b() // a ordem de execução vem do ultimo atrelado ao primeiro, nessa ordem mesmo!
    testing() {
        console.log("Terminando execução do método")
    }
}

//3 - class decorator
function classDec(constructor: Function) {
    console.log(constructor)
    if (constructor.name === "User") {
        console.log("Created User!")
    }
}

@classDec
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

const nathan = new User("Nathan")

console.log(nathan)


//4 - method decorator
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(true)
    showName() {
        return `A maquina é ${this.name}`
    }
}

const trator = new Machine("Trator")

console.log(trator)


//5 Acessor decorator
//@enurable = lista dentro da listagem da chamada de uma variavel
class Monster {
    name?
    age?


    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `Nome do monstro: ${this.name}`
    }

    get showAge() {
        return `Idade do monstro: ${this.age}`
    }

}

const squirtle = new Monster("Squirtle", 10)

console.log(squirtle)


//6 - property decorator
function formatNumber() {
    return function (target: object, propertyKey: string) {

        let value: string

        const getter = function () {
            return value
        }

        const setter = function (newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })


    }
}


class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newItem = new ID("1")

console.log(newItem)
console.log(newItem.id)

//7 - exemplo real com class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id;
    createdAt?: Date;

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id;
    createdAt?: Date;

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(12)
const pen = new Pen(5)

console.log(newBook)
console.log(pen)

console.log(newBook.createdAt)
console.log(pen.createdAt)

// 8- exemplo real com Method Decorator
function checkIfUserPosted() {
    return function (target: object, key: string | Symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction)
        descriptor.value = function (...args: any[]) {
            if (args[1] === true) {
                console.log("Usuario já postou!")
            } else {
                return childFunction.apply(this, args)
            }
        }

        return descriptor;
    }
}




class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`Post do usuario: ${content}`)
    }
}

const newPost = new Post()

newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu primeiro post!", newPost.alreadyPosted)


//9- exemplo real property decorator
function Max(limit:number){
    return function(target: Object, propertyKey: string){
        let value: string
    
        const getter = function(){
            return value
        }

        const setter = function(newVal: string){
            if(newVal.length > limit){
                console.log(`O valor deve ter no máximo ${limit} digitos`)
            }else{
                value = newVal
            }
        }


        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });

    }
}


class Admin{
    @Max(10)
    username

    constructor(username: string){
        this.username = username
    }
}

let pedro = new Admin("pedroadmin12345")
let lee = new Admin("leeadmin")



