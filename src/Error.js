import React from "react";
import { Link } from "react-router-dom";

// Styles
const error_container = {
	width: "100vw",
	marginTop: "25vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
};

const header_styles = {
	marginBottom: "3rem",
	fontSize: "5rem",
	color: "#333",
};

function Error() {
	return (
		<main style={error_container}>
			<h1 style={header_styles}>
				Sorry, the page you are looking for doesn't exist{" "}
			</h1>
			<Link to="/" className="btn">
				Back Home
			</Link>
		</main>
	);
}

export default Error;
