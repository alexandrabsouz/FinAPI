const express = require("express")
const {v4: uuidv4} = require("uuid")

const app = express()
const customers = []

app.use(express.json())

app.post("/account", (request, response) => {
    const {cpf, name} = request.body
    const customerAlreadyExists = customers.some((customer) => customer.cpf == cpf)

    if(customerAlreadyExists){
        return response.status(400).json({
            "error": "customer already exists!"
        })
    }

    customers.push({
        id: uuidv4(),
        cpf,
        name,
        statement: []
    })

    return response.status(201).send()
})


app.get("/statement/:cpf", (request, response) => {
    const { cpf } = request.params
    const customer = customers.find((customer) => customer.cpf === cpf)

    if(!customer){
        return response.status(400). json({
            "error": "customer not found"
        })
    }

    return response.status(200).json({
        "extrato": customer.statement
    })
})


app.listen(3000)