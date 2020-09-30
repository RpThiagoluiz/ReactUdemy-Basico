import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import RandomNumber from './components/basicos/RandomNumber'
import Aleatorio from './components/basicos/Aleatorio-ProfFez'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutosEu from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'


import Card from './components/layout/Card'
import './App.css'


/* 
               Simplificar isso 


export default function App() {
    return (
      <div id="app">
           <h1>Fundamentos React</h1>
            
            <Fragmento />
            
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
            
               <Primeiro />
      </div>
   )
}
*/

// se retornar o default pode ter uma funcao anonima.
//Como tem um unico parametro pode tirar () da arrow function
// pode tirar {} juntamente com o return, tira o corpo da funcao junto com o return

export default _ =>

   <div className="App">
      <h1>Fundamentos React Arrow </h1>

      <div className="Cards">

         <Card titulo='#9 Comunicacao Direta' color='#E8175D'>
            <DiretaPai />
         </Card>

         <Card titulo='#8.1 Renderizacao de Condicional' color='#eec9d2'>
            <UsuarioInfo usuario={{ nome: 'Thiago Louise' }} />
            <UsuarioInfo usuario={{ nome: '' }} />   {/* Nome foi passado, contudo esta vazio. */}
            <UsuarioInfo usuario={'#!#!SD$@cabe;a'} /> {/* a propriedade nome n'ao foi passado, mostra a mensagem no If.js */}
         </Card>

         <Card titulo='#8 Par ou Impar' color='#451e3e'>
            <ParOuImpar numero={208} />
         </Card>

         <Card titulo='#7 Desafio Repeticao - Eu' color='#7BD5F5'>
            <TabelaProdutosEu />
         </Card>


         <Card titulo='#6 Repeticao' color='#83AF9B'>
            <ListaAlunos />
         </Card>

         <Card titulo='#5 Componente Com Filho' color='#F7DB4F'>
            <Familia sobrenome='Gordito'>
               <FamiliaMembro nome='Chico' />
               <FamiliaMembro nome='Bento' />
            </Familia>
         </Card>

         <Card titulo='#4 Aleatorio' color='#F8B195'>
            <Aleatorio min={0} max={10} />
         </Card>

         <Card titulo='#4 Random Number' color='#6C5B7B'>
            <RandomNumber number={0} />
         </Card>

         <Card titulo='#3 Fragmento' color='#355C7D'>
            <Fragmento />
         </Card>

         <Card titulo='#2 Com Parametro Chico' color=''>
            <ComParametro
               titulo='Com parametro'
               aluno='Chico'
               nota={7.5} // nota = '7,5' string ali eu passei em forma de number
            />
         </Card>


         <Card titulo=" #2 Com Parametro Tonha" color='#FF8C94'>
            <ComParametro
               titulo='Tonha'
               aluno='Tonha'
               nota='Tonha'
            />
         </Card>

         <Card titulo="#1 Primeiro Componente" color='#CC527A' >
            <Primeiro />
         </Card>
      </div>
   </div>

//tbm pode ser, pra nao me confundir muito export default () => (CONTEUDO- CORPO)
