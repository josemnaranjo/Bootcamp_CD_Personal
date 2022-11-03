import React, {useState} from 'react';
import { createBook } from '../services/validation-service';

const BookForm = () => {
    const [title,setTitle]=useState('');
    const [numberOfPages,setnumberOfPages]=useState(0);
    const [errors, setErrors]=useState([]);
    const [book,setBook]=useState([])


    const createBookFromService = async (book)=>{
            const response = await createBook(book)
           if (response._id){
            setBook(response)
           } else {
            setErrors(response)
            setBook("")
           }
    }
    const onSubmitHandler = e =>{
        e.preventDefault();
        createBookFromService({title,numberOfPages})

        // axios.post('http://localhost:8000/api/book/create', {
        //     title,
        //     pages
        // })
        // .then(res=> console.log(res))
        // .catch(err=>{
        //     const errorResponse = err.response.data.errors;
        //     const errorArr =[];
        //     for (const key of Object.keys(errorResponse)) {
        //         errorArr.push(errorResponse[key].message)
        //     }
        //     setErrors(errorArr);
        // })
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err,idx)=><p key={idx}>{err}</p>)}

                <p>
                    <label>Title</label>
                    <input type='text' onChange={e=>setTitle(e.target.value)}/>
                </p>

                <p>
                    <label>Pages</label>
                    <input type='text' onChange={e=>setnumberOfPages(e.target.value)}/>
                </p>

                <input type="submit"/>

            </form>
            {book.length !== 0 ? <p>{book.title},{book.numberOfPages}</p>: null}

        </div>
    );
}

export default BookForm;
