import { useState } from "react";
import movies from "../data/movies.json";

import "./Main.css";

function Main() {


    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
    

    const deleteMovie = (movieId) => {
        // console.log("deleting movie with id....", movieId)

        // moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !

        const newList = moviesToDisplay.filter( (element) => {
            return element.id !== movieId;
        });

        setMoviesToDisplay(newList);

    }


    // Conditional Rendering: option A (Element Variables)
    let message = "";
    if(moviesToDisplay.length > 0){
        message = <h1>Number of movies: {moviesToDisplay.length}</h1>;
    } else {
        message = <h1>Sorry, no movies to display</h1>;
    }


    return (
        <div className="Main">

            {message}

            {moviesToDisplay.map((movieObj) => {
                return(
                    <div key={movieObj.id} className="card">
                        <p>{movieObj.title}</p>
                        <p>Rating: {movieObj.rating}</p>


                        { movieObj.imgURL 
                            ? <img src={movieObj.imgURL} /> 
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        }


                        { movieObj.rating > 8 && <p>RECOMMENDED</p>}

                        <p>
                            <button onClick={ () => {deleteMovie(movieObj.id)}}>Delete this movie</button>
                        </p>
                    </div>
                )
            })}
        </div>
    );
}

export default Main;