import "./Sidebaritem.css";
import React from "react";

function Sidebaritem({ icon, text, isActive = false }) {
	return (
		<li className={`sidebaritem ${isActive && "active"}`}>
			<div className="sidebaritem__icon">{icon}</div>
			<p className="sidebaritem__text">{text}</p>
		</li>
	);
}

export default Sidebaritem;
