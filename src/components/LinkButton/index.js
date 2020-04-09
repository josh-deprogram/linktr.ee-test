import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SongKick from "../../assets/icon/by-songkick-wordmark.png";

import { ShowLink } from "../";
import { StyledLink, SongLogo, Shows } from "./styles";

const LinkButton = props => {
    const [showsVisible, setShowsVisible] = useState(false)

	useEffect(() => {}, []);

	const onPress = () => {
		switch (props.linkType) {
			case "CLASSIC":
				if (props.url) window.open(props.url, "_blank");
				break;
			case "SHOW":
                /* Set the Shows List elements Visible or not */
                setShowsVisible(!showsVisible)
				break;
			case "MUSIC":
				break;
			default:
				break;
        }
    };
    
	return (
        <>
		<StyledLink onClick={onPress}>
			{props.children}
            </StyledLink>
            {props.shows && showsVisible && 
                <>
                <Shows>
				{props.shows.map(show => (
					<ShowLink
						key={show.date}
						date={show.date}
						location={show.location}
						url={show.url}
						soldOut={show.soldOut}
					/>
				))}
                </Shows>
                <SongLogo><img src={SongKick} alt="song"/> </SongLogo>
                </>}
		
        </>
	);
};

LinkButton.propTypes = {
	linkType: PropTypes.oneOf([ "CLASSIC", "MUSIC", "SHOW" ]),
	url: PropTypes.string || null,
	shows: PropTypes.array || null,
	musicLinks: PropTypes.array || null,
	onPress: PropTypes.func
};

LinkButton.defaultProps = {
	linkType: "CLASSIC",
	url: null,
	shows: null,
	musicLinks: null,
	onPress: () => {}
};

export default LinkButton;
