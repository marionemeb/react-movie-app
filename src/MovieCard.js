import React from 'react';
import './MovieCard.css';

function MovieCard ({id, poster, title, comment}) {
    return (
        <figure className="MovieCard" key={id}>
            <img
                src={poster}
                alt={title}
            />
            <figcaption>
                <span>Titre du film: {title}</span><br/>
                <cite>Commentaires: {comment}</cite>       
            </figcaption>
        </figure>
    );
}
export default MovieCard;