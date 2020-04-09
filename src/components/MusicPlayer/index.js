import React from "react";
import PropTypes from "prop-types";
import Player from "../../assets/player.jpg";
import { MusicPlayerImg, MusicPlayerContainer } from "./styles";

const MusicPlayer = props => {
	return (
		<MusicPlayerContainer>
			<MusicPlayerImg src={Player} alt="dummy music player" />
		</MusicPlayerContainer>
	);
};

MusicPlayer.propTypes = {
	platform: PropTypes.string,
	audioStream: PropTypes.string
};

MusicPlayer.defaultProps = {
	platform: null,
	audioStream: null
};

export default MusicPlayer;
