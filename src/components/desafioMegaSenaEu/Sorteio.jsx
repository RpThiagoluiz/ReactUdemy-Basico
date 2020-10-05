import React from 'react';

export default props => {


   /*
         const jogo = [];
         for (var i = 1; i < 6; i++) {
            var numero = Math.round(Math.random() * 60 + 1);
            if (jogo[i] !== numero) {
               jogo.push(numero);
            }
         }

         como na lista, salvar os elemento vazio, 6, e para elemento vai haver um sorteio.
   */
   const cb = props.quandoClicar
   const min = 1
   const max = 60

   const numeros = () => parseInt(Math.random() * (max - min)+ min)
   
   

   return (
      <React.Fragment>
         <p>
            <span>
               <strong>
                  {numeros()} <br /> {numeros()} <br />
                  {numeros()} <br /> {numeros()} <br />
                  {numeros()} <br /> {numeros()} <br />
               </strong>
               <button className="btn-Sorteio" onClick={_=> cb(numeros())} > Sortear

               </button>
            </span>

         </p>
      </React.Fragment>
   )
}