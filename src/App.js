import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import { BurgerMenueProvider } from "./contexts/burgerMenuContext";
function App() {
	return (
		<BurgerMenueProvider>
			<div className="app">
				<Header />
				<Home />
			</div>
		</BurgerMenueProvider>
	);
}

export default App;
