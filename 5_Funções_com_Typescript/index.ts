//1 - void - function with no return

function withoutReturn(): void {
    console.log("Função sem retorno")
}

withoutReturn()

//2 - callback is argument
function greeting(name: string) {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Preparando a função")

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, "Nathan")

//3 - generic functions

function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))
console.log(firstElement([true, false, true]))

function mergeObjects<U, T>(obj: U, obj2: T) {
    return {
        ...obj,
        ...obj2
    }
}

const newObject = mergeObjects({ name: "Nathan" }, { age: 23, job: "Developer" })

console.log(newObject)


//4- Constraints

function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest

}

console.log(biggestNumber(5, 3))
console.log(biggestNumber("14", "8"))
console.log(biggestNumber(4, 13))


//5 - Specify type argument

function mergeArrays<T>(arr: T[], att: T[]) {
    return arr.concat(att)
}

console.log(mergeArrays<number | string>([1, 2, 3], ["5", "6"]))


// 6 - options parameters 

function modernGreeting(name: string, greet?: string) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`
    }

    return `Olá ${name}, tudo bem?`

}


console.log(modernGreeting("Nathan"))
console.log(modernGreeting("João", "Jr"))

//7 - parameter default

function somaDefault(n: number, m = 10): number {
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(1, 2))

//8 - unknown
function doSomething(x: unknown) {
    if (Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === "number") {
        console.log("x é um numero")
    }
}

doSomething([4, 5, 6])
doSomething(1)

//9 - never
function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

//showErrorMessage("Algum erro")

//10 - Rest operator
function sumAll(...n: number[]){
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5, 7, 8, 4, 2))

//11 - Destructuring
function showProductDetails({name: productName, price: productPrice}: {name: string, price:number}): string{
    return `O nome do produto é ${productName} e ele custa R$${productPrice}`
}

const shirt = {name: "Camisa", price: 45.21}

console.log(showProductDetails(shirt))

