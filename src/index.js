const express = require("express")
const {v4: uuidv4} = require("uuid")

const app = express()
const customers = []

app.use(express.json())

function verifyIfExistsAccountCPF(request, response, next){
    const { cpf } = request.headers
    const customer = customers.find((customer) => customer.cpf === cpf)

    if(!customer){
        return response.status(400). json({
            "error": "customer not found"
        })
    }

    request.customer = customer

    return next()
}

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


//app.use(verifyIfExistsAccountCPF)
app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {

    const { customer } = request
    
    return response.status(200).json({
        "extrato": customer.statement
    })
})

app.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {
    const { description, amount} = request.body

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit"
    }

    const { customer } = request
    
    customer.statement.push(statementOperation)

    return response.status(201).json({
        "success": "deposito feito com sucesso."
    })
})

app.listen(3000)