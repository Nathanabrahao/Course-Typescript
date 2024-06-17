//Campo readonly

class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }

}

const fusca = new Car("Fusca")

console.log(fusca)

console.log(fusca.wheels)

fusca.name = "Fusca Turbo"

//2 - herança e super

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}


const trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(destroyer)
console.log(trator)


//3 - metodos
class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger!")
    }

}


const jimmy = new Dwarf("Jimmy")

console.log(jimmy)

jimmy.greeting()

console.log(jimmy)

//4- This
class Truck {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`)
    }

}

const volvo = new Truck("Volvo", 400)

volvo.showDetails()


//5 - Getters
class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name + " " + this.surname
    }
}

const nathanabrahao = new Person("Nathan", "Abrahão")

console.log(nathanabrahao)
console.log(nathanabrahao.name)
console.log(nathanabrahao.fullName)



//6- Setters
class Coords {
    x!: number
    y!: number

    set fillx(x: number) {
        if (x === 0) {
            return
        }

        this.x = x

        console.log("X inserido com sucesso")
    }

    set filly(y: number) {
        if (y === 0) {
            return
        }

        this.y = y

        console.log("Y inserido com sucesso")
    }

    get getCoords() {
        return `X: ${this.x} Y: ${this.y}`
    }


}

const myCoords = new Coords()

myCoords.fillx = 10
myCoords.filly = 15

console.log(myCoords)

//7- implements
interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O titulo do post é: ${this.title}`
    }
}

class post implements showTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O titulo é: ${this.title}`
    }
}

const myPost = new blogPost("Hello World")
const posts = new post("Hello World")


console.log(myPost.itemTitle())
console.log(posts.itemTitle())


//8 - Override
class Base {
    someMethod() {
        console.log("Base")
    }

}


class Nova extends Base {
    someMethod() {
        console.log("Nova Base")
    }
}

const myObject = new Nova()

myObject.someMethod()

//9- public
class C {
    x = 10
}

class D extends C {

}


const cInstance = new C()

console.log(cInstance.x)

const dInstance = new C()

console.log(dInstance.x)


//10 - protected



