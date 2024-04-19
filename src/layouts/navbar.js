import "./navbar.css";
import {Link} from "react-router-dom";

function Nav(){
	return(
		<div className = "navbody">
		<h1 className = "header">Mortality Predection and Classification</h1>
		<div className = "options">
			<h4 className = "text"><Link to = "/Homepage">Home</Link></h4>
			<h4 className = "text">Sign Up</h4></div>
		</div>
	);
}

export default Nav;