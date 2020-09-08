import React from 'react';
import { FaPaintRoller , FaDraftingCompass, FaBolt, FaHammer, FaHardHat, FaTools, FaChevronDown } from 'react-icons/fa';

class Servicos extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			lista: [
				{"id": 0, "servico": "Pinturas", "descricao": "Fazemos pinturas de edificios em geral." , "icone": <FaPaintRoller /> },
				{"id": 1, "servico": "Obras de alvenaria.", "descricao": "Construimos casas e prédios. Fazemos também reformas e acabamentos.", "icone": <FaDraftingCompass /> },
				{"id": 2, "servico": "Elétrica", "descricao": "Fazemos instalação e manutenção elétrica.", "icone": <FaBolt /> },
				{"id": 3, "servico": "Instalação e Acabamentos", "descricao": "Fazemos a instalações e acabamentos em geral.", "icone": <FaHammer /> },
				{"id": 4, "servico": "Andaimes e Estruturas Temporárias", "descricao": "Montagem e desmontagem de andaimes e outras estruturas temporárias.", "icone": <FaHardHat/> },
				{"id": 5, "servico": "Reparação e Limpeza", "descricao": "Reparação de canteiro e limpeza de terreno.", "icone": <FaTools /> }
			]
		};

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){

		let descricao = document.querySelector("#"+e.target.id+"descricao");
		if(descricao != undefined){
			descricao.classList.toggle("display-none");
		}
		else {
			console.log("Não consegui!");
		}
	}
	render(){
		let conteudo = this.state.lista.map((item, id) => {
			return 	<div key={id}>
								<button className="btn btn-block eggplant" id={"servico"+id} onClick={this.handleClick}>
									<span className="float-left" id={"servico"+id}>
										{item["icone"]} {item["servico"]}
									</span>
									<span className="float-right" id={"servico"+id}>
										<FaChevronDown />
									</span>
								</button>

								<p className="padding-16 white text-justify text-indent-10 display-none" id={"servico"+id+"descricao"}>
									{item["descricao"]}
								</p>
							</div>;
		});
		return  <section className="padding-16">
                    <h2 className="text-center">Serviços</h2>

                    {conteudo}
                </section>;
	}
}

export default Servicos;
