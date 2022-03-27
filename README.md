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

### Requirements

- [x] It must be possible to create an account
- [x] It must be possible to fetch the customer's bank statement
- [x] It must be possible to make a deposit
- [x] It must be possible to make a withdrawal
- [x] It must be possible to search for the customer's bank statement by date
- [x] It must be possible to update customer account data
- [x] It must be possible to get customer account data
- [x] It must be possible to delete an account
- [x] It must be possible to return the balance

---

### Business rules

- [x] It should not be possible to register an account with an existing CPF
- [x] It should not be possible to fetch a statement from a non-existing account
- [x] It should not be possible to deposit to a non-existing account
- [x] It should not be possible to withdraw from a non-existing account
- [x] It should not be possible to withdraw when the balance is insufficient
- [x] It should not be possible to delete a non-existing account
