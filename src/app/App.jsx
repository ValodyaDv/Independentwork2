import Header from '../components/Header/Header';
import About from '../components/main/About/About';
import Join from '../components/main/Join/Join';
import Footer from '../components/Footer/Footer';
import './App.scss';

function App() {
	return (
		<>
			<Header />
			<main>
				<About />
				<Join />
			</main>
			<Footer />
		</>
	);
}

export default App;
