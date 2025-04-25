import MovieItem from './MovieItem';

function MovieList({ peliculas, setPeliculas }) {
  return (
    <ul className="space-y-4">
      {peliculas.map((pelicula, index) => (
        <MovieItem
          key={index}
          index={index}
          pelicula={pelicula}
          peliculas={peliculas}
          setPeliculas={setPeliculas}
        />
      ))}
    </ul>
  );
}

export default MovieList;
