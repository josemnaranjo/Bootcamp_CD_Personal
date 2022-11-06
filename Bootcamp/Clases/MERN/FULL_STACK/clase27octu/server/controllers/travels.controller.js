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


module.exports.getAllTravels = async(req,res)=>{
    try{
        const travels =await Travel.find();
        res.json({message:"Todos los viajes disponibles",travels})
    }catch(err){
        res.status(500).json({message:"Ups hubo un error al traer todos los viajes",err})
    }
}

module.exports.deleteTravel = async(req,res)=>{
    try{
        await Travel.deleteOne({_id:req.params.id})
        res.json({message:"Se ha eliminado paquete exitosamente de la agencia"})

    }catch(err){
        res.status(500).json({message:"Ups hubo un error al traer todos los viajes",err})
    }
}


module.exports.updateTravel = async(req,res)=>{
    try{
        const updatedTravel = await Travel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.json({message:"El viaje se ha actualizado con éxito",updatedTravel})
    }catch(err){
        res.status(500).json({message:"Ups hubo un error al traer todos los viajes",err})
    }
}

module.exports.getOneTravel = async(req,res)=>{
    try{
        const oneTravel = await Travel.findById({_id:req.params.id})
        res.json({message:"Tu viaje",oneTravel})

    }catch(err){
        res.status(404).json({message:"Ups hubo un error al traer tu viaje",err})
    }
}