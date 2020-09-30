import React from 'react';

export default (props) => {
   const randomNumber = Math.floor(Math.random(props.number) * 10 + 1)
   console.log(`O numero Passado foi ${props.number} e saiu o numero ${randomNumber}`)
   return (
      <React.Fragment>
         
         <p>
            Meu numero aleatorio <strong>{randomNumber}</strong>
         </p>
      </React.Fragment>
   )
}