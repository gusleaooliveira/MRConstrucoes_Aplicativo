import React from 'react';
import { FaFacebookSquare, FaFacebookMessenger, FaTelegramPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa';

class MenuSocial extends React.Component{
	render(){
		return 	<aside className="bar">
					<a href="https://www.facebook.com/MRConstrucoes2016/"  className="btn blue-facebook">
						<FaFacebookSquare />
					</a>
					<a href="https://www.facebook.com/moises.ebreu.9"  className="btn blue-messenger">
						<FaFacebookMessenger />
					</a>
					<a href="https://t.me/mrconstrucoesapp"  className="btn blue-telegram">
						<FaTelegramPlane />
					</a>
					<a href="https://www.instagram.com/mrconstrucoesapp/"  className="btn gradient-instagram">
						<FaInstagram />
					</a>
					<a href="https://wa.me/5551980514512"  className="btn green-whatsapp">
						<FaWhatsapp />
					</a>
				</aside>;
	}
}

export default MenuSocial;
