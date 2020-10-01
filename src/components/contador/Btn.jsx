import React from 'react';

export default props => {
   return (
      <React.Fragment>
         <button onClick={props.setInc}> + </button>
         <button onClick={props.setDec}> - </button>
      </React.Fragment>
      
   )
}