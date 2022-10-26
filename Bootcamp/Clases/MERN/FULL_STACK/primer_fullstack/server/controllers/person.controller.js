//aquí van los métodos para manejar distintas solicitudes 


//importamos el modulo para crear personas
const { Person } = require('../modules/person.model')

module.exports.index = (req,res)=>{
    res.json({mensaje:"Hola mundo!"})
}


//método para manejar creación de nuevas personas

module.exports.createPerson = (req,res)=>{
    //desestructuramos el nombre y el apellido del body
    const {firstName,lastName}=req.body

    //pasamos esa info a nuestro modulo
    Person.create({
        firstName,
        lastName
    })
    .then(person=>res.json(person))
    .catch(err=> res.json(err))
}