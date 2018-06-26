import React from 'react';

class Cartao extends React.Component {
  render(){


    return (
      <div className="card sticky-action">
       <div className="col ">
         <div className="card">
           <div className="card-image">
             <img src="https://materializecss.com/images/sample-1.jpg" />
             <span className="card-title">Titulo</span>
           </div>
           <div className="card-content">
             <p>Descrição</p>
           </div>
           <div className="card-action">
             <a href="#">Ver mais...</a>
           </div>
           <div className="card-reveal">
             <span className="card-title grey-text text-darken-4">Titulo</span>
             <p>Detalhe com um texto</p>
           </div>
         </div>
       </div>
     </div>


    )
  }
}

export default Cartao;
