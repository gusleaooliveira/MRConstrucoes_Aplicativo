import React from 'react';
import Slideshow from './subcomponents/Slideshow';

class Inicio extends React.Component {
	render(){
		return 	<section className="padding-16  ">
							<h2 className="text-center">Início</h2>

							<Slideshow />
						</section>;
	}
}

export default Inicio;
