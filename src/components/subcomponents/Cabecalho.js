import React from 'react';
import { FaHardHat, FaQuestion, FaTimes } from 'react-icons/fa';

class Cabecalho extends React.Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){


			if(e == "abrir"){
					document.querySelector("#modalPainel").classList.toggle("display-none");
			}
			else if(e == "fechar"){
					document.querySelector("#modalPainel").classList.toggle("display-none");
			}
	}
	render(){
		return 	<section className="padding-10 raisin-black sticky-top">
					<h1 className="text-center">
						<FaHardHat /> MRConstruções

						<button className="float-right btn" id="btnOpen" onClick={() => this.handleClick("abrir")}>
							<FaQuestion id="btnOpen"  />
						</button>



					</h1>
					<div className="modal display-none" id="modalPainel" >
						<div className="card padding-16 white modal-content">
							<h3 className="text-center">Sobre</h3>


							<p className="text-justify text-indent-15">A MRConstruções, fundada por Moisés Ebreu Silva da Silva, tem como objetivo
							prestar serviço de qualidade e de confiança na área da construção civil, com preços acessíveis e finalização do trabalho
							no prazo determinado.</p>

							<button className="btn raisin-black btn-close" id="btnClose" onClick={() => this.handleClick("fechar")}>
								<FaTimes id="btnClose" />
							</button>
						</div>
					</div>

				</section>;
	}
}

export default Cabecalho;
