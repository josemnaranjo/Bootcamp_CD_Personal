const { Book } = require('../models/books.model');
const { User } = require('../models/user.model');


module.exports.createBook = async (req,res) => {
    try{
        const user = req.params;
        const id = user.id;

        //creacion de nuevo libro en "book" collection
        const {title, author, genre, summary} = req.body;
        const newBook = await Book.create({title,author,genre,summary});

        //se agrega este nuevo libro al usuario que lo creó
        await User.findByIdAndUpdate(id,{
            $push:{
                myBooks:newBook
            }
        });

        res.json({message:"Exito",title:title,genre:genre,summary:summary})

    }catch(err){
        res.status(500).json({
            message:"No hemos podido crear tu libro",
            err
        })
    }
};

module.exports.addBookOfInterest = async (req,res) => {
    try{
        //obtengo el id del libro que quiero reservar,
        // el id lo obtengo a tráves de los params
        const bookId = req.params.id;
        console.log(bookId)
        const book = await Book.findById(bookId);

        //obtengo el usuario que solicitó la reserva del libro a través de su
        //id. El que obtengo del userState. Lo paso dentro del body
        const result  = req.body;
        const userId = result._id
        
        //actualizo la información del usuario

        const userWithBookAdded = await User.findByIdAndUpdate(userId,{
            $push:{
                booksInterested:book
            }
        })

        res.json({message:"Exito",userWithBookAdded:userWithBookAdded})

    }catch(err){
        res.status(500).json({
            message:"No hemos podido agregar el libro a tus grupo de interés",
            err
        })
    }
};

module.exports.getAllBooksOfInterestOfAUser = async (req,res) => {
    try{
    
        //obtengo el usuario que solicitó la reserva del libro a través de su
        //id. El que obtengo del userState y lo paso como params
        const userId  = req.params.id;
        
        //obtengo toda la información de ese usuario 
        const user = await User.findById(userId);
        //retorno solo el arreglo de los libros que está interesado
        const booksInt = user.booksInterested;

        res.json(booksInt);

    }catch(err){
        res.status(500).json({
            message:"No hemos podido agregar el libro a tus grupo de interés",
            err
        })
    }

}


