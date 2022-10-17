import React from 'react';


const Boxes = ({boxes}) => {
    return (
        <div className='boxes'>
            {
                boxes.map((box,i)=> <div className='box' key={i} style={{
                    backgroundColor:box.color,
                    width:parseInt(box.width),
                    height:parseInt(box.height)
                }}> {box.color}</div>)
            }
        </div>
    );
}

export default Boxes;
