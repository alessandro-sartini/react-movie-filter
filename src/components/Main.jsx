import { useState, useEffect } from "react"
import startArrayFilms from "../data/arrayFilms"


//! components
import SerchBar from "./main-components/SerchBar";
import FilmList from "./main-components/FilmList";
import SelectedGenr from "./main-components/Selectgenr";

const Main = () => {
    
    const [arrayFilms, setArrayFilms] = useState(startArrayFilms);


    const [genreFilm, setGenreFilm] = useState("");
    
    
    const [serchFilm, setSerchFilm] = useState('');



    // ! ricerca + attivazione useEffect
    useEffect(() => {
        console.log("Array Films:", arrayFilms);
    }, [arrayFilms]);


    const filteredFilmsByGender = arrayFilms.filter((el) => {
       
        return (genreFilm === "" || el.genre === genreFilm)
            &&
        el.title.toUpperCase().includes(serchFilm.toUpperCase())

    });

    return (


                <main >

                    <div className="container">

                        <SerchBar
                            serchFilm={serchFilm}
                            setSerchFilm={setSerchFilm}
                        />
                        

                        <SelectedGenr genreFilm={genreFilm} setGenreFilm={setGenreFilm} arrayFilms={arrayFilms} />

                        <FilmList filteredFilmsByGender={ filteredFilmsByGender} />

                     
                    </div>

                </main>

            )


}

export default Main;

{/* <div className="container-input">
    
    <input
    type="text"
    placeholder = "Cerca il film!"
    onChange={(e) => setSerchFilm(e.target.value)}
    value={serchFilm}
    />
    
    </div> */}
    
    
    
    {/* <ul>
        
        {
            filteredFilms.map((el) => {
                    
            return(
                
            <li key={el.id}>
            
            <h3>
            {el.title}
                    </h3> 
                    <span>
                    {el.genre}
                    </span>
                    </li>
            )
            
            
        })
    }
    
    </ul> */}
    {/* <div>
        <select
            value={genreFilm}
            onChange={(e) => setGenreFilm(e.target.value)}
        >
            <option value="">Tutti i film</option>
            {arrayFilms.map((e) => {
    
    
                    return (
                        
                        <option
                            key={e.id}
                            value={e.genre}>
                            {e.genre}
                        </option>
    
    
                    )
                })
            
            
            }
    
        </select>
    </div> */}
    {/* <ul>
    
        {
            filteredFilmsByGender.map((el) => {
                
                return(
                    
                <li key={el.id}>
                
                        <h3>
                            {el.title}
                        </h3> 
                        <span>
                        {el.genre}
                        </span>
    
                    </li>
                )
                
                
            })
        }
    
    </ul> */}