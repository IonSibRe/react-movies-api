import React, { useState, useEffect, useCallback } from "react";

const GlobalContext = React.createContext();

const url = "https://www.omdbapi.com";

const GlobalProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState("");

	const fetchMovies = useCallback(async () => {
		try {
			const res = await fetch(
				`${url}/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${search}`
			);
			const data = await res.json();

			if (data.Response) {
				const newMovies = data.Search.map((movie) => {
					const { Title, Year, imdbID, Poster, Type } = movie;
					return {
						title: Title,
						year: Year,
						id: imdbID,
						img: Poster,
						type: Type,
					};
				}).filter((movie) => movie.type === "movie");
				setMovies(newMovies);
			} else {
				setMovies([]);
			}
		} catch (error) {
			console.log(error);
		}
	}, [search]);

	useEffect(() => {
		fetchMovies();
	}, [search, fetchMovies]);

	return (
		<GlobalContext.Provider value={{ movies, setMovies, setSearch }}>
			{children}
		</GlobalContext.Provider>
	);
};

export { GlobalContext, GlobalProvider };
