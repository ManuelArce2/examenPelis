import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
  const [peliculas, setPeliculas] = useState(() => {
    return JSON.parse(localStorage.getItem('peliculas')) || [];
  });

  useEffect(() => {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }, [peliculas]);

  const agregarPelicula = (e) => {
    e.preventDefault();
    const titulo = e.target.titulo.value;
    const director = e.target.director.value;
    const descripcion = e.target.descripcion.value;
    const genero = e.target.genero.value;

    if (titulo && director && descripcion && genero) {
      setPeliculas([...peliculas, { titulo, director, descripcion, genero }]);
      e.target.reset();
    }
  };

  const editarPelicula = (index) => {
    const nuevaTitulo = prompt('Nuevo título:', peliculas[index].titulo);
    const nuevoDirector = prompt('Nuevo director:', peliculas[index].director);
    const nuevaDescripcion = prompt('Nueva descripción:', peliculas[index].descripcion);
    const nuevoGenero = prompt('Nuevo género:', peliculas[index].genero);

    if (nuevaTitulo && nuevoDirector && nuevaDescripcion && nuevoGenero) {
      const nuevasPeliculas = [...peliculas];
      nuevasPeliculas[index] = {
        titulo: nuevaTitulo,
        director: nuevoDirector,
        descripcion: nuevaDescripcion,
        genero: nuevoGenero,
      };
      setPeliculas(nuevasPeliculas);
    }
  };

  const eliminarPelicula = (index) => {
    if (confirm('¿Eliminar esta película?')) {
      const nuevasPeliculas = peliculas.filter((_, i) => i !== index);
      setPeliculas(nuevasPeliculas);
    }
  };

  return (
    <div>
      <form id="formulario" onSubmit={agregarPelicula}>
        <input type="text" id="titulo" name="titulo" placeholder="Título" required />
        <input type="text" id="director" name="director" placeholder="Director" required />
        <input type="text" id="descripcion" name="descripcion" placeholder="Descripción" required />
        <select id="genero" name="genero" required>
          <option value="" disabled selected>
            Selecciona un género
          </option>
          <option value="Acción">Acción</option>
          <option value="Comedia">Comedia</option>
          <option value="Drama">Drama</option>
          <option value="Terror">Terror</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
        </select>
        <button type="submit">Agregar</button>
      </form>

      <ul id="lista-peliculas">
        {peliculas.map((pelicula, index) => (
          <li key={index}>
            <strong>{pelicula.titulo}</strong> - {pelicula.director}
            <p><strong>Género:</strong> {pelicula.genero}</p>
            <p><strong>Descripción:</strong> {pelicula.descripcion}</p>
            <button onClick={() => editarPelicula(index)}>Editar</button>
            <button onClick={() => eliminarPelicula(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);