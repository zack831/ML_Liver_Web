import "./navbar.css";
import {Link} from "react-router-dom";

function Nav({ onRouteClick }){

    const handleRouteClick = () => {
        onRouteClick();
    };

    return (
        <nav>
            <ul>
                <li>
                    <div className="options">
                        <h4 className="text">
                            <Link to="/Homepage" onClick={handleRouteClick}>Home</Link>
                        </h4>
                    </div>
                </li>
                {/* Add more route links here */}
            </ul>
        </nav>
    );

	// return(
	// 	<div className = "navbody">
	// 	<h1 className = "header">Mortality Predection and Classification</h1>
	// 	<div className = "options">
	// 		<h4 className = "text"><Link to = "/Homepage" onClick={handleRouteClick}>Home</Link></h4>
	// 	</div>
	// );
}

export default Nav;