import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";

function List() {
	const { movies } = useContext(GlobalContext);

	return (
		<div className="showcase-container">
			{movies.map((movie) => {
				const { title, id, img } = movie;
				return (
					<div className="showcase-item" key={id}>
						<Link to={`/movie/${id}`}>
							<img
								src={img}
								alt={title}
								className="showcase-img"
							/>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default List;
