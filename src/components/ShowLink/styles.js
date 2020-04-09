import styled from "styled-components";
import { COLORS, SIZE, THEME, FONT } from "../../config";

export const StyledShow = styled.button`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: ${SIZE.PADDING}px ${SIZE.PADDING * 2}px;
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
	}
`;
export const Info = styled.div``;
export const Date = styled.div`
	font-size: ${FONT.HEADER};
	padding: ${SIZE.PADDING / 2}px 0;
`;
export const Location = styled.div`font-size: ${FONT.SMALL};`;
export const Soldout = styled.div`
	font-size: ${FONT.SMALL};
	margin-right: -${SIZE.PADDING}px;
`;
export const Icon = styled.div`
	height: 20px;
	position: relative;
	svg {
		position: absolute;
		top: -80px;
		height: 20px;
		transform: rotate(-90deg);
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
