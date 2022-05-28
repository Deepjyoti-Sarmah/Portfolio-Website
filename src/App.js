// Import Components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Projects />
			<Social />
			{/* <Experience /> */}
			<Footer />
		</div>
	);
}

export default App;
