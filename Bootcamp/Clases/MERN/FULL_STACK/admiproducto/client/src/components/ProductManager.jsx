import React, {useState} from 'react';


const ProductManager = (props) => {
    const { initialTitle,initialPrice, initialDescription, onSubmitProp} = props;
    const [title,setTitle] = useState(initialTitle);
    const [price,setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmit = e =>{
        e.preventDefault();
        //esta es las funcion que cambia según donde sea renderizado este componente
        onSubmitProp({title,price,description});
        //esto es para setear en 0 cuando se haga un actualizacion
        setTitle("");
        setPrice("");
        setDescription("")
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor='title'>Title</label>
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor='price'>Price</label>
                    <input type='text' value={price} onChange={e => setPrice(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor='description'>Description</label>
                    <input type='text' value={description} onChange={e => setDescription(e.target.value)}/>
                </p>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}

export default ProductManager;
