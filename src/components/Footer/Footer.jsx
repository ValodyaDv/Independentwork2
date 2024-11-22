import logo from '../../assets/header/tree.svg';
import facebook from '../../assets/footer/facebook.svg';
import instagram from '../../assets/footer/instagram.svg';
import twitter from '../../assets/footer/twitter.svg';
import './Footer.scss';
const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-content'>
					<a href='' className='header__up-logo'>
						<img className='logo-img' src={logo} alt='logo' />
						<p className='logo-text'>Добро.дій</p>
					</a>
					<p className='footer-text'>Не витрачай час даремно</p>
					<div className='footer-media'>
						<a href=''>
							<img src={facebook} alt='facebook' className='footer-media-item' />
						</a>
						<a href=''>
							<img src={twitter} alt='twitter' className='footer-media-item' />
						</a>
						<a href=''>
							<img src={instagram} alt='instagram' className='footer-media-item' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
