
const SerchBar = ({serchFilm, setSerchFilm}) => {
    return (
        

    <div className="container-input">
                                        
        <input
            
            type="text"
            placeholder = "Cerca il film!"
            onChange={(e) => setSerchFilm(e.target.value)}
            value={serchFilm}

        />
                                                   
    </div>


    )

    
}
export default SerchBar