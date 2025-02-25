import { useState, useEffect } from "react"
import startArrayFilms from "../data/arrayFilms"

const Main = () => {
    
    const [arrayFilms, setArrayFilms] = useState(startArrayFilms);

    // const [serchFilm, setSerchFilm] = useEffect('');



    return (


        <main >

            <div className="container">
                
                <div className="container">
                    
                    <form >
                        <input
                            type="text"
                            placeholder = "Cerca il film!"
                            onChange={(e) => setNewTask(e.target.value)}
                            
                        />
                        
                    </form>
        
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