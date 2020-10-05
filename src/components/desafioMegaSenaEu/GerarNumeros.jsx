import React, { useState, Fragment } from 'react';

import Sorteio from './Sorteio'
import './Sorteio.css'

export default props => {

   const [num, setNum] = useState(0)

   function sorteioNum(num) {
      setNum(num)
   }


   return (
      <Fragment>
         <span>Numeros Sorteados:</span>
         <Sorteio quandoClicar={sorteioNum} />
      </Fragment>
   )
}
/*
   Faltou nao repetir os numeros sorteados.
   Usei Comunicacao entre componentes de forma indireta ainda.
   no componente Sorteio, ele tem um callback, cb.
   Cada vez q for clicado no button, ele vai resortear os elementos, a function quandoClicar, 
   ta sendo chamada no outro componenete (GerarNumeros, deveria ter trocado os nomes, so q eu fiquei com preguica de da reimport no app.jsx)




*/


