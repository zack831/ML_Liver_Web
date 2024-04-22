import React from 'react';
import "./resultsoutput.css"

const ResultsOutput = ({predictionResult}) => {
// const ResultsOutput = () => {

    return (
        <div>
            <h2>Results:</h2>
            <h3>{predictionResult.message}</h3>
            <h2>Type of Disease:</h2>
            <h3>{predictionResult.message2}</h3>
        </div>
    );
};

export default ResultsOutput;
