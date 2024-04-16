import "./homepage.css";
import Nav from "../layouts/navbar.js"
import React, { useEffect, useState } from "react";
// import { useState } from 'react';

function Homepage(){

	const [inputs, setinputs] = useState({})
	const [message, setmessage] = useState({});

	const fetchmessage = async() => {
		const requestOptions = {
			method : "GET",
			headers: {
				"Content-Type": "application/json"
			},
		};

		const response = await fetch("/home",requestOptions);
		const data = response.json();

		console.log(data);
	};

	useEffect(()=>{
		fetchmessage();
	},[]);

	const handleChange = (event) => {
    	var name = event.target.name;
    	var value = event.target.value;
    	setinputs(values => ({...values,[name]:value}))  
  	}
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
}
	return(
		<div className = "body">
			<h1>Input data for predection</h1>
			<form className='login_form' onSubmit={handleSubmit}>

		        <div>
		          <label for = "age">Age</label>
		          <input type = "text"  
		          name = "age" 
		          placeholder = "int" 
		          value ={inputs.age || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "gender">Gender</label>
		          <input type = "text" 
		          name = "gender" 
		          placeholder = "int" 
		          value ={inputs.gender || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "albumin">Albumin</label>
		          <input type = "text" 
		          name = "albumin" 
		          placeholder = "int" 
		          value ={inputs.albumin || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "bilirubin">Bilirubin</label>
		          <input type = "text"
		          name = "bilirubin" 
		          placeholder = "int" 
		          value ={inputs.bilirubin || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "alk_phosphate">Alkaline Phosphate</label>
		          <input type = "text" 
		          name = "alk_phosphate" 
		          placeholder = "int" 
		          value ={inputs.alk_phosphate || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "sgot">SGOT</label>
		          <input type = "text" 
		          name = "sgot" 
		          placeholder = "int" 
		          value ={inputs.sgot || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "ascites">Ascites</label>
		          <input type = "text" 
		          name = "ascites" 
		          placeholder = "ascites" 
		          value ={inputs.ascites || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "spiders">Spiders</label>
		          <input type = "text" 
		          name = "spiders" 
		          placeholder = "int" 
		          value ={inputs.spiders || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "prothrombin">Prothrombin</label>
		          <input type = "text" 
		          name = "prothrombin" 
		          placeholder = "int" 
		          value ={inputs.prothrombin || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "hepatomegaly">Hepatomegaly</label>
		          <input type = "text" 
		          name = "hepatomegaly" 
		          placeholder = "int" 
		          value ={inputs.hepatomegaly || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "platelets">Platelets</label>
		          <input type = "text" 
		          name = "platelets" 
		          placeholder = "int" 
		          value ={inputs.platelets || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "class">Class</label>
		          <input type = "text" 
		          name = "class" 
		          placeholder = "int" 
		          value ={inputs.class || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "alpha_fetoprotein">Alpha Fetoprotein</label>
		          <input type = "text" 
		          name = "alpha_fetoprotein" 
		          placeholder = "int" 
		          value ={inputs.alpha_fetoprotein || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "ferritin">Ferritin</label>
		          <input type = "text" 
		          name = "ferritin" 
		          placeholder = "int" 
		          value ={inputs.ferritin || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "hemoglobin">Hemoglobin</label>
		          <input type = "text" 
		          name = "hemoglobin" 
		          placeholder = "int" 
		          value ={inputs.hemoglobin || ""}
		          onChange={handleChange}
		          ></input>
		        </div>

		         <div>
		          <label for = "protien">Protien</label>
		          <input type = "text" 
		          name = "protien" 
		          placeholder = "User Name" 
		          value ={inputs.protien || ""}
		          onChange={handleChange}
		          ></input>
		        </div>



		        <div>
		          <label for = "varices">Varices</label>
		          <input type = "text"
		          name = "varices"
		          placeholder = "int"
		          value = {inputs.varices || ""}
		          onChange={handleChange}
		          ></input>
		        </div>


		         <div>
		          <label for = "malaise">Malaise</label>
		          <input type = "text" 
		          name = "malaise" 
		          placeholder = "float" 
		          value ={inputs.malaise || ""}
		          onChange={handleChange}
		          ></input>
		        </div>
		      
		        <input type = "submit" value = "Submit" className = "submit_login"></input>

	      	</form>
		</div>
	);
}
export default Homepage;