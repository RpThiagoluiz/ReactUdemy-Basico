import React from 'react';


export default props => {
   // props.quandoClicar - colocado somente como exemplo
   const cb = props.quandoClicar
   return (
      <div>
         <div>Filho</div>
         <button onClick={ _ => cb ('Enzo', 14,false)}>
            Infos - Aparece no Console.(evento de Click)
         </button>
      </div>
   )



   /*
      na props.'' - o que vem aqui é o msm nome do atributo passado pelo pai. No pai ele entra como atributo, e aqui como props.'Js vanilla - argumento'
      * - msm coisa que - <button onClick={function(e) {props.quandoClicar('João', 58, true)}}>
   */
}