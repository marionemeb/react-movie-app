import React from 'react';
import MovieCard from './MovieCard';

function ListMovies ({movies}) {
    return (
    movies
    .sort(function (a, b) {
        return b.id - a.id;
      })
    .map(movie => (
        <li key={movie.id}><MovieCard id={movie.id} title={movie.title} poster={movie.poster} comment={movie.comment} /></li>
    )))
}    

export default ListMovies;