import { useState, useEffect } from 'react';
import Movielist from './movielist';
import Searchmovie from './search';
import './App.css'



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchmovie, setSearchmovie] = useState('');




  const Requestmovie = async () => {
    const url = `https://www.omdbapi.com/?apikey=8da18cef&s=${searchmovie}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    if (data.Search) {
      setMovies(data.Search);
    }
  }

  useEffect(() => {
    Requestmovie(searchmovie);
  }, [searchmovie])
    ;



  return (
    <div>
      
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"><img src="logo.jpg" width="300px" height="300px"></img></a>
    <form class="d-flex">
    <div className="moviesearch">
        <Searchmovie searchmovie={searchmovie} setSearchmovie={setSearchmovie} />
        {/* <Movielist movies={movies} /> */}
      </div>
    </form>
  </div>
</nav>
      
      <div className="App">
        <Movielist movies={movies} />
      </div>
    </div>


  );

}
export default App
