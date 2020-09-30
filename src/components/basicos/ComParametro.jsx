import React from 'react'

export default function ComParametro(props) {
   console.log(props)
   const status = props.nota >= 7 ? 'Aprovado' : 'ReCUperacao'
   return (
      <div>
         <h4>{props.titulo}</h4>
         <p>
            <strong>{props.aluno} </strong>
               tem nota {props.nota}
            <br />
          O aluno foi :
               <strong> {status} </strong>
         </p>
      </div>
   )
}

//parametro   é no JS classico no React, são chamado de props. 

// sendo assim, as duas PROPRIEDADES foram passadas como PARAMETROS para a função.

// baseado nos parametros eu consigo criar uma expressao, como o valor passado  é numerico ja consegue fazer a comparação.

/* 

   a props ela é apenas leitura caso queira trabalhar com ela, pode criar uma const e passar ela no lugar da props. 
      ex.:
         const notInt = Math.ceil(props.nota) - arendondar a nota.
         no lugar de passar props.nota eu passo a variavel.

         <strong> { notInt} <strong/>


*/