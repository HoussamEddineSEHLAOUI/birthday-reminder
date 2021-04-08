
import Per from'./per.js';
import React from 'react';


const Pers=({personnes})=>{
    const perComponent = personnes.map((name,i) =>{
        return (
        <Per
             key={i} 
             name={personnes[i].name}
             year="32 years"

          />
        ); 
    })
     return (
        <div className='CompBatS'>
            <div className='BatimentS'>
                {perComponent}
            </div>
        </div>
     );

    }
export default Pers;
