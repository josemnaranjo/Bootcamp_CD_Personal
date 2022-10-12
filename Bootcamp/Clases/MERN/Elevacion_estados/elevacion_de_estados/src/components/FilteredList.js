import React from 'react';


//Hereda el state "filter" y el array items
const FilteredList = ({filter,items}) => 
    //vamos a obtener un nuevo array que obtenga los numeros start y end
    items.map((item,i)=> { 
        //se pasa una palabra del arrelgo item
        //start es el indice de la primera letra que sea igual al state filter
        const start = item.indexOf(filter);
        //end es la suma del indice de la primera letra que coincide más el largo del state filter
        const end = start + filter.length;

        return(
            //key le permite a react identificar un elemenot en particular dentro de una coleccón, en este caso del array items
            <p key={i}>
                {/*para el elemento i
                devolvemos una parte del array item que comienza con el primero y termina antes que el indice   */}
                {item.slice(0,start)}
                <em>{item.slice(start,end)}</em>
                {item.slice(end)}
            </p>
        );
    }
)
export default FilteredList;
