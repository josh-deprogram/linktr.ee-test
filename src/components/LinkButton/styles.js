import styled from "styled-components";
import { COLORS, SIZE, THEME } from "../../config";

export const StyledLink = styled.button`
	width: 100%;
	padding: ${SIZE.PADDING}px 0;
	margin: ${SIZE.PADDING}px 0 0;
	border-radius: ${SIZE.BORDER_RADIUS}px;
	border: 2px solid transparent;
	background: ${THEME.background_color};
	color: ${THEME.text_color};
	font-size: 1rem;
	cursor: pointer;
	outline: none;
	transition: background .25s ease;

	&:hover {
		color: ${THEME.background_color};
		background: ${COLORS.WHITE};
		border: 2px solid ${THEME.background_color};
	}
`;

export const SongLogo = styled.div`
	background: ${COLORS.BLUE_GREY_4};
	padding: ${SIZE.PADDING}px 0;
	img {
		height: 16px;
		opacity: 0.7;
	}
`;

export const Shows = styled.div`
	overflow: scroll;
	min-height: 250px;
	height: 50vh;
`;
