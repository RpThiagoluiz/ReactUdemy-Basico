import React, { cloneElement } from 'react'



export default (props) => {
   console.log(`Aqui ${typeof props.children.map}`)

   return (
      <div>
         {props.children.map((child, i) => {
            return cloneElement(child, { ...props, key: i })
         })}

         {/*
         
         
         return 
            (
               <div> 
                  <FamiliaMembro nome='Chicoco' sobrenome={ props.sobrenome}/> -passando direto
                  <FamiliaMembro nome='Bentoco' {...props}/> -pegando tudo que ta dentro de props, herdando tudo
                  <FamiliaMembro nome='Capitucoco' sobrenome='Silva' Passando diretamente/>
               </div>
            )
         * o spred '...' ele pega tudo q foi passado como sua props.  sobrenome={ props.sobrenome} - vc so pega um propriedade em expecifico.
         
            Queria referenciar o nome recebido em children. no app.jsx, foi mudado. da forma anterior, somente passava familia, e ele herdava as informacoes e exibia.

            {
               React.Children.map(props.children, (el) => {
                  return cloneElement(el, props)
               })
            }
            * Aqui em cima, eu estou pegando uma parada do React, mapeando os paramentros (porps.children, ()) passando uma funcao dentro do mapeamento,
               para ela me retornar um clone do elemento e suas propriedades. - assim todos os filhos tem acesso as propriedades dos pai, 
               Eu acho q o extends resolve isso mais bonito.


            <div>
               {React.Children.map(props.children, (child, i) => { -* i ali é por causa da Key, ele  é o indice
               return cloneElement(child, { ...props, key: i })
               })}
            </div>

            *O codigo acima ele funciona, porem tem uma maneira de escrever ele mais simplificado.
            
         */
         }
      </div>
   )
}





