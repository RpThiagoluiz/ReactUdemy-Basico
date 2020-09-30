import React from 'react'


//todos os componentes sao escrito com a primeira letra em maiusculo.
//esse aqui Componente Funcional - no ponto de vista do react o arquivo.js ou .jsx nao faz diferenca
export default function Primeiro () {
   const msg = 'Ola Mundo!'
   return (
   <div>
      
   <p> { msg } </p>
   </div>
   )
}