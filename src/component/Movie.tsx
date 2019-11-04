import React from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from './../reducers/reducer';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }: { movie: IMovie }) => (
    <Link to={`/${movie.id}`}>
        <p>{movie.title}</p>
        <p>{movie.title}</p>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
);

export default Movie;

