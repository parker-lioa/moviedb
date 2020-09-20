import React from 'react'

import './Popup.css';

function Popup(props) {
    return (
        <div className="popup">
            <div className="content">
                <h2>{props.selected.Title}<span>{props.selected.Year}</span></h2>
                <p className="rating">Rating:{props.selected.imdbRating}</p>
                <div className="plot">
                    <img alt="error" className="plot-img" src={props.selected.Poster}></img>
                    <p className="plot-text">{props.selected.Plot}</p>
                </div>
                <button className="close-btn" onClick={props.closePopup}>Close</button>
            </div>
        </div>
    )
}

export default Popup
