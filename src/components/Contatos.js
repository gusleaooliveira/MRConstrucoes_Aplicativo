import React from 'react';
import MenuSocial from './subcomponents/MenuSociais';
import { FaTimes } from 'react-icons/fa';

class Contatos extends React.Component {
	constructor(props){
		super(props);

		this.state = { nomeContatos: '', emailContatos: '', telefoneContatos: '', cidadeContatos: '', ruaContatos: '', estadoCompletoContatos: '', estadoContatos: '', numeroContatos: '', cidades: [], estados: [], erro: false };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount(){
		let url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    	fetch(url)
			.then((res) => res.json())
			.then((resposta) => { this.setState({estados: resposta}); })
			.then((error) => { this.setState({erro: error}); });

		let url2 = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+this.state.estadoContatos.value+"/distritos";
		
		fetch(url2)
			.then((res) => res.json())
			.then((resposta) => { this.setState({cidades: resposta}); })
			.then((error) => { this.setState({erro: error}); });
	}
	handleChange(evento){
		let continuar = true;
		this.state.estados.forEach((estado,id) => {
			if(estado["nome"] == this.state.estadoContatos.value){
				continuar = false;
			}
		});
		console.error(continuar);
		if(continuar == true){
			let url2 = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+this.state.estadoContatos+"/distritos";
			let url3 = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+this.state.estadoContatos;
			console.warn(this.state.estadoContatos);
			fetch(url2)
				.then((res) => res.json())
				.then((resposta) => { this.setState({cidades: resposta}); })
				.then((error) => { this.setState({erro: error}); });
			fetch(url3)
				.then((res) => res.json())
				.then((resposta) => {this.setState({estadoCompletoContatos: resposta["nome"]})})
				.then((error) => { this.setState({erro: error}) });	
		}

		let nome = evento.target.name;
		let valor = evento.target.value;

		this.setState({ [nome] : valor });

		console.log("State: "+JSON.stringify(this.state));
	}
	handleSubmit(evento){
		console.log("Depoimentos: "+JSON.stringify(this.state));
		evento.preventDefault();


		let objeto = {
			"nome": this.state.nomeContatos,
			"email": this.state.emailContatos,
			"telefone": this.state.telefoneContatos,
			"cidade": this.state.cidadeContatos,
			"estado": this.state.estadoCompletoContatos,
			"rua": this.state.ruaContatos,
			"numero": this.state.numeroContatos
		};

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(objeto)
		};

		fetch("https://apimrconstrucoes.herokuapp.com/contatos", requestOptions)
			.then((response) => response.json())
			.then((data) => { alert("Salvo com sucesso!") });

		document.querySelector("#modalSucesso").classList.toggle("display-none");
		document.querySelector("#formulario").reset();
		this.setState({nomeContatos: '', emailContatos: '', telefoneContatos: ''});

		
	}
	handleClick(e){
		if(e == "abrir"){
				document.querySelector("#modalSucesso").classList.toggle("display-none");
		}
		else if(e == "fechar"){
				document.querySelector("#modalSucesso").classList.toggle("display-none");
		}
		else if(e == "estado"){
			let continuar = true;
			this.state.estados.forEach((estado,id) => {
				if(estado["nome"] == this.state.estadoContatos.value){
					continuar = false;
				}
			});
			console.error(continuar);
			if(continuar == true){
				let url2 = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+this.state.estadoContatos+"/distritos";
				let url3 = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+this.state.estadoContatos;
				console.warn(this.state.estadoContatos);
				fetch(url2)
					.then((res) => res.json())
					.then((resposta) => { this.setState({cidades: resposta}); })
					.then((error) => { this.setState({erro: error}); });
				fetch(url3)
					.then((res) => res.json())
					.then((resposta) => {this.setState({estadoCompletoContatos: resposta["nome"]})})
					.then((error) => { this.setState({erro: error}) });	
			}
		}
	}
	render(){
		return 	<section className="padding-16  ">

					<h2 className="text-center">
						Contatos
					</h2>

			<div className="modal display-none" id="modalSucesso">
				<div className="card padding-16 margin-16 green">
					<h3 className="text-center">Sucesso</h3>
					<p className="text-justify text-center">Seus dados foram salvos com sucesso!</p>
				</div>

				<button className="btn raisin-black btn-close" id="btnClose" onClick={() => this.handleClick("fechar")}>
					<FaTimes id="btnClose" />
				</button>
			</div>

          <div className="card padding-10 margin-5 light-gray">
							<h3 className="text-center">Redes Sociais</h3>

              <p className="text-justify text-indent">Para entrar em contato conosco, veja nossas redes sociais, ou preencha o formulário para entrarmos em contato.</p>

              <MenuSocial />
          </div>

					<form className="padding-5" id="formulario" onSubmit={this.handleSubmit}>
						<div className="card padding-5 light-gray">
							<h3 className="text-center padding-10">
								Entrar em contato:
							</h3>

							<label htmlFor="nome">Nome:</label>
							<input value={this.state.nomeContatos.value} required onFocus={this.handleChange} onChange={this.handleChange}  type="text" id="nomeContatos" name="nomeContatos" placeholder="Digite seu nome completo" className="input white border-bottom-blue-twitter-focus" />


 							<label htmlFor="email">Email:</label>
 							<input value={this.state.emailContatos.value} onFocus={this.handleChange} onChange={this.handleChange}  type="email" id="emailContatos" name="emailContatos" placeholder="Digite seu email" className="input white  border-bottom-blue-twitter-focus" />

 							<label htmlFor="telefone">Telefone:</label>
 							<input value={this.state.telefoneContatos.value} required onFocus={this.handleChange} onChange={this.handleChange}  type="tel" id="telefoneContatos" name="telefoneContatos" placeholder="Digite o seu telefone" className="input white border-bottom-blue-twitter-focus" />
							
							<label htmlFor="estado">Sigla do Estado:</label>
							<input list="listaEstados" maxLength="2" id="estadoContatos" required name="estadoContatos" value={this.state.estadoContatos.value} onFocus={this.handleChange} onClick={() => this.handleClick("estado")} placeholder="Digite a sigla do seu estado" onChange={this.handleChange} className="input white border-bottom-blue-twitter-focus"/>
							<datalist id="listaEstados" name="listaEstados">
							{this.state.estados.map((item, id) => { 
								return  <option value={item["sigla"]}>{item["nome"]}</option>;
							})}		
							</datalist>

							<label htmlFor="cidade">Cidade:</label>
							<input list="listaCidades" required value={this.state.cidadeContatos.value} onFocus={this.handleChange}  onChange={this.handleChange} id="cidadeContatos" placeholder="Digite a sua cidade" name="cidadeContatos" className="input white border-bottom-blue-twitter-focus" />
							<datalist id="listaCidades" name="listaCidades">
								{this.state.cidades.map((item, id) => {
									return <option value={item["nome"]}>{item["nome"]}</option>
								})}
							</datalist>

						<div className="grid">		
							<div className="column-5 margin-left-5">
								<label  htmlFor="rua">Rua/Avenida:</label>
								<input value={this.state.ruaContatos.value} required onChange={this.handleChange} onFocus={this.handleChange} type="text" id="ruaContatos" name="ruaContatos" placeholder="Digite a rua ou avenida" className="input white border-bottom-blue-twitter-focus" />
							</div>	
							<div className="column-5 margin-left-5">
								<label htmlFor="numero">Número:</label>
								<input value={this.state.numeroContatos.value} required onChange={this.handleChange} onFocus={this.handleChange} type="number" id="numeroContatos" name="numeroContatos" placeholder="Digite seu número da casa" className="input white border-bottom-blue-twitter-focus" />
							</div>
						</div>
						
 							<br/>
 							<input type="submit" value="Salvar" className="btn btn-block eggplant" />
 						</div>
					</form>


				</section>;
	}
}

export default Contatos;
