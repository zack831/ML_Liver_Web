import "./homepage.css";
import Nav from "../layouts/navbar.js"
import React, { useEffect, useState } from "react";

function Homepage(){

	const [inputs, setinputs] = useState({});
	const [data, setdata] = useState([{}]);

	const handleChange = (event) => {
		var name = event.target.name;
    var value = event.target.value;
    setinputs(values => ({...values,[name]:value}))  
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };


	return(
		<div className = "body">
			<h1>Input data for predection</h1>
			<div className = "box">
				<form className='login_form' onSubmit={handleSubmit}>

			        <div className = "features1">
			          <label for = "AGE">Age</label>
			          <input type = "text"  
			          name = "AGE" 
			          placeholder = "int" 
			          value ={inputs.AGE || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features2">
			          <label for = "GENDER">Gender</label>
			          <input type = "text" 
			          name = "GENDER" 
			          placeholder = "int" 
			          value ={inputs.GENDER || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features3">
			          <label for = "ALBUMIN">Albumin</label>
			          <input type = "text" 
			          name = "ALBUMIN" 
			          placeholder = "Float" 
			          value ={inputs.ALBUMIN || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features4">
			          <label for = "BILIRUBIN">Bilirubin</label>
			          <input type = "text"
			          name = "BILIRUBIN" 
			          placeholder = "Float" 
			          value ={inputs.BILIRUBIN || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features5">
			          <label for = "ALK_PHOSPHATE">Alkaline Phosphate</label>
			          <input type = "text" 
			          name = "ALK_PHOSPHATE" 
			          placeholder = "Float" 
			          value ={inputs.ALK_PHOSPHATE || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features6">
			          <label for = "SGOT">SGOT</label>
			          <input type = "text" 
			          name = "SGOT" 
			          placeholder = "Float" 
			          value ={inputs.SGOT || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features7">
			          <label for = "ASCITES">Ascites</label>
			          <input type = "text" 
			          name = "ASCITES" 
			          placeholder = "int" 
			          value ={inputs.ASCITES || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features8">
			          <label for = "SPIDERS">Spiders</label>
			          <input type = "text" 
			          name = "SPIDERS" 
			          placeholder = "Float" 
			          value ={inputs.SPIDERS || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features9">
			          <label for = "PROTHROMBIN">Prothrombin</label>
			          <input type = "text" 
			          name = "PROTHROMBIN" 
			          placeholder = "Float" 
			          value ={inputs.PROTHROMBIN || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features10">
			          <label for = "HEPATOMEGALY">Hepatomegaly</label>
			          <input type = "text" 
			          name = "HEPATOMEGALY" 
			          placeholder = "Float" 
			          value ={inputs.HEPATOMEGALY || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features11">
			          <label for = "PALTELETS">Platelets</label>
			          <input type = "text" 
			          name = "PALTELETS" 
			          placeholder = "Float" 
			          value ={inputs.PALTELETS || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features12">
			          <label for = "CLASS">Class</label>
			          <input type = "text" 
			          name = "CLASS" 
			          placeholder = "Float" 
			          value ={inputs.CLASS || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features13">
			          <label for = "ALPHA_FETOPROTEIN">Alpha Fetoprotein</label>
			          <input type = "text" 
			          name = "ALPHA_FETOPROTEIN" 
			          placeholder = "Float" 
			          value ={inputs.ALPHA_FETOPROTEIN || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features14">
			          <label for = "FERRITIN">Ferritin</label>
			          <input type = "text" 
			          name = "FERRITIN" 
			          placeholder = "Float" 
			          value ={inputs.FERRITIN || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features15">
			          <label for = "HEMOGLOBIN">Hemoglobin</label>
			          <input type = "text" 
			          name = "HEMOGLOBIN" 
			          placeholder = "Float" 
			          value ={inputs.HEMOGLOBIN || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features16">
			          <label for = "PROTINE">Protien</label>
			          <input type = "text" 
			          name = "PROTINE" 
			          placeholder = "Float" 
			          value ={inputs.PROTINE || ""}
			          onChange={handleChange}
			          ></input>
			        </div>

			        <div className = "features17">
			          <label for = "VARICES">Varices</label>
			          <input type = "text"
			          name = "VARICES"
			          placeholder = "Float"
			          value = {inputs.VARICES || ""}
			          onChange={handleChange}
			          ></input>
			        </div>


			        <div className = "features18">
			          <label for = "MALAISE">Malaise</label>
			          <input type = "text" 
			          name = "MALAISE" 
			          placeholder = "Float" 
			          value ={inputs.MALAISE || ""}
			          onChange={handleChange}
			          ></input>
			        </div>
			      
			        <input type = "submit" value = "Submit" className = "submit_login"></input>

		      	</form>
	      	</div>
		</div>
	);
}
export default Homepage;