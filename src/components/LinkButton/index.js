import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SongKick from "../../assets/icon/by-songkick-wordmark.png";

import { ShowLink, MusicLink, MusicPlayer } from "../";
import { StyledLink, SongLogo, Shows } from "./styles";

const LinkButton = props => {
    const [showsVisible, setShowsVisible] = useState(false)
    const [musicVisible, setMusicVisible] = useState(false)
    const [currentPlatform, setCurrentPlatform] = useState(null)
    const [audioStream, setAudioStream] = useState(null)


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
                /* Set the Music List elements Visible or not */
                setMusicVisible(!musicVisible)
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

            {
                /* if of type SHOW, render the shows accordion links   */
            }
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
                <SongLogo><img src={SongKick} alt="song"/></SongLogo>
                </>}
            
            {
                /* if of type MUSIC, render the music accordion links   */
            }
            {props.musicLinks && musicVisible && 
                <>
                <Shows>
                {
                    /*  
                        TODO: REAL MUSIC PLAYER,
                        Custom player to change per platform, passing in the current platform and audio stream
                    */
                }
                <MusicPlayer
                    platform={currentPlatform}
                    audioStream={audioStream}
                />
				{props.musicLinks.map(music => (
					<MusicLink
						key={music.platform}
						platform={music.platform}
                        platformUrl={music.platformUrl}
                        url={music.url}
                        onPress={() => {
                            setAudioStream(music.audioStream)
                            setCurrentPlatform(music.platform)
                        }}

					/>
				))}
                </Shows>
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
