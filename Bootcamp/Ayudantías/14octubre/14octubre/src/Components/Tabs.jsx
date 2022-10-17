import { tab } from '@testing-library/user-event/dist/tab';
import React, {useState} from 'react';

const Tabs = () => {

    const[tabs,setTabs]=useState([
        {
            titulo:"Tab1",
            content:"Soy el primer tab",
            state:"active"
        },
        {
            titulo:"Tab2",
            content:"Soy el segundo tab",
            state:""
        },
        {
            titulo:"Tab3",
            content:"Soy el tercer tab",
            state:""
        }
    ])

    const changeActive = (tabElegida,i) =>{
        const newTabs = tabs.map((tab)=>{
            tab.titulo === tabElegida.titulo ? tab.state ="active" : tab.state="";
            return tab
        })
        
        setTabs(newTabs)
    }

    return (
        <div className='tabcontainer'>
            <div className='tittles'>
                {
                    tabs.map((t,i)=>{
                        return <a key={i} className={t.state} onClick={()=>changeActive(tab,i)}>{t.titulo}</a>
                    })
                }

            </div>

            <div className='content'>

            </div>
        </div>
    );
}

export default Tabs;
