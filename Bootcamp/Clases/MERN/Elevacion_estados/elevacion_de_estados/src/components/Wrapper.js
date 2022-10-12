import React, {useState} from 'react';
import Input from './Input'
import FilteredList from './FilteredList'


const Wrapper = ({items}) => {//pasamos items (que viene de App.js) como parámetro, con esto le permitimos acceso a los componentes hijos a este arreglo
    //usamos state y su método de modificación
    const [filter,setFilter] = useState('');

    return (
        <div>
            <h2>Mi lista filtrada</h2>

            {/*importamos los componentes Item e imput*/}
            <Input
                //definimos que el state "filter" sea igual al último valor que este state tiene. En un principio seria '' 
                filter = {filter}
                //definimos que la función setFilter sea igual al método que definimos en la línea 8
                setFilter = {setFilter}
            />
            <FilteredList
                //definimos que el state "filter" sea igual al último valor que este state tiene. En un principio seria '' 
                filter = {filter}
                //items (el arreglo que viene de App.js) va a ser igual a un array que, en caso de que filter (la palabra entregada)
                // no exista sea vacío, y que en caso de que existan conicidencias, tenga el índice de las letras que sean coincidencias
                //en el fondo esto entrega un valor (el del índice) si existen coincidencias, y nada si no existen
                items = {items.filter(item => item.indexOf(filter) > -1)}
            />
        </div>
    );
}

export default Wrapper;
