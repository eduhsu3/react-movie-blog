import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import MainCreate from './components/main_create/MainCreate';
import { movieData } from './data/movieData';

function App() {
  const [isCreate, setIsCreate] = useState(true);
  const [movies, setMovies] = useState(movieData);
  return (
    <>
      <Header setIsCreate={setIsCreate} />
      {isCreate ? <Main movies={movies} /> : <MainCreate setMovies={setMovies} setIsCreate={setIsCreate} />}
      <Footer />
    </>
  );
}

export default App;
