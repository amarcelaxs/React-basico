import React from 'react';

class Cartao extends React.Component {
  render(){


    return (
      <div className="card sticky-action">
       <div className="col ">
         <div className="card">
           <div className="card-image">
             <img src={this.props.dados.imagem} />
             <span className="card-title">Titulo</span>
           </div>
           <div className="card-content">
             <p>{this.props.dados.descricao}</p>
           </div>
           <div className="card-action">
             <a href={this.props.dados.link}>Ver mais...</a>
           </div>
           <div className="card-reveal">
             <span className="card-title grey-text text-darken-4">{this.props.dados.titulo}</span>
             <p>{this.props.dados.detalhe}</p>
           </div>
         </div>
       </div>
     </div>


    )
  }
}

export default Cartao;
