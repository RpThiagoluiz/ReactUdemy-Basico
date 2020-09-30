import React from 'react';

export default function Fragmento(props) {
   return (
      <React.Fragment>
         
         <p>Cuidado com esse erro!!!</p>
      </React.Fragment>
   )
}

/* O erro em questão é return da função que possui elementos adjacentes ou seja que nao estiver envolvido por um div, 
ou outra tag emvolvendo os 2, no caso o h2 e o P.
caso não queira usar div, ou queira outra tag no Reac tem a React.Fragment, que ele quebra como uma div sem envolver no inspecionar.
Assim, ou igual eu fiz e tem a forma reduzida só q ela não recebe props.
<div>
   <h2>Fragmento</h2>
   <p>Cuidado com esse erro!!!</p>
</div>

abreviar ele

<>
   <h2>Fragmento</h2>
   <p>Cuidado com esse erro!!!</p>
</>

<React.Fragment key ='1' > //Assim da. Reduzida n'ao 

*/