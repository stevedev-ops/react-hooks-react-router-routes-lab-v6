import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
