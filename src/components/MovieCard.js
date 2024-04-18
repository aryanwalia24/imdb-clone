import React from 'react';
import './css/MovieCard.css';
import { format } from 'date-fns';

const MovieCard = ({ movie }) => {
  // Format release year using date-fns
  const formattedReleaseYear = movie.Year ? format(new Date(movie.Year), 'yyyy') : '';

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>Released: {formattedReleaseYear}</p>
    </div>
  );
};

export default MovieCard;
