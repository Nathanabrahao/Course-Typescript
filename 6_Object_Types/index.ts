//type object with interface

interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if (product.isAvailable) {
        console.log(`O produto está disponivel`)
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)


//2 - propertys options for the interface
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`o usuario tem o e-mail: ${user.email}`)
    if (user.role) {
        console.log(`A função do usuario é ${user.role}`)
    }
}

const u1: User = { email: "nathanzinho@email.com", role: "Admin" }


showUserDetails(u1)


// 3 - Readonly
interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)


//4 - index Signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

//5 - extending interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const nathan: Human = {
    name: "nathan",
    age: 23
}

console.log(nathan)

const trunks: SuperHuman = {
    name: "trunks",
    age: 25,
    superpowers: ["Masenko", "Burning Attack"]
}

console.log(trunks)


//6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}


type HumanWithGun = Character & Gun


const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

console.log(arnold.type)

//7 - ReadOnlyArray

let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]

console.log(myArray)

//impossibilita modificações

myArray.forEach((item) => {
    console.log("Fruta:" + item)
}
)

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

//8 - tuplas 
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Nathan", 23]

console.log(anotherUser[0])


//9 - Tupla with Readonly
function showNumbers(numbers: readonly [number, number]){
    console.log(numbers[0])
    console.log(numbers[1])
}


showNumbers([1, 2])

