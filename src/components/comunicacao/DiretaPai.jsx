import React from 'react';

import DiretaFilho from './DiretaFilho'

/*
   uma vez q o componente é instaciado dentro do componente pai, as propriedades sao passadas para o pai, havendo assim uma comunicação entre eles.
   

*/
export default props => {
   return (
      <div>
         <DiretaFilho texto='Filho 1' numero={25} bool={true} /> 
         <DiretaFilho texto='Filho 2' numero={17} bool={false} />
      </div>
   )
}