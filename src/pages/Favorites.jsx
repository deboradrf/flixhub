import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const {favorites} = useMovieContext()

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Seus Favoritos</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            </div>
        )
    }

    return <div className="favorites-empty">
        <h2>Sem favoritos</h2>
        <p>Comece adicionando filmes aos favoritos</p>
    </div>
}

export default Favorites