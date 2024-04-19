import React from 'react';

const ResultsOutput = ({predictionResult, handleBack }) => {
    return (
        <div>
            {/* Display prediction result */}
            <h2>Prediction Result</h2>
            <p>{predictionResult.message}</p>
            <button onClick={handleBack}>Back</button>
        </div>
    );
};

export default ResultsOutput;
