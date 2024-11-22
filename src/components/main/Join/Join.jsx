import './Join.scss';
import Card from './../Card/Card';
import React, { useState, useEffect } from 'react';

const Join = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://api.jsonbin.io/v3/b/67410860acd3cb34a8ad1a10')
			.then((response) => response.json())
			.then((data) => setData(data.record));
	}, []);

	return (
		<section className='join'>
			<div className='container'>
				<h1 className='join-title'>
					Долучайся до <span>озеленення</span> лісу
				</h1>
				<div className='join-cards'>
					{data.map((item) => (
						<Card img={item.img} title={item.title} text={item.text} key={item.key} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Join;
