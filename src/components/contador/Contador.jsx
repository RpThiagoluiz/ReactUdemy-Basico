import React, { Component } from 'react';

import './Contador.css'

export default class Contador extends Component {

   state = {
      numero: this.props.numeroInicial || 0, //se o numero inicial nao for fornecido ele sera 0
      passo: this.props.passoInicial || 1, //se o passo nao for fornecido sera 1
   };

   inc = () => {
      this.setState({
         numero: this.state.numero + this.state.passo, 
      })
   }

   dec = () => {
      this.setState({
         numero: this.state.numero - this.state.passo,
      })
   }

   
   setPasso = (e) => {
      this.setState({
         passo: +e.target.value, //esse + é para converter em inteiro o valor passado no input
      })
   }
   
   setNumInicial = (e) => {
      this.setState({ numero: +e.target.value }) //eu q fiz
   }


   render() {
      return (
         <div className="contador">
            <h2>Contador</h2>
            <span><strong>{this.state.numero}</strong></span>

            <div className="labels">
            <div>
               <label htmlFor="numIncialInput">Passo:</label>
               <input 
               id="numIncialInput"
               type="number"
               value={this.state.numero}
               onChange={this.setNumInicial}
               />
            </div>

            <div>
               <label htmlFor="passoInput">Passo:</label>
               <input 
               id="passoInput"
               type="number"
               value={this.state.passo}
               onChange={this.setPasso}
               />
            </div>
            </div>
            <div className="btns">
               <button onClick={this.inc}> + </button>
               <button onClick={this.dec}> - </button>
            </div>
         </div>
      )
   }
}

/*
export ali em cima, ou export no final...
   class Contador extends Component {}

   export default Contador

Na class, vc tem o render, que rendezida o jsx para ele da o return no navegador. ou algo assim.mas tem q ter

state = {
      numero: this.props.numeroInicial
   }


   *flar que este estado, numero, vai comecar com o numero instanciado no numeroInicial, que foi passado no elemento no app.jsx

   *Assim vou pode ir na props, numeroInicial, e mudar o estado do seu componente diretamente por la.

   tbm pode fazer pelo construtor.

   fica assim:
      constructor(props) {
      super(props)
      this.state = {
         numero:this.props.numeroInicial
      }
   }



   //- Probs

   state = {
      numero: this.props.numeroInicial
   };

   inc(){
      this.setState({
         numero: this.state.numero + 1
      })
   }

   render() {
      return (
         <div>
            <h2>Contador</h2>
            <span>{this.state.numero}</span>
            <button onClick={this.inc}> + </button>
         </div>
      )
   }

   *- Quando vc clica no bottao da um BO, o this fica perdido sem saber pra que lado ele esta sendo chamado. ai pra corrigr isso tem algumas formas.
      1 - )
             constructor(props){
               super(props)
               this.inc = this.inc.bind(this)
            }
      Aqui o construtor auxiliado pelo super, pega a props e fla que o this a ser usado é o da func atual, inc. Funcao incremento para acabar com erro. -- FEIO DEMAIS ISSO

      2 - )
      Transformando isso em arrow function.

            inc(){
               this.setState({
                  numero: this.state.numero + 1
               })
            }
      É o jeito mais bonito de resolver, q eu acho, porq... Arrow function ela é atual, facil de escrever, tem um scop e um return lindo, sem contar que o this referenciado nela é cabuloso.
      E outra, isso so aconteceu porq a parada aq ta em class. Se não fosse em class tava tudo tranquilo galerinha. like like like
            inc = () => {
               this.setState({
                  numero: this.state.numero + 1
               })
            }

      3 - )
      No click, onClick, transformar a funcao em arrow.
            <button onClick={this.inc}> + </button>
         fica assim.
            <button onClick={_=>this.inc()}> + </button>


*- setPasso o setNumInicial , vou deixar pra o thiago do futuro intender, pra ve se ele aprendeu tudo q ta acontecendo msm. q o thiago do passado nao intendeu muito bem....

*/

