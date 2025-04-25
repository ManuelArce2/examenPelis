import { useState, useEffect } from 'react';
import Form from './components/Form';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const [peliculas, setPeliculas] = useState(() => {
    const guardadas = localStorage.getItem('peliculas');
    return guardadas ? JSON.parse(guardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }, [peliculas]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">CRUD de Películas</h1>
        <Form setPeliculas={setPeliculas} />
        <MovieList peliculas={peliculas} setPeliculas={setPeliculas} />
      </div>
    </div>
  );
}

export default App;
