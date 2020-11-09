import React from "react";
import {
  Route,
  NavLink,
  Switch,
  useParams,
  useRouteMatch
} from "react-router-dom";
import MovieDetails from "./MovieList";

export default function MovieCard(props) {
  const { movie } = props;

  const { id } = useParams;
  const item = props.movies.find(item => {
    item.id === id;
  });

  const { path, url } = useRouteMatch();

  if (!movies.length) return "...loading";

  return "hello";
}
