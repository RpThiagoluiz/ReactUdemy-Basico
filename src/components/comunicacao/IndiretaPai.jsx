import React from 'react'

import IndiretaFilho from './IndiretaFilho'

export default props => {

   //nome idade nerds
   let nome = '', idade = 0, nerd = false


   function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
      nome = nomeParam
      idade = idadeParam
      nerd = nerdParam

      console.log(nomeParam,idadeParam,nerdParam)
   }

   return (
      <div>
         <div>
            <span>{nome} </span>
            <span><strong>{idade}</strong></span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
         </div>
         <IndiretaFilho quandoClicar={fornecerInformacoes} >

         </IndiretaFilho>
      </div>
   )


   /*
   
      function fornecerInformacoes (nome,idade,nerd) {
         console.log (nome,idade,nerd)
      }
      return (
         <div>
            Pais
            <IndiretaFilho quandoClicar={fornecerInformacoes} >
   
            </IndiretaFilho>
         </div>
      )
      }
         O atributo passado `quandoClicar` - pode ser qlq nome.
   
   
   */
}