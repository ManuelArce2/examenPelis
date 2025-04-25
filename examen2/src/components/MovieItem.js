import { actualizarPeliculas } from '../main.js';

export function renderMovieItem(pelicula, index, peliculas) {
  const div = document.createElement('li');
  div.innerHTML = `
    <div class="bg-gray-50 p-4 rounded shadow flex justify-between items-center">
      <div>
        <p class="font-semibold">${pelicula.titulo}</p>
        <p class="text-sm text-gray-600">${pelicula.director}</p>
      </div>
      <div class="flex gap-2">
        <button class="editar bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500">Editar</button>
        <button class="eliminar bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Eliminar</button>
      </div>
    </div>
  `;

  div.querySelector('.editar').addEventListener('click', () => {
    const nuevoTitulo = prompt('Nuevo título:', pelicula.titulo);
    const nuevoDirector = prompt('Nuevo director:', pelicula.director);
    if (nuevoTitulo && nuevoDirector) {
      const nuevaLista = [...peliculas];
      nuevaLista[index] = { titulo: nuevoTitulo, director: nuevoDirector };
      actualizarPeliculas(nuevaLista);
    }
  });

  div.querySelector('.eliminar').addEventListener('click', () => {
    if (confirm('¿Eliminar esta película?')) {
      const nuevaLista = peliculas.filter((_, i) => i !== index);
      actualizarPeliculas(nuevaLista);
    }
  });

  return div;
}
