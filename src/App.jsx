import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './routes/AnimatedRoutes/index';

const App = () => {
	return (
		<div className="bg-zinc-800 w-full h-screen flex flex-col overflow-hidden">
			<BrowserRouter>
				<Header />
				<div className="flex-1 container mx-auto p-4 ">
					<AnimatedRoutes />
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
