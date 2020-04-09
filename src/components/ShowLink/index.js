import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Chevron } from "../../assets/icon/down-arrow.svg";
import {
	StyledShow,
	Info,
	Date,
	Location,
	Soldout,
	Icon,
	Divivder
} from "./styles";

const ShowLink = props => {
	const onPress = () => {};

	return (
		<StyledShow onClick={onPress}>
			<Info>
				<Date>{props.date}</Date>
				<Location>{props.location}</Location>
			</Info>
			{props.soldOut ? (
				<Soldout>Sold out</Soldout>
			) : (
				<Icon>
					<Chevron />
				</Icon>
			)}
			<Divivder />
		</StyledShow>
	);
};

ShowLink.propTypes = {
	date: PropTypes.string,
	location: PropTypes.string,
	soldOut: PropTypes.bool,
	url: PropTypes.string
};

ShowLink.defaultProps = {
	date: null,
	location: null,
	soldOut: null,
	url: null
};

export default ShowLink;
