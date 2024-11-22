import './Card.scss';
const Card = ({ img, title, text }) => {
	return (
		<div className='join-card'>
			<img className='join-card-img' src={img} alt='' />
			<h2 className='join-card-title'>{title}</h2>
			<p className='join-card-text'>{text}</p>
			<div className='join-btn-center'>
				<button className='join-card-btn'>Дізнатися більше</button>
			</div>
		</div>
	);
};

export default Card;
