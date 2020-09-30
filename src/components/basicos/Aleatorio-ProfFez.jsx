import React from 'react'


export default (props) => {

   /*
   const min = props.min
   const max = props.max
   Versao usada é a Destruct
      ex
         const [ a, b ] = [12 , 5]  - a=12 e b=5
         const { x , y , z } = props   - x=number y=author z=livro, que seram passados no corpo da funcao
         const { x , y , z } =  props - vai da erro, vai flar que Z= undefined se eu passar somente 2 props
         const { x, y } = { x:12, y:13, z:'teste'}  = aqui ja funciona q no caso eu to passando 3 parametros para ele, ele so vai usar 2.
   */

   const { min, max } =  props ;

   const aleatorio = parseInt(Math.random() *(max - min)) + min

   return (
      <div>
         <h2>Valor Aleatorio</h2>
         <p>
           Valor minimo  <strong> {props.min} </strong>
         </p>
         <p>
            Valor maximo <strong> {props.max} </strong>
         </p>
         <p>
            Numero do professor <strong>{aleatorio}</strong>
         </p>
      </div>
   )
}