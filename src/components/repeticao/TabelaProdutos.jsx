import React from 'react'

import produtos from '../../data/produtos'

import './TabelaProdutos.css'



   /*
      eu dei um segundo parametro `i`,
      className={i % 2 ==0 ? 'Par' : ''}
      la no css eu falei q as linhas que tiver .Par receberam um cor diferente no background.
      no className eu criei uma condicional para que isso seja atingido.
      i for modulo, dividido por 2, e o resultado for 0, se isso for verdade o numero é par, e style do .Par vai ser aplicado por ela,
      caso nao seja, nda acontece. no Css eu coloquei tbm se ele for impar mas optei por nao usar.


      com ==m ,'string' com number, tava gerando um warning, q o react pediu pra ser === para comparar number com number. Restrita
   */

export default (props) => {
   console.log(`Aqui esta os produtos: ${produtos}`)

   const tabelaProdutos = produtos.map((produto, i) => {
      return (


         <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td> R$ {produto.preco}</td>
         </tr>


)
})

return (
   <div>
         <table>
            <thead>
            <tr>
               <th>Id</th>
               <th>Nome</th>
               <th>Preco</th>
      
            </tr>
            </thead>
            <tbody>
               {tabelaProdutos}
            </tbody>
         </table>
      </div>
   )
}


/*
   prof


expor default (props) => {

   funtion getLinhas () {
      return prpdutos.map(produtos => {
         return (
            <tr>
               <td>{produto.id}</td>
               <td>{produto.nome}</td>
               <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            *fixar em 2 casas decimais o preco dos produtos.
            * trocar o ponto por virgula
            </tr>

         )
      })
   }
}

return (
   <div>
      <table>
      <tr>
         <th>Id</th>
         <th>Nome</th>
         <th>Preco</th>
      </tr>
      <tboby>
         {getLinhas}
      </tboby>

      </table>
   </div>
)




*/