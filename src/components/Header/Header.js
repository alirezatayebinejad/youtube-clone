import "./Header.css";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Avatar } from "@mui/material";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon className="header__left__burger" />
				<img className="header__left__logo" src="../../images/yt-logo.png" alt="youtube logo png" />
			</div>
			<div className="header__mid">
				<div className="header__mid__search">
					<input placeHolder="Search" type="text" />
					<div className="header__mid__search__icon">
						<SearchIcon />
					</div>
				</div>
			</div>
			<div className="header__right">
				<VideoCallOutlinedIcon className="header__right__video" />
				<NotificationsOutlinedIcon className="header__right__notif" />
				<Avatar src="/broken-image.jpg" className="header__right__avatar" />
			</div>
		</div>
	);
}

export default Header;
