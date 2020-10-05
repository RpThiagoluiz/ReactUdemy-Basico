import React, { useState } from 'react';

import './Sorteio.css'

export default props => {
   function gerarNumeroNaoContido(min, max, array) {
      const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
      return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
   }


   function gerarNumeros(qtde) {
      const numeros = Array(qtde)
         .fill(0)
         .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
         }, [])
         .sort((n1, n2) => n1 - n2)
      return numeros
   }

   const [qtde, setQtde] = useState(props.qtde || 6) 
   const numerosIniciais = gerarNumeros(qtde)
   const [numeros, setNumeros] = useState(numerosIniciais)

   return (
      <div>
         <h2>MEGA</h2>
         <h3>{numeros.join(' ')}</h3>
         <div>
            <label>Qtde de Numeros</label>
            <input 
               className="Mega-input"
               type="number"
               min="6"
               max="15"
               value={qtde}
               onChange={e=> setQtde(+e.target.value)}
            
            />
         </div>
         <button className="btn-SorteioProf" onClick={_=>setNumeros(gerarNumeros(qtde))}>Gerar Sorteio</button>
      </div>
   )
}

//ta no MD.