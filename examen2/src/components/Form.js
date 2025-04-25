import { actualizarPeliculas } from '../main.js';

export function renderForm(peliculas) {
  const container = document.getElementById('form-container');
  container.innerHTML = `
    <form id="formulario" class="flex flex-col gap-4 mb-6">
      <input type="text" id="titulo" placeholder="Título de la película" class="border p-2 rounded" required />
      <input type="text" id="director" placeholder="Director" class="border p-2 rounded" required />
      <input type="text" id="descripcion" placeholder="Descripcion" class="border p-2 rounded" required />
      <input type="text" id="director" placeholder="Director" class="border p-2 rounded" required />
      <button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Agregar</button>
    </form>
  `;

  document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const director = document.getElementById('director').value;
    const descripcion = document.getElementById('descripcion').value;
    const genero = document.getElementById('genero').value;

    const nuevaLista = [...peliculas, { titulo, director }];
    actualizarPeliculas(nuevaLista);
    e.target.reset();
  });
}
