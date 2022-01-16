## FinApi - Financial

 **HTTP**, **Middleware** e **Express**.

---

### How to run the Project

* Clone the repository
```
git clone https://github.com/jorge-lba/FinApi
```
* installing the dependencies
```
yarn install
```
* Run project
```
yarn start
```

### Requisitos

- [x] Deve ser possível criar uma conta
- [] Deve ser possível buscar o extrato bancário do cliente
- [] Deve ser possível realizar um depósito
- [] Deve ser possível realizar um saque
- [] Deve ser possível buscar o etrato bancário do cliente por data
- [] Deve ser possível atualizar dados da conta do cliente
- [] Deve ser possível obter dados da conta do cliente
- [] Deve ser possível deletar uma conta
- [] Deve ser possível retornar o balanço

---

### Regras de negócio

- [] Não deve ser possível cadastrar uma conta com CPF já eístente
- [] Não deve ser possível buscar extrato em uma conta não eístente
- [] Não deve ser possível fazer depósito em uma conta não exístente
- [] Não deve ser possível fazer saque em uma conta não exístente
- [] Não deve ser possível fazer saque quando o saldo for insuficiente
- [] Não deve ser possível excluir uma conta não exístente