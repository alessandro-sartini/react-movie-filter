import { useState, useEffect } from "react"
import startArrayFilms from "../data/arrayFilms"


// components
import SerchBar from "./main-components/SerchBar";
import FilmList from "./main-components/FilmList";
const Main = () => {
    
    const [arrayFilms, setArrayFilms] = useState(startArrayFilms);

    const [serchFilm, setSerchFilm] = useState('');



    // ! ricerca + attivazione useEffect
    useEffect(() => {
        console.log("Array Films:", arrayFilms);
    }, [arrayFilms]);

    const filteredFilms = arrayFilms.filter((el) =>
        el.title.toUpperCase().includes(serchFilm.toUpperCase())
    );


    return (


                <main >

                    <div className="container">
                        

                        <SerchBar
                            serchFilm={serchFilm}
                            setSerchFilm={setSerchFilm}
                        />

                        <FilmList
                            filteredFilms={filteredFilms}
                        />

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