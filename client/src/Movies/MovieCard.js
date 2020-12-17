import React from "react";
import { useParams } from "react-router-dom";

export default function MovieCard(props) {
  const params = useParams();

  const movies = Movie.map(item => {
    return (
      <div key={item.id}>
        <p>{item.title}</p>
      </div>
    );
  });
}
