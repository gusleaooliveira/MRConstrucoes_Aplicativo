import React from 'react';
import { FaTimes } from 'react-icons/fa';


class GaleriaLista extends React.Component {
  constructor(props){
      super(props);

      this.state = { lista: [], erro: null };

      this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    // console.log(window.innerWidth);
    let url = "https://apimrconstrucoes.herokuapp.com/imagens";
    fetch(url)
      .then((res) => res.json())
      .then((resposta) => { this.setState({lista: resposta}); })
      .then((error) => { this.setState({erro: error}); });
  }
  
  handleClick(e){

    let modal = document.querySelector("#"+e);
    console.log(modal);
    if(modal != undefined){
      modal.classList.toggle("display-none");
    }
  }
  render(){
    return  <div className="padding-10">
                <h2 className="text-center">Imagens dos trabalhos:</h2>

                <div className="grid container">
                  {this.state.lista.map((item, id) => {
                    return  <img src={item["imagem"]} alt={"imagem-"+id} className="image-gallery" key={id} onClick={() => this.handleClick("imagem"+id)} />;
                  })}
                </div>

                <div id="modais">
                  {this.state.lista.map((item, id) => {
                    return  <div className="modal display-none" id={"imagem"+id} key={id}>
                              <img src={item["imagem"]} className="image-modals" />

                              <button className="btn close" onClick={() => this.handleClick("imagem"+id)}><FaTimes /></button>

                              <p className="text-center" id="caption"></p>
                            </div>;
                  })}
                </div>
            </div>;
  }
}

export default GaleriaLista;
