import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Country from "./components/country/Country";

function App() {
	return (
		<>
			<Router>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/country/:id" element={<Country />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
