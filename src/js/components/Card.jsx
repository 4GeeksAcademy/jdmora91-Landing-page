import React from 'react';

const Card = ({titulo, descripcion, imagen}) => {

  const StyleCard = { width: "18rem" };
  let textBoton = "Ordenar";
  return (

    
    <div className="card flex d-flex gap-3 border border-dark bg-danger m-3" style={StyleCard }>
     
      <img src={imagen} className="card-img-top" alt="..." />
      
        <div className="card-body">
          <h5 className="card-title text-lg font-bold text-warnig">{titulo}</h5>
          <p className="card-text text-gray-600 text-warning">{descripcion}</p>
          <a href="#" className="btn btn-primary text-warnig">{textBoton}</a>
         
        </div>
    </div>
    ); 
} 

export default Card;
                           

