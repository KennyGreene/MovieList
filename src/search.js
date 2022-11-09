import React from 'react'

const Searchmovie = (props) => {
    return(
        <div className="search">
            <input 
            className ="btn btn-primary btn-lg"
            value={props.value}
            onChange={(event) => props.setSearchmovie(event.target.value)}
            placeholder="Search Movie"
            >

            </input>
        </div>
    )
    
}
export default Searchmovie;