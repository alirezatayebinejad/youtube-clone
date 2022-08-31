import "./Sidebaritem.css";
import React, { useState } from "react";

function Sidebaritem({ icon, text }) {
	const isActive = useState(false);

	return (
		<li className={`sidebaritem ${isActive === true ? "active" : ""}`}>
			<div className="sidebaritem__icon">{icon}</div>
			<p className="sidebaritem__text">{text}</p>
		</li>
	);
}

export default Sidebaritem;
