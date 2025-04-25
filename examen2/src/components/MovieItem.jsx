function MovieItem({ pelicula, index, peliculas, setPeliculas }) {
  const editar = () => {
    const nuevoTitulo = prompt('Nuevo título:', pelicula.titulo);
    const nuevoDirector = prompt('Nuevo director:', pelicula.director);
    if (nuevoTitulo && nuevoDirector) {
      const actualizadas = [...peliculas];
      actualizadas[index] = { titulo: nuevoTitulo, director: nuevoDirector };
      setPeliculas(actualizadas);
    }
  };

  const eliminar = () => {
    if (confirm('¿Eliminar esta película?')) {
      setPeliculas(peliculas.filter((_, i) => i !== index));
    }
  };

  return (
    <li>
      <div className="bg-gray-50 p-4 rounded shadow flex justify-between items-center">
        <div>
          <p className="font-semibold">{pelicula.titulo}</p>
          <p className="text-sm text-gray-600">{pelicula.director}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={editar} className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500">Editar</button>
          <button onClick={eliminar} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Eliminar</button>
        </div>
      </div>
    </li>
  );
}

export default MovieItem;
