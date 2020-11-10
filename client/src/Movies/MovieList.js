import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function MovieList(props) {
  //nav for browser
  //link for nav bar, or anywhere that would be an a tag
  const { push } = useHistory();

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <div
          onClick={() => {
            push(`/movies/${movie.id}`);
          }}
        >
          <MovieDetails key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
