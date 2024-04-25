import React, { useState } from 'react';
import axios from 'axios';
import "./featureInputs.css"
import ShowResults from "./resultsOutput.jsx"

const Predection = ({ handleNext }) => {
    const [inputs, setInputs] = useState({
        AGE: '',
        GENDER: '',
        ALBUMIN: '',
        BILIRUBIN: '',
        ALK_PHOSPHATE: '',
        SGOT: '',
        ASCITES: '',
        SPIDERS: '',
        PROTHROMBIN: '',
        HEPATOMEGALY: '',
        PALTELETS: '',
        CLASS: '',
        ALPHA_FETOPROTEIN: '',
        FERRITIN: '',
        HEMOGLOBIN: '',
        PROTINE: '',
        VARICES: '',
        MALAISE: '', 

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://flask-c0jq.onrender.com//predict', inputs);
            handleNext(response.data);
            console.log(response.data); // Handle response from Flask server
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className = "feature_body">
            <div className = "feature_inputs">
                <label for = "AGE">Age</label><input type="number" name="AGE" value={inputs.AGE} onChange={handleChange} />
                <label for = "GENDER">Gender</label><input type="float" name="GENDER" value={inputs.GENDER} onChange={handleChange} />
                <label for = "ALBUMIN">Albumin</label><input type="text" name="ALBUMIN" value={inputs.ALBUMIN} onChange={handleChange} />
                <label for = "BILIRUBIN">Bilirubin</label><input type="text" name="BILIRUBIN" value={inputs.BILIRUBIN} onChange={handleChange} />
                <label for = "ALK_PHOSPHATE">Alkaline Phosphate</label><input type="text" name="ALK_PHOSPHATE" value={inputs.ALK_PHOSPHATE} onChange={handleChange} />
                <label for = "SGOT">SGOT</label><input type="text" name="SGOT" value={inputs.SGOT} onChange={handleChange} />
                <label for = "ASCITES">Ascites</label><input type="text" name="ASCITES" value={inputs.ASCITES} onChange={handleChange} />
                <label for = "SPIDERS">Spiders</label><input type="text" name="SPIDERS" value={inputs.SPIDERS} onChange={handleChange} />
                <label for = "PROTHROMBIN">Prothrombin</label><input type="text" name="PROTHROMBIN" value={inputs.PROTHROMBIN} onChange={handleChange} />
                <label for = "HEPATOMEGALY">Hepatomegaly</label><input type="text" name="HEPATOMEGALY" value={inputs.HEPATOMEGALY} onChange={handleChange} />
                <label for = "PALTELETS">Paletets</label><input type="text" name="PALTELETS" value={inputs.PALTELETS} onChange={handleChange} />
                <label for = "CLASS">Class</label><input type="text" name="CLASS" value={inputs.CLASS} onChange={handleChange} />
                <label for = "ALPHA_FETOPROTEIN">Alpha Fetoprotein</label><input type="text" name="ALPHA_FETOPROTEIN" value={inputs.ALPHA_FETOPROTEIN} onChange={handleChange} />
                <label for = "FERRITIN">Ferritin</label><input type="text" name="FERRITIN" value={inputs.FERRITIN} onChange={handleChange} />
                <label for = "HEMOGLOBIN">Hemoglobin</label><input type="text" name="HEMOGLOBIN" value={inputs.HEMOGLOBIN} onChange={handleChange} />
                <label for = "PROTINE">Protien</label><input type="text" name="PROTINE" value={inputs.PROTINE} onChange={handleChange} />
                <label for = "VARICES">Varices</label><input type="text" name="VARICES" value={inputs.VARICES} onChange={handleChange} />
                <label for = "MALAISE">Malaise</label><input type="text" name="MALAISE" value={inputs.MALAISE} onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div className = "results">
                
            </div>
        </div>
    );
};

export default Predection;
