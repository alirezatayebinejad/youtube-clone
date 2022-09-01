import "./Recomended.css";
import React, { useContext } from "react";
import VideoCard from "../VideoCard/VideoCard";
import videosContext from "../../contexts/videosContext";

function Recomended() {
	const { mostPopularVids } = useContext(videosContext);

	return (
		<div className="recomended">
			<div className="recommended__videocards">
				{mostPopularVids.map((item, i) => (
					<VideoCard {...item} key={i} />
				))}
			</div>
		</div>
	);
}

export default Recomended;
