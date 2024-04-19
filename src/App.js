import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import './App.css';
import Nav from "./layouts/navbar.js";
import Homepage from "./pages/homepage.jsx"


function App() {
  return(
     <Router>
            <Nav />
            <div>
            <p>this is a test</p>
            </div>
            <Routes>
                <Route path="/Homepage" element={<Homepage />} />
            </Routes>
        </Router>
  );
}

export default App;
