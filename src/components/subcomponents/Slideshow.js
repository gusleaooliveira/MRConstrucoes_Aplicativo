import React, {useState} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

class Slideshow extends React.Component {
  _isMounted = false;
  constructor(props){
      super(props);

      this.state = { lista: [], erro: null, cont: 0 };

      this.handleClick = this.handleClick.bind(this);

  }
  componentDidMount(){
    this._isMounted =true;
    console.log(window.innerWidth);
    let quantidade = 10;
    let url = "https://apimrconstrucoes.herokuapp.com/imagens/"+quantidade;
    fetch(url)
      .then((res) => res.json())
      .then((resposta) => { this.setState({lista: resposta}); })
      .then((error) => { this.setState({erro: error}); });


  }

  componentWillUnmount(){
    this._isMounted = false;
  }
  handleClick(e){
    let aux = this.state.cont;
    if(aux == this.state.lista.length ){
      this.setState({cont: 0});
    }
    else if(aux < 0) {
      this.setState({cont: (this.state.lista.length - 1)});
    }
    else{
      if(this.state.cont >= 0 && this.state.cont <= (this.state.lista.length -1)){

        if(e.target.id == "prev"){
          this.setState({cont: aux - 1});
        }
        if(e.target.id == "next"){
          this.setState({cont: aux + 1});
        }
      }
    }

    let lista = document.querySelectorAll("#slideshow > div");
    lista.forEach((item, i) => {
      if(item.classList.value != "display-none"){
        item.classList.toggle("display-none");
      }
    });
    if(lista[this.state.cont]){
      lista[this.state.cont].classList.toggle("display-none");
    }
    else {
      lista[0].classList.toggle("display-none");
    }
  }
  render(){
    return  <div>
                <div className="slideshow-container" id="slideshow">
                  <button className="btn prev" id="prev" onClick={this.handleClick}><FaChevronLeft id="prev" /></button>
                  <button className="btn next" id="next" onClick={this.handleClick}><FaChevronRight id="next" /></button>

                  {this.state.lista.map((item, id) => {
                    let display = "display-none";
                    if(id == 0){ display = ""; }
                    return <div className={display} id={"imagem"+id} key={id} >
                              <img src={item["imagem"]} className="image-slideshow" />
                           </div>;
                  })}
                </div>
            </div>;
  }
}

export default Slideshow;
