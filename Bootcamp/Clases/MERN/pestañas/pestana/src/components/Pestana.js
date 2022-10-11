import React,{useState} from 'react';

const Pestana = (props) => {
    const {info} = props;
    const [texto, setTexto] = useState("");
    

  
    const handleClick = (value) =>{
        const aux = Object.values(info)[value];
        const contentID = "content"+value;
        alert("Hola!");
        setTexto(aux[contentID])
    }


    return (
        <div>
            <div style={{display:'flex', justifyContent:'center',gap:'38px'}}>
            {info.map((obj,index)=> <p style={{
                border:'1px solid black',
                padding:'10px',
                backgroundColor:'black',
                color:'white'
            }} key={index} onClick={(e)=>handleClick(index)}>{Object.values(obj)[0]}</p>)}
            </div>
            <div>
                <p style={{
                    margin:'0 auto',
                    border:'1px solid grey',
                    width:'200px',
                    padding:'30px'
                }}>{texto ? texto : "" }</p>
            </div>
        </div>
    );
}

export default Pestana;
