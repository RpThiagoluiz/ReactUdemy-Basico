import React, {useState, Fragment} from 'react';

import Sorteio from './Sorteio'


export default props => {

   const [num, setNum] = useState(0)

   function sorteioNum(num) {
      setNum (num)
   }


   return(
      <Fragment>
         <span>Numeros Sorteados:</span>
         <Sorteio quandoClicar = {sorteioNum}/>
      </Fragment>
   )
}



