import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import { BasketProvider } from "./contexts/burgerMenuContext";
function App() {
	return (
		<BasketProvider>
			<div className="app">
				<Header />
				<Home />
			</div>
		</BasketProvider>
	);
}

export default App;
