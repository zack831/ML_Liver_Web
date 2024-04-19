import React, { useState } from 'react';
import Predection from "../components/featureInputs.js"
import ResultsOutput from "../components/resultsOutput.jsx"

function Homepage() {
	const [showPredictionForm, setShowPredictionForm] = useState(true);
	 const [predictionResult, setPredictionResult] = useState(null);

    const handleNext = (data) => {
        setShowPredictionForm(false);
        setPredictionResult(data);
    };

    const handleBack = () => {
        setShowPredictionForm(true);
    };

    return (
        <div>
            {showPredictionForm ? (
                <Predection handleNext={handleNext} />
            ) : (
                <ResultsOutput predictionResult={predictionResult} handleBack={handleBack} />
            )}
        </div>
    );

}

export default Homepage;