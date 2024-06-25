// 1 - iniciando projeto
//console.log("Express + Ts")

//2- init express
import express, { Request, Response } from 'express'

const app = express()

//3 - rota com Post
app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Hello Express!")
})

//3 - rota com Post
app.post("/api/product", (req, res) => {
    console.log(req.body);

    return res.json({
        message: "Produto criado com sucesso!"
    })
})

//4- rota para todos os verbos
app.all("/api/product/check", (req, res) => {
    if (req.method === "POST") {
        return res.send("Inseriu algum registro")
    } else if (req.method === "GET") {
        return res.send("Leu meu registro")
    } else {
        return res.send("Não podemos realizar esta operação")
    }
})


//5- interface Express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces")
})

//6- Enviando JSON
app.get("/api/json", (req: Request, res: Response) => {

    return res.json({
        name: "Shirt",
        price: 19.99,
        color: "Blue",
        sizes: ["P", "M", "G"]
    })

})


//7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params)

    const id = req.params.id;

    if (id === "1") {
        const product = {
            id: 1,
            name: "Boné",
            price: 10
        };

        return res.json(product)
    } else {
        return res.send("Produto não Encontrado")
    }
})


app.listen(3000, () => {
    console.log("Aplicação de TS + Express funcionando!")
})

