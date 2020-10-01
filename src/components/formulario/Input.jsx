import React, { useState } from 'react';

import './Input.css'

export default props => {

//nao consegue mudar o estado do componente pela interface grafica, vc tem q mudar o estado do componente primeiro pra assim mudar a interface.

   const [valor, setValor] = useState('Inicial') //esse atributo value, do input corresponde a essa variavel.

   function quantoMudar(e) {setValor(e.target.value)}  
   return (
      <div className="Input">
         <h2>{valor}</h2>
         <input value={valor} onChange={quantoMudar}/>
         <input value={valor} readOnly/>
         <input value={undefined} />
      </div>
   )
}

/*

   <input value={valor}/> aqui vc nao consegue digitar e mudar a interface. pra mudar vc tem q criar uma function.
   <h2>{valor}</h2> * - tudo que for digitado no input, sera usando para escrever no campo valor do h2.


function quantoMudar(e) {console.log(e.target.value)} //esse (e) pode ser qlq coisa, coloca por ser evento, logo `e` de `event` 
   *- nao esta mudando o valor, ta adcionando ao valor inicial oq vc ta escrevendo no input.


   <input value={valor} readOnly/> *- diz para o react, que tem o componente contudo vc nao esta tratando o componente valor, ela esta soment para leitura.
   <input value={undefined} /> *- nao possui value, ou é null, vc colocar null o console apresenta erro, igual o de cima quando nao coloca readOnly.
*/