import React, { useState } from 'react'

import IndiretaFilho from './IndiretaFilho'

// useState, consegue criar estado dentro de um componente.
export default props => {

   //nome idade nerds - react Hook
   const [nome, setNome] = useState('?') //uma funcao que altera um determinado atributo vc chama ela de set.
   const [idade, setIdade] = useState(0)
   const [nerd, setNerd] = useState(false)

   function fornecerInformacoes(nome, idade, nerd) {
      setNome (nome)
      setIdade (idade)
      setNerd (nerd)

      //setNome vai receber o parametro, props, chamada nome.
   }

   return (
      <div>
         <div>
            <span>{nome} </span>
            <span><strong>Vao ganhar o mundial em {idade} anos, </strong></span>
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