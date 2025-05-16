import React from 'react';

const Card = ({titulo, descripcion, imagen}) => {

  const StyleCard = { width: "18rem" };
  let textBoton = "Ordenar";
  return (

    
    <div className="card boorder border-infor flex space-x-4 d-flex gap-3" style={StyleCard}>
      <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <a href="#" className="btn btn-primary">{textBoton}</a>
        </div>
    </div>
    ); 
} 

export default Card;
                           

