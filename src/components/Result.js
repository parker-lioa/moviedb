import React from 'react'

import './Result.css';

function Result(props) {
    return (
        <div className="result" onClick={()=>{props.openPopup(props.result.imdbID)}}>
            <img alt="error" src={props.result.Poster} ></img>
            <div className="movie-title">
                <h3>{props.result.Title}</h3> 
            </div>
        </div>
    )
}

export default Result
