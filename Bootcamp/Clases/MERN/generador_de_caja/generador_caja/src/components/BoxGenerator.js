import React, {useState} from 'react';


const BoxGenerator = () => {
    const [color, setColor] = useState("");
    const [colors] = useState([]);


    const handleCreateCube = (e) => {
        e.preventDefault();
        colors.push(color);
        console.log(colors);
        setColor("");
    }

    
    return (
        <div>
            <form onSubmit={handleCreateCube}>
                <label htmlFor='color' >Color:</label>
                <input type="text" name="color" onChange={e => setColor(e.target.value)} value={color}/>
                <button type='submit'>Add</button> 
            </form>
            <div style={{display:'flex', marginTop:'20px'}}>
            {colors?.map((color,index)=>(<div style={{backgroundColor:color, width:'100px', height:'100px'}} key={index}></div>))}
            </div>
        </div>
    )
}

export default BoxGenerator

