import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

/*
   Quando uma function é exportada por default não há necessidade dela ir com o msm nome no import.
   Isso vale tbm para os components importados da biblioteca do react. 
   Menos o React. ele tem que ser igual ta ali.
 */




/*
const el =document.getElementById('root')
ReactDOM.render('Chico babou no meu pe!s', document.getElementById('root'))
isso aqui nao é jsx. Para jsx tem a necessidade de importar o react.
*/

/*

let oi = <strong>Oi Hoje</strong>
ReactDOM.render(
   <div>
      { oi }
      <br/>
      Deu ?!
   </div>, document.getElementById('root')
)
 a variavel foi criada com jsx, para ser renderizada assim, usase {} para que o react intenda que aquilo ali é JS!

 //foi removido pra criar uma novo APP.jsx

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

 ReactDOM.render( 
    <div id="app">
    <Primeiro/>
    <ComParametro
       titulo='Com parametro'
       aluno='Chico'
       nota={7.5} // nota = '7,5' string ali eu passei em forma de number
    /> 
 
    <ComParametro 
    titulo='Tonha'
    aluno='Tonha'
    nota='Tonha'
    />
 
    <Fragmento />
 </div>,
    document.getElementById('root')
 )
 */


 ReactDOM.render(
   <App />,
    document.getElementById('root')
 )