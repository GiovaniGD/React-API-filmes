import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
        )
            .then((response) => response.json())
            .then((data) => {
                const res = data.results;
                let filme = res.find((key) => {
                    return key.id == id
                });
                setMovie(filme);
            });
    }, []);

    return (
        <div>
            <header>
            <h1>MoveMovies</h1>
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Filmes</li>
                        <li>Contatos</li>
                        <li>Sobre</li>
                    </ul>
                </nav>
            </header>
            <img className="img_movie" src={`${imagePath}${movie.poster_path}`} alt="{movie.title}"/>
            <div className="container">
                <h1>{movie.title}</h1>

                <div className="descricao">
                    <p className="movie-desc">{movie.overview}</p>
                </div>
                
                <div id="divDetalhes">
                    <h3><span>Data de lançamento: </span>{movie.release_date}</h3>
                    <h3><span>Idioma original: </span> {movie.original_language}</h3>
                    <h3><span>Título original: </span> {movie.original_title}</h3>
                    <h3><span>Popularidade: </span> {movie.popularity}</h3>
                </div>
                <Link to="/">
                    <button className="link_button">Voltar</button>
                </Link>
            </div>
        </div>
    );
};

export default Movie;
