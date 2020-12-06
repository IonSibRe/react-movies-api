import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const url = "http://www.omdbapi.com";

function SingleMovie() {
	const { id } = useParams();
	const [movie, setMovie] = useState("");

	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await fetch(
					`${url}/?i=${id}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
				);
				const data = await res.json();

				if (data.Response) {
					const {
						Title: title,
						Released: released,
						Poster: img,
						Actors: actors,
						Director: director,
						Rated: rated,
						imdbRating: rating,
						Plot: plot,
					} = data;
					const newMovie = {
						title,
						released,
						img,
						director,
						actors,
						rated,
						rating,
						plot,
					};
					setMovie(newMovie);
				} else {
					setMovie("");
				}
			} catch (error) {
				console.log(error);
				setMovie("");
			}
		};
		getMovie();
	}, [id]);

	const {
		title,
		img,
		released,
		actors,
		director,
		rated,
		rating,
		plot,
	} = movie;

	return (
		<div className="single-movie-container">
			<div className="heading-container">
				<h1 className="single-movie-heading">{title}</h1>
			</div>
			<div className="info-container">
				<div className="img-wrap">
					<img src={img} alt={title} className="movie-img" />
				</div>
				<div className="text-wrap">
					<div className="text-inner-wrap">
						<h3 className="info-h3">
							<span className="info-span">Name: </span> {title}
						</h3>
						<h3 className="info-h3">
							<span className="info-span">Released: </span>{" "}
							{released}
						</h3>
						<h3 className="info-h3">
							<span className="info-span">Director: </span>{" "}
							{director}
						</h3>
						<h3 className="info-h3">
							<span className="info-span">Actors: </span> {actors}
						</h3>
						<h3 className="info-h3">
							<span className="info-span">Rated: </span> {rated}
						</h3>
						<h3 className="info-h3">
							<span className="info-span">Rating: </span> {rating}
						</h3>
						<p className="info-text">{plot}</p>
					</div>
				</div>
			</div>
			<div className="btn-container">
				<Link to="/" className="btn">
					Back Home
				</Link>
			</div>
		</div>
	);
}

export default SingleMovie;
