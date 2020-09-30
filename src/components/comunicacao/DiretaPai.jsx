import React from 'react';

import DiretaFilho from './DiretaFilho'

/*
   uma vez q o componente é instaciado dentro do componente pai, as propriedades sao passadas para o pai, havendo assim uma comunicação entre eles.
   se vc trocar a ordem, ali e mandar as informações do pai pra filho, vc só vai inverter. O pai passa a ser filho e o filho passa a ser pai.

   se não for usar props, tem usar o estado do componente.
   
*/
export default props => {
   return (
      <div>
         <DiretaFilho texto='Filho 1' numero={25} bool={true} /> 
         <DiretaFilho texto='Filho 2' numero={17} bool={false} />
      </div>
   )
}