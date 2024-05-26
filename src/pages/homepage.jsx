import React, { useState } from 'react';
import Predection from "../components/featureInputs.js"
import ResultsOutput from "../components/resultsOutput.jsx";
import Guide from "../components/guide.jsx";
import "./homepage.css";

function Homepage() {
	const [predictionResult, setPredictionResult] = useState(null);

    const handleNext = (data) => {
        setPredictionResult(data);
    };

    // const handleBack = () => {
    //     setShowPredictionForm(true);
    // };

    return (
         <div className="contents">
            <div className="prediction-section">
                <Predection handleNext={handleNext} />
            </div>
            <div className="guide-section">
                <Guide/>
            </div>
            {predictionResult && (
                <div className="results-section">
                    <ResultsOutput predictionResult={predictionResult}/>
                </div>
            )}
        </div>
    );

}

export default Homepage; 