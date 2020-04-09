import styled, { createGlobalStyle } from "styled-components";
import { SIZE } from "../config";

export const GlobalStyle = createGlobalStyle`

  body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: white;
	}

	code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
	}

	
`;

export const AppContainer = styled.div`
	width: calc(100% - ${SIZE.PADDING * 2}px);
	padding: ${SIZE.PADDING}px;
	text-align: center;

	svg {
		margin-top: 80px;
	}
	p {
		margin-bottom: 32px;
	}
`;
