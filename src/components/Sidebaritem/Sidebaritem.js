import "./Sidebaritem.css";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function Sidebaritem({ active = false }) {
	return (
		<li className={`sidebaritem ${active && "active"}`}>
			<div className="sidebaritem__icon">
				<HomeOutlinedIcon />
			</div>
			<p>Home</p>
		</li>
	);
}

export default Sidebaritem;
