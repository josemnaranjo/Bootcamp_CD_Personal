const express = require('express');
const app = express();
const port = 8000;

const {faker} = require('@faker-js/faker');

class User {
    constructor(){
        this._id= faker.random.numeric(7);
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email(); 
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this._id= faker.random.numeric(10);
        this.name = faker.company.name();
        this.address= {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),

        }
    }
}

app.get("/api/users/new",(req,res)=>{
    const user = new User();
    console.log(user);
    res.json(user);
});

app.get("/api/companies/new",(req,res)=>{
    const company = new Company();
    console.log(company);
    res.json(company);
});

app.get("/api/user/company",(req,res)=>{
    const company = JSON.stringify(new Company());
    const user = JSON.stringify(new User());
    res.write(user);
    res.write(company);
    res.end();
});


app.listen(port,()=>{
    console.log(`Servidor montado en puerto ${port}`);
});