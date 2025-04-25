import { renderMovieItem } from './MovieItem.js';

export function renderMovieList(peliculas) {
  const lista = document.getElementById('lista-peliculas');
  lista.innerHTML = '';
  peliculas.forEach((pelicula, index) => {
    const item = renderMovieItem(pelicula, index, peliculas);
    lista.appendChild(item);
  });
}
