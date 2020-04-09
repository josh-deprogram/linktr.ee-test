import React from "react";
import { AppContainer, GlobalStyle } from "./assets/globalstyles"
import { ReactComponent as Logo } from "./assets/brand/logo.svg";
import Avatar from "./assets/avatar.png";
import { LinkButton } from "./components/";
import {API_DATA} from "./mock-data"

function App () {
	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<img src={Avatar} alt='avatar' />
				<p>@yourname</p>
				<LinkButton url={API_DATA.url}>Link URL</LinkButton>
				<LinkButton shows={API_DATA.shows}>Shows</LinkButton>
				<LinkButton musicLinks={API_DATA.musicLinks} >Music</LinkButton>
				<Logo/>
			</AppContainer>
		</>
	);
}

export default App;
