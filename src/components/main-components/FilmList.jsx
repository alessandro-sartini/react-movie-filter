export default function FilmList({filteredFilms}) {
    
    return (
        

        <ul>
            
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

        </ul>

    )




}