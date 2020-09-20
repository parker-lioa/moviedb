import React from 'react'
import './Search.css';


function Search(props) {
    return (
            <div className="search"> 
                <input 
                className="search-bar"  
                type="text" 
                placeholder="Search the movie" 
                onChange={props.handleInput}
                onKeyPress={props.handlePress}
            >

            </input>
            </div>
    )
}
export default Search
