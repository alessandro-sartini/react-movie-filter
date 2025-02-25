import { useState, useEffect } from "react"
import startArrayFilms from "../data/arrayFilms"

const Main = () => {
    
    const [arrayFilms, setArrayFilms] = useState(startArrayFilms);

    const [serchFilm, setSerchFilm] = useEffect('');



    // ! ricerca + attivazione useEffect
    useEffect(() => {
        console.log("Array Films:", arrayFilms);
    }), [arrayFilms];

    const filteredFilms = arrayFilms.filter((el) =>
        el.title.toUpperCase().includes(serchFilm.toUpperCase())
    );
    return (


        <main >

            <div className="container">
                
                <div className="container">
                    
                    
                    <input
                        type="text"
                        placeholder = "Cerca il film!"
                        onChange={(e) => setSerchFilm(e.target.value)}
                        value={serchFilm}
                    />
                        
                    
        
                </div>
                <ul>

                    {
                        arrayFilms.map((el) => {

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

                </ul>
            </div>


        </main>

    )


}

export default Main;