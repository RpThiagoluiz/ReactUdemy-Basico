import React from 'react'

import './Card.css'

export default props => {

   const cardStyle = { 
      //background-color. p JSX nao aceita - em objetos, logo usasse camelCase. || 'or' ta como cor padrao, caso n'ao seja passada!
      backgroundColor : props.color || '#F00',
      borderColor: props.color || '#F00'
   }
   return (
      <div className="Card" style={cardStyle}> 
         <div className="Title"><h2>{props.titulo}</h2></div>
         <div className="Content">{props.children}</div>
      </div>
   )
}
/*
   Pode pasar um objeto literal dentro do style. 
      style = { {backgroundColor : props.color || '#F00',borderColor: props.color || '#F00'} }
   Funciona do msm jeito.

*/