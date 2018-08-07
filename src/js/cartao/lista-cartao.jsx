import React from 'react';
import Cartao from './cartao';

class ListaCartao extends React.Component {
  render(){
    let noticias  =  [
      {titulo:'Titulo 1', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'},
      {titulo:'Titulo 2', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'},
      {titulo:'Titulo 3', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'},
      {titulo:'Titulo 4', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'},
      {titulo:'Titulo 5', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'},
      {titulo:'Titulo 6', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'},
      {titulo:'Titulo 7', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'}
    ];

    let aux=[];
    let novaLista = [];
    for(let k=0; k<noticias.length;k++){
        aux.push(noticias[k]);
        if(aux.length == this.props.qtdLinha){
            novaLista.push(aux);
            aux = [];
        }else if (k == noticias.length -1){
          novaLista.push(aux);
        }
      }

      let tamanhoCol = "col m" + this.props.tamanhoCol;

      let listaCartoes = function(grupo){
          return grupo.map(function(item,index){
            return (
              <div key={index} className={tamanhoCol}>
                  <Cartao dados={item} />
              </div>
            );
          });
      };

      let linha = novaLista.map(function(grupo,index){
        return (
          <div key={index} className="row">
            {listaCartoes(grupo)}
          </div>
        );
      });

      console.log(novaLista);
    return (
      <div>
        {linha}
      </div>
    );
  }
}

export default ListaCartao;
