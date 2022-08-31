import "./Recomended.css";
import React from "react";
import VideoCard from "../VideoCard/VideoCard";

function Recomended() {
	const videData = [
		{
			thumbnailSrc: "https://pbs.twimg.com/media/FE_X3qZXIAoSbgr?format=jpg&name=large",
			title: "$456,000 Squid Game In Real Life",
			logoSrc: "../../images/channel1.jpg",
			channelName: "Mr Beast",
			views: "54M views",
			date: "3 years ago",
			isVerified: true,
		},
		{
			thumbnailSrc: "https://pbs.twimg.com/media/FE_X3qZXIAoSbgr?format=jpg&name=large",
			title: "$456,000 Squid Game In Real Life",
			logoSrc: "../../images/channel1.jpg",
			channelName: "Mr Beast",
			views: "54M views",
			date: "3 years ago",
			isVerified: true,
		},
		{
			thumbnailSrc: "https://pbs.twimg.com/media/FE_X3qZXIAoSbgr?format=jpg&name=large",
			title: "$456,000 Squid Game In Real Life",
			logoSrc: "../../images/channel1.jpg",
			channelName: "Mr Beast",
			views: "54M views",
			date: "3 years ago",
			isVerified: true,
		},
		{
			thumbnailSrc: "https://pbs.twimg.com/media/FE_X3qZXIAoSbgr?format=jpg&name=large",
			title: "$456,000 Squid Game In Real Life",
			logoSrc: "../../images/channel1.jpg",
			channelName: "Mr Beast",
			views: "54M views",
			date: "3 years ago",
			isVerified: true,
		},
		{
			thumbnailSrc: "https://pbs.twimg.com/media/FE_X3qZXIAoSbgr?format=jpg&name=large",
			title: "$456,000 Squid Game In Real Life",
			logoSrc: "../../images/channel1.jpg",
			channelName: "Mr Beast",
			views: "54M views",
			date: "3 years ago",
			isVerified: true,
		},
		{
			thumbnailSrc: "https://pbs.twimg.com/media/FE_X3qZXIAoSbgr?format=jpg&name=large",
			title: "$456,000 Squid Game In Real Life",
			logoSrc: "../../images/channel1.jpg",
			channelName: "Mr Beast",
			views: "54M views",
			date: "3 years ago",
			isVerified: true,
		},
		{
			thumbnailSrc: "https://pbs.twimg.com/media/FE_X3qZXIAoSbgr?format=jpg&name=large",
			title: "$456,000 Squid Game In Real Life",
			logoSrc: "../../images/channel1.jpg",
			channelName: "Mr Beast",
			views: "54M views",
			date: "3 years ago",
			isVerified: true,
		},
		{
			thumbnailSrc: "https://pbs.twimg.com/media/FE_X3qZXIAoSbgr?format=jpg&name=large",
			title: "$456,000 Squid Game In Real Life",
			logoSrc: "../../images/channel1.jpg",
			channelName: "Mr Beast",
			views: "54M views",
			date: "3 years ago",
			isVerified: true,
		},
		{
			thumbnailSrc: "https://pbs.twimg.com/media/FE_X3qZXIAoSbgr?format=jpg&name=large",
			title: "$456,000 Squid Game In Real Life",
			logoSrc: "../../images/channel1.jpg",
			channelName: "Mr Beast",
			views: "54M views",
			date: "3 years ago",
			isVerified: true,
		},
		{
			thumbnailSrc: "https://pbs.twimg.com/media/FE_X3qZXIAoSbgr?format=jpg&name=large",
			title: "$456,000 Squid Game In Real Life",
			logoSrc: "../../images/channel1.jpg",
			channelName: "Mr Beast",
			views: "54M views",
			date: "3 years ago",
			isVerified: true,
		},
	];
	return (
		<div className="recomended">
			<div className="recommended__videocards">
				{videData.map((data) => (
					<VideoCard {...data} />
				))}
			</div>
		</div>
	);
}

export default Recomended;
