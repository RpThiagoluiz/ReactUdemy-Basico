import React from 'react'
import If, { Else } from './If'

export default props => {

   //Basicamente uma condicional usando tags.

   const usuario = props.usuario || {} // || {} - evitar que haja erro de undifed caso nao seja passada nenhuma informacao.

   return (
      <div >

            <If test={usuario && usuario.nome}>
               Seja bem vindo <strong>{usuario.nome}</strong>!
               <Else>
                  Seja bem vindo <strong>Man</strong>!
               </Else>
            </If> 
         {
            /*
            Msm coisa q o primeiro, so q sem a importacao do Else.
            
            <If test={usuario && usuario.nome}>
               Seja bem vindo <strong>{usuario.nome}</strong>!
            </If> 
   
            <If test={!usuario || !usuario.nome}>
               Seja bem vindo <strong>Man</strong>!
            </If>
         
         
            */
         }
      </div>

)
}