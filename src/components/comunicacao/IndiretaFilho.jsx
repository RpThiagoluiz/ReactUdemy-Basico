import React from 'react';

import './IndiretaFilho.css'


export default props => {
   // props.quandoClicar - colocado somente como exemplo
   const cb = props.quandoClicar
   const min = 18
   const max = 70
   const gerarIdade = () => parseInt(Math.random() * (max - min) + min) // sevc colocar os bigodes na arrow vc vai precisar chamar o return, sem os bigodes nao há necessdiade de escrever'return'
   const gerarNerd = () => (Math.random() > 0.5)

   // acima é para gerar a idade de forma aleatoria, pode ser escrito de forma literal tbm, passando os valores das const, min e max, diretamente na gerarIdade
   return (
      <div>
         <div>MUNDIAL DE LOL</div>
         <button onClick={_ => cb('Brasileiros', gerarIdade(), gerarNerd())}>
            Click para mais infos!
         </button>
      </div>
   )



   /*
      na props.'' - o que vem aqui é o msm nome do atributo passado pelo pai. No pai ele entra como atributo, e aqui como props.'Js vanilla - argumento'
      * - msm coisa que - <button onClick={function(e) {props.quandoClicar('João', 58, true)}}>
   */
}