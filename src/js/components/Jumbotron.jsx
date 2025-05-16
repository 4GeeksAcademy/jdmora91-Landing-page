import React from 'react'



const Jumbotron = () => {
  return (
    <div className='jumbotron bg-secondary text-white border border-dark fs-1 text-start ps-5 ms-0'>
        <h1 className='text-dark'><strong>Las Mejores Hamburguesas!</strong></h1>
        <p className='fs-5 text-muted'> Ven y Aprovecha los mejores precios por la mejores comidas de la zona...  
            Horario: martes a domingos. 
             tenemos expres. </p>
        <button type="button" class="btn btn-primary"> Ordenar </button>


    </div>
  )
}

export default Jumbotron