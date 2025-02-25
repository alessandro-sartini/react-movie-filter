export default function FilmList({filteredFilmsByGender}) {
    
    return (
        

        <ul>
            
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

    </ul>
    )




}