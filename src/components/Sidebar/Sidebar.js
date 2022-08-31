import "./Sidebar.css";
import React, { useContext } from "react";
import { Avatar } from "@mui/material";
import Sidebaritem from "../Sidebaritem/Sidebaritem";
import burgerMenuContext from "../../contexts/burgerMenuContext";
//icons from material ui
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SlideshowSharpIcon from "@mui/icons-material/SlideshowSharp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
function Sidebar() {
	const { burgerOpen } = useContext(burgerMenuContext);

	return (
		<div className={`sidebar  ${burgerOpen === false ? "sidebar--closed" : "sidebar--opened"}`}>
			<ul className="sidebar__ul">
				<Sidebaritem icon={<HomeOutlinedIcon />} text={"Home"} />
				<Sidebaritem icon={<ExploreOutlinedIcon />} text={"Explore"} />
				<Sidebaritem icon={<PlayArrowOutlinedIcon />} text={"Shorts"} />
				<Sidebaritem icon={<SubscriptionsOutlinedIcon />} text={"Subscriptions"} />
			</ul>
			<ul className="sidebar__ul">
				<Sidebaritem icon={<VideoLibraryOutlinedIcon />} text={"Library"} />
				<Sidebaritem icon={<HistoryOutlinedIcon />} text={"History"} />
				<Sidebaritem icon={<SlideshowSharpIcon />} text={"Your videos"} />
				<Sidebaritem icon={<WatchLaterOutlinedIcon />} text={"Watch later"} />
				<Sidebaritem icon={<ThumbUpOutlinedIcon />} text={"Liked videos"} />
				<Sidebaritem icon={<PlaylistPlayOutlinedIcon />} text={"important stuf"} />
				<Sidebaritem icon={<PlaylistPlayOutlinedIcon />} text={"usefull content"} />
			</ul>
			<h5 className="sidebar__titles">SUBSCRIPTIONS</h5>
			<ul className="sidebar__ul ">
				<Sidebaritem icon={<Avatar src="../images/channel1.jpg" sx={{ width: 25, height: 25 }} />} text={"mr beasts"} />
				<Sidebaritem icon={<Avatar src="../images/channel2.jpg" sx={{ width: 25, height: 25 }} />} text={"pew die pie"} />
				<Sidebaritem icon={<Avatar src="../images/channel3.jpg" sx={{ width: 25, height: 25 }} />} text={"airrack"} />
				<Sidebaritem icon={<Avatar src="../images/channel4.jpg" sx={{ width: 25, height: 25 }} />} text={"ryan trahan"} />
			</ul>
			<h5 className="sidebar__titles">Explore</h5>
			<ul className="sidebar__ul ">
				<Sidebaritem icon={<LocalMoviesOutlinedIcon />} text={"Movies"} />
				<Sidebaritem icon={<SportsEsportsOutlinedIcon />} text={"gaming"} />
				<Sidebaritem icon={<HelpOutlineOutlinedIcon />} text={"Live"} />
				<Sidebaritem icon={<LightbulbOutlinedIcon />} text={"Sports"} />
			</ul>
			<ul className="sidebar__ul ">
				<Sidebaritem icon={<SettingsOutlinedIcon />} text={"Settings"} />
				<Sidebaritem icon={<FlagOutlinedIcon />} text={"Report history"} />
				<Sidebaritem icon={<SensorsOutlinedIcon />} text={"Help"} />
				<Sidebaritem icon={<FeedbackOutlinedIcon />} text={"Send feedback"} />
			</ul>
			<p className="sidbar__links">About Press Copyright Contactus Creators Advertise Developers</p>
		</div>
	);
}

export default Sidebar;
