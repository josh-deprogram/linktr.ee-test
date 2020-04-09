import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Chevron } from "../../assets/icon/down-arrow.svg";
import {
	MusicPlatform,
	Info,
	PlatName,
	PlatIcon,
	Icon,
	Divivder,
	MainButton
} from "./styles";

const MusicLink = props => {
	const onPress = () => {
		props.url && window.open(props.url, "_blank");
	};

	const onPlatformPress = () => {
		props.platformUrl && window.open(props.platformUrl, "_blank");
	};

	return (
		<MusicPlatform>
			<Info onClick={onPlatformPress}>
				<PlatIcon>
					<img
						src={require(`../../assets/icon/social/${props.platform.toLowerCase()}.svg`)}
						alt={props.platform}
					/>
				</PlatIcon>
				<PlatName>{props.platform}</PlatName>
			</Info>
			<MainButton onClick={onPress}>
				<Icon>
					<Chevron />
				</Icon>
			</MainButton>
			<Divivder />
		</MusicPlatform>
	);
};

MusicLink.propTypes = {
	platform: PropTypes.string,
	url: PropTypes.string,
	platformUrl: PropTypes.string
};

MusicLink.defaultProps = {
	platform: null,
	url: null,
	platformUrl: null
};

export default MusicLink;
