import React from 'react';
import './css/MovieDetails.css';

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
