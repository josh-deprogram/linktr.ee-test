import styled from "styled-components";
import { COLORS, SIZE, THEME, FONT } from "../../config";

export const MusicPlatform = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 ${SIZE.PADDING * 2}px;
	margin: 0;
	border: 2px solid transparent;
	background: ${COLORS.BLUE_GREY_4};
	color: ${THEME.text_color};
	outline: none;
	font-size: ${FONT.BODY};
	text-align: left;
	transition: background .25s ease;
	cursor: pointer;

	&:hover {
		color: ${COLORS.GREEN};
		svg {
			g {
				fill: ${COLORS.GREEN};
			}
		}
	}
`;
export const Info = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	outline: none;
	width: 200px;
	cursor: pointer;
	text-align: left;
	background: transparent;
	border: 0;

	&:hover {
		color: ${COLORS.GREEN};
	}
`;
export const MainButton = styled.button`
	cursor: pointer;
	outline: none;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
	height: 100%;
	padding: ${SIZE.PADDING}px 0;
	background: transparent;
	border: 0;
`;
export const Icon = styled.div`
	height: 20px;
	position: relative;

	svg {
		position: absolute;
		top: -80px;
		height: 20px;
		transform: rotate(-90deg);
		g {
			fill: ${COLORS.BLUE_GREY};
		}
	}
`;
export const Divivder = styled.div`
	position: absolute;
	bottom: 0;
	left: ${SIZE.PADDING * 2}px;
	width: calc(100% - ${SIZE.PADDING * 2}px);
	height: 1px;
	background: rgba(0, 0, 0, 0.1);
`;

export const PlatIcon = styled.div``;
export const PlatName = styled.div`margin-left: ${SIZE.PADDING}px;`;
