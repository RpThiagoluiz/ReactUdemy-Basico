import React from 'react';

import alunos from '../../data/alunos'


export default props => {
   console.log(alunos)

   /* 
      const li1 = (
         <li> 
            {alunos[0].id} {aluno[0].nome} {aluno[0].nota}
         </li>
      )
         *esse caso aqui vc deve fazer um a um, ate dar todos. quando vc usa o map, ele pega tudo q esta dentro do array, mapea, e vc passa os valores para ele.
   
   */



   const lis = alunos.map((aluno) => {
      return (
         <li key={aluno.id}>
            {aluno.id} ) {aluno.nome} -> {aluno.nota} {/* Somente uma foda de escrever para sair no Navegador. pode remover `) e ->` s[o estico] */}
         </li>
      )
   })


   return(
      <div>
         <ul style={ { listStyle:'none', color:"#240E8B"} }>
            {lis}
         </ul>
      </div>
   )
}

/*
   Voltar um erro de key novamente, porq o react precisa de uma key em uma lista para indentificar as eventuais mudancas no array.
   <li key={aluno.id}> estou flando q esta lista, possui uma key, q essa key ela corresponde ao id do aluno.
*/