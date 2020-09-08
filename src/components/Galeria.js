import React from 'react';
import GaleriaLista from './subcomponents/GaleriaLista';

class Galeria extends React.Component {
	constructor(props){
		super(props);


	}

	render(){
		return <section className="padding-top-16 padding-bottom-16 padding-left-10 padding-right-10">
					<h2 className="text-center">Galeria</h2>

					<GaleriaLista />
				</section>;
	}
}

export default Galeria;
