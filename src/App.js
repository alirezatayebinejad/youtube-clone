import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import { BurgerMenueProvider } from "./contexts/burgerMenuContext";
import { VideosDataProvider } from "./contexts/videosContext";

function App() {
	return (
		<BurgerMenueProvider>
			<VideosDataProvider>
				<div className="app">
					<Header />
					<Home />
				</div>
			</VideosDataProvider>
		</BurgerMenueProvider>
	);
}

export default App;
