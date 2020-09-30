import React from 'react';

export default props => {
   const isPar = props.numero % 2 ===0
   
   console.log(props.numero)
   return(
      <div>
        {isPar ? <span>Par</span> : <span>Impar</span>}
        {/*
            pega o numero, verificar se ele é par, se sim na tela vai aparecer par, caso nao seja, impar.
        
        */}
      </div>

   )
}