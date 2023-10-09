import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const KEY = process.env.REACT_APP_KEY;
  
    useEffect(() => {
      if (searchQuery === '') {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
          .then((response) => response.json())
          .then((data) => {
            setMovies(data.results);
          });
      } else {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${searchQuery}`)
          .then((response) => response.json())
          .then((data) => {
            setMovies(data.results);
          });
      }
    }, [KEY, searchQuery]);
  
    const handleSearch = () => {
      setSearchQuery(searchQuery);
    };

    return (
        <Container>
            <header>
                <h1>MoveMovies</h1>
                <nav>
                    <ul>
                        <a href="/"><li>Inicio</li></a>
                        <li>Contatos</li>
                        <li>Sobre</li>
                    </ul>
                </nav>
                
            </header>
            <div>
                <div id="divBusca">
                    <input type="text" placeholder="Digite o nome do filme" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    <button id="buttonBusca" onClick={handleSearch}>Buscar</button>
                </div>
                <div>
                    <MovieList>
                        {movies.map((movie) => {
                            return (
                                <Movie key={movie.id}>
                                    <img src={`${imagePath}${movie.poster_path}`} alt="{movie.title}"/>
                                    <span>{movie.title}</span>

                                    <Link to={`/${movie.id}`}>
                                        <Btn>Ver mais</Btn>
                                    </Link>
                                </Movie>
                            );
                        })}
                    </MovieList>
                </div>
            </div> 
        </Container>
    );
}

export default Home;
