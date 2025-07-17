import { Link } from 'react-router-dom';
import Movie from '../pages/Movie';

function MovieCard({ movie }) {

  return (
    <article>
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Movie</Link>
    </article>
  );
};

export default MovieCard;