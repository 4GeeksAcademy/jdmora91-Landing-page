import React from 'react'



const Jumbotron = () => {
  return (
    <div className='jumbotron bg-danger text-white border border-dark fs-1 text-start ps-5 m-2 border-2 mb-2' style={{ height: '300px', width: '100%' }}>
        <h1 className='text-warning'><strong>Las Mejores Hamburguesas!</strong></h1>
        <p className='fs-4 text-warning'> Ven y Aprovecha los mejores precios por la mejores comidas de la zona...  
            Horario: martes a domingos. 
             tenemos expres. </p>
        <button type="button" class="btn btn-primary"> Ordenar </button>


    </div>
  )
}

export default Jumbotron