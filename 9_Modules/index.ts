// 1 = importação de arquivos
import importGreet from "./greet";

importGreet()

//2- import de variavel
import { x } from "./variable"

console.log(x)

//3- multiplas importações
import {a, b , myFunction} from "./multiple"

console.log(a)
console.log(b)
myFunction()

//4- Alias para importações
import {someName as name} from "./changename"

console.log(name);

//5- import all
import * as myNumbers from "./numbers"

console.log(myNumbers)

const nx = myNumbers.n1;

console.log(nx)

//6 = importando tipos
import { Human } from "./mytypes";

class User implements Human {
    name
    age

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}


const joao = new User("João", 23)

console.log(joao)

