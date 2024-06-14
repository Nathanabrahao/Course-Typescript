//1- generics

function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("testando generic"))

//2 - constrint em generic

function showProductName<T extends { name: string }>(obj: T) {
    return `O nome do produto é ${obj.name}`
}

const myObj = { name: "Porta", cor: "Branca" }
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 }

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))

//3 - Interface Generics
interface MyObject<T, U> {
    name: string
    wheels: T
    engine: U
}

type Car = MyObject<number, number>
type Pen = MyObject<boolean, boolean>

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0 }
const myPen: Pen = { name: "Caneta", wheels: false, engine: false }

console.log(myCar)
console.log(myPen)


//4- type parameters


/* function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: "2TB",
    ram: "32GB"
}

console.log(getSomeKey(server, 'ram')) */

//Comentado pois está reclamando a key mas está funcionando o código

//5 - keyof type operator
type Character = { name: string, age: number, hasDriveLicense: boolean }

type C = keyof Character

function showCharName(obj: Character, name: C) {
    return `${obj[name]}`
}

const myChar: Character = {
    name: "Nathan",
    age: 23,
    hasDriveLicense: true
}


console.log(showCharName(myChar, 'name'))



// 6 - conditional types

interface A { }

interface B extends A { }

interface Teste {
    showName(): string
}


type myType = B extends A ? number : string

const someVar: myType = 5

type myTypeB = Teste extends { showName(): string } ? string : boolean


// 7 - template literals type

type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = "some text"


type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`



