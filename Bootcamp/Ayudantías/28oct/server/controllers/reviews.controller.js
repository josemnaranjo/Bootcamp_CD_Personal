const {Review} = require('../models/reviews.model');
const Product =require('../models/products.model');

module.exports.createReview = async(req,res)=>{
    try{
        const {rating,content, idProduct}=req.body;
        //creamos un review pasándole el rating, content y el nombre del creador
        const review =await Review.create({rating,content,creatorName:"Nombre del usuario loggueado"});
        //obtenemos el producto al cual se comentando y lo guardamos en una constante. Exec nos permite ejecutar la acción que le indicamos 
        const product= await Product.findById(idProduct).exec();
        //al arreglo "product" en su campo "reviews" (ver products.model) le pusheamos el review que creamos en linea 8, pero solo tomará 
        //el id ya que lo definimos asín products.model 
        product.reviews.push(review);
        //.save permite guardar los cambios 
        await product.save();
        res.json(review);
    }catch(err){
        res.json(err)
    }
}

module.exports.getReviewsFromProduct = async(req,res)=>{
    try{
        const {idProduct}=req.params;
        const product = await Product.findById(idProduct).populate("reviews");
        res.json({message:"",reviews:product.reviews})
    }catch(err){
        res.json({message:"Algo salió mal", errors:err.errors})
    }

}