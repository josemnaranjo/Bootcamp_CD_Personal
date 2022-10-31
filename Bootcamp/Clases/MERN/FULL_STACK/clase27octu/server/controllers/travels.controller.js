const {Travel} = require('../models/travels.models');

module.exports.addTravel =  (req,res)=>{
    const {packageName, destination, origin, price,arrive_date} = req.body;

    Travel.create({
        packageName,
        destination,
        origin,
        price,
        arrive_date
    })
    .then(travel=>res.json(travel))
    .catch(err=>res.json(err))
}
