import "./VideoCard.css";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Avatar } from "@mui/material";

function VideoCard({ thumbnailSrc, title, logoSrc, channelName, views, date, isVerified }) {
	return (
		<div className="videocard">
			<img src={thumbnailSrc} alt="" className="videocard__thumbnail" />
			<div className="videocard__desc">
				<div className="videocard__logo">
					<Avatar src={logoSrc} />
				</div>
				<div>
					<p className="videocard__title">{title}</p>
					<p className="videocard__channelname">
						{channelName}
						{isVerified && <CheckCircleIcon sx={{ fontSize: 15 }} />}
					</p>
					<p className="videocard__data">
						{views}
						<b> . </b>
						{date}
					</p>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
