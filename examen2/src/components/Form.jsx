function Form({ setPeliculas }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const titulo = e.target.titulo.value;
    const director = e.target.director.value;
    const descripcion = e.target.descripcion.value;
    const genero = e.target.genero.value;

    if (titulo && director && descripcion && genero) {
      setPeliculas((prev) => [
        ...prev,
        { titulo, director, descripcion, genero },
      ]);
      e.target.reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md"
    >
      <h2 className="text-lg font-semibold text-gray-700 text-center">Agregar Película</h2>
      <input
        name="titulo"
        placeholder="Título de la película"
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="director"
        placeholder="Director"
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        name="descripcion"
        placeholder="Descripción de la película"
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
        required
      ></textarea>
      <select
        name="genero"
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      >
        <option value="" disabled selected>
          Selecciona un género
        </option>
        <option value="Acción">Acción</option>
        <option value="Comedia">Comedia</option>
        <option value="Drama">Drama</option>
        <option value="Terror">Terror</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all duration-200"
      >
        Agregar
      </button>
    </form>
  );
}

export default Form;