import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect , Link} from 'react-router-dom';
import { FaHome, FaImages, FaConciergeBell, FaPhoneAlt } from 'react-icons/fa';
import Inicio from '../Inicio';
import Servicos from '../Servicos';
import Contatos from '../Contatos';
import Galeria from '../Galeria';

class Menu extends React.Component {
	constructor(props){
			super(props);

			this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		let menu = document.querySelectorAll("#menu > a");

		menu.forEach((item, i) => {
				item.classList.remove("btn-activate");
		});
		menu[e].classList.add("btn-activate");




	}
	render(){
		return 	<Router>


			        <Redirect from="*" to="/inicio" />

					<nav className="bar  bar-mobile container raisin-black" id="menu">
						<Link to="/galeria" className="btn eggplant" onClick={() => this.handleClick(0)}>
							<FaImages  />
							<span className="hide-on-mobile" > Galeria</span>
						</Link>						

						<Link to="/inicio"  className="btn eggplant btn-activate"  onClick={() => this.handleClick(1)}>
							<FaHome  />
							<span className="hide-on-mobile" > Início</span>
						</Link>

						<Link to="/servicos"   className="btn eggplant" onClick={() => this.handleClick(2)}>
							<FaConciergeBell  />
							<span className="hide-on-mobile"> Serviços</span>
						</Link>

						<Link to="/contatos" className="btn eggplant"  onClick={() => this.handleClick(3)}>
							<FaPhoneAlt />
							<span className="hide-on-mobile" > Contato</span>
						</Link>
					</nav>

						<Switch>
								<Route path="/inicio" component={Inicio} />
								<Route path="/servicos" component={Servicos} />
								<Route path="/contatos" component={Contatos} />
								<Route path="/galeria" component={Galeria} />
						</Switch>
				</Router>;
	}
}

export default Menu;
