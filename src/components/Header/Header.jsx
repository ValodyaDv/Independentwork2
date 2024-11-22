import './Header.scss';
import logo from '../../assets/header/tree.svg';
const Header = () => {
	return (
		<header className='header'>
			<section className='header__up'>
				<div className='container'>
					<div className='header__up-row'>
						<a href='' className='header__up-logo'>
							<img className='logo-img' src={logo} alt='logo' />
							<p className='logo-text'>Добро.дій</p>
						</a>
						<nav className='header__up-nav'>
							<ul className='header-nav-list'>
								<ul>
									<a href='' className='header-nav-item'>
										Про нас
									</a>
								</ul>
								<ul>
									<a href='' className='header-nav-item'>
										Як долучитися
									</a>
								</ul>
							</ul>
						</nav>
						<button className='header__up-btn'>Посадити дерево</button>
					</div>
				</div>
			</section>
			<section className='header__down'>
				<div className='container'>
					<div className='headeer__down-center'>
						<h1 className='title'>Ліси обʼєднують людей, a люди — країну.</h1>
						<p className='title-text'>
							Місія проєкту — oбʼєднуючи людей, робимо екосистему кращою.
						</p>
						<button className='header__down-btn'>Посадити дерево</button>
					</div>
				</div>
			</section>
		</header>
	);
};

export default Header;
