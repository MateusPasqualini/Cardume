import React from 'react';

function Chekins(chekin) {

    if (chekin!= null) {

        return (
            <div>
            <p className='card-title'>{chekin.titulo}</p>
            <p className='card-text'>{chekin.nome}</p>
            </div>
        )
    }
    return null
  }
  
  export default Chekins;