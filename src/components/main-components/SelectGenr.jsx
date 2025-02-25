export default function SelectedGenr({arrayFilms,genreFilm, setGenreFilm}) {
    
    return (


        <div>
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
                </div>
    )



}