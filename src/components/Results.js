import React from 'react'
import Result from './Result';

import './Results.css';

function Results(props) {

    const results = props.results;

    return (
        <div className="results">
            {
                results?
                    results.map((result)=>{
                    return <Result result={result} key={result.imdbID} openPopup={props.openPopup}/>}):null
            }
        </div>
    )
}

export default Results;
