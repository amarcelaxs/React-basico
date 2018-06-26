import React from 'react';

class ListaCartao extends React.Component {
  render(){
    let noticias  =  [
      {titulo:'Titulo 1', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'}
      {titulo:'Titulo 1', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'}
      {titulo:'Titulo 1', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'}
      {titulo:'Titulo 1', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'}
      {titulo:'Titulo 1', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'}
      {titulo:'Titulo 1', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'}
      {titulo:'Titulo 1', descricao:' Descricao 1', detalhe:'Detalhe 1', imagem:'https://materializecss.com/images/sample-1.jpg',link:'#teste'}
    ];

    let aux=[];
    let novaLista = [];
    for(lek k=0; k<noticias.length;k++){
        aux.push(noticias[k])
        if(aux.length == 4){
            novaLista.push(aux);
            aux = [];
        }else if (k == noticias.length -1)
    }

    return (

    )
  }
}

export default ListaCartao;
