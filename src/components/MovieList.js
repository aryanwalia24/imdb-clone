import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import './css/MovieList.css';

const MovieList = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = 'http://www.omdbapi.com/';
        let params = {
          apikey: 'e1ab6e3e',
          type: 'movie'
        };

        if (searchQuery) {
          params.s = searchQuery;
        }

        const response = await axios.get(url, { params });
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchQuery]); // Fetch movies whenever searchQuery changes

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
