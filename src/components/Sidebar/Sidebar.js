import "./Sidebar.css";
import React from "react";
import Sidebaritem from "../Sidebaritem/Sidebaritem";

function Sidebar() {
	return (
		<div className="sidebar">
			<ul className="sidebar__ul">
				<Sidebaritem />
				<Sidebaritem />
				<Sidebaritem />
				<Sidebaritem />
			</ul>
		</div>
	);
}

export default Sidebar;
