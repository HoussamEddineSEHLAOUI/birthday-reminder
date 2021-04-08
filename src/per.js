
import './per.css';
import React from 'react';

const Per=(props)=>{
     return (
            <div className="per-par">
              <div className="image-per">
                  
              </div>
              <div className="desc-per">
                  <h3 className="name">{props.name}</h3>
                  <p className="year">{props.year}</p>
              </div>
            </div>
     );

    }
export default Per;
