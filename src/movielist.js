import React from 'react'

const Movielist = (props) => {
       return (
        <>
            {props.movies.map((movie, index) => {
               return(
                <div class="d-flex-row mb-3 -flex flex-nowrap">
                    <img src={movie.Poster} alt="movies" />
                       <p>{movie.Title}</p>
                       <p>{movie.Year}</p>
                </div>
               )
            })
            }
        </>
    )

}

export default Movielist;