import React from 'react';
import styles from './Information.module.css'

const Information = ({data,titulos} ) => {
    
    return (
        <div className={styles.infoContainer}>
            {data.length === 0 ? <div></div>: <div className={styles.info}>
                <h1>{data[0]}</h1>
                <p>{titulos[1]} : {data[1]}</p>
                <p>{titulos[2]} : {data[2]}</p>
                <p>{titulos[3]} : {data[3]}</p>
                <p>{titulos[4]} : {data[4]}</p>
            </div>}
        </div>
    );
}

export default Information;
