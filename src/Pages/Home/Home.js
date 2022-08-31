import "./Home.css";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Recomended from "../../components/Recomended/Recomended";

function Home() {
	return (
		<div className="home">
			<Sidebar />
			<Recomended />
		</div>
	);
}

export default Home;
