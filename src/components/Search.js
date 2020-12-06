import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../context/context";

function Search() {
	const { setSearch } = useContext(GlobalContext);
	const searchInput = useRef("");

	// Update Search
	const updateSearch = (e) => {
		e.preventDefault();
	};

	const searchMovie = () => {
		setSearch(searchInput.current.value);
	};

	// Focus input element
	useEffect(() => {
		searchInput.current.focus();
	});

	return (
		<div className="input-container">
			<h1 className="title-heading">Search for Movies</h1>
			<form className="form" onSubmit={updateSearch}>
				<input
					type="text"
					className="searchInput"
					ref={searchInput}
					onChange={searchMovie}
				/>
			</form>
		</div>
	);
}

export default Search;
