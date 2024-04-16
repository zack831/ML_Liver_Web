import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import './App.css';
import Nav from "./layouts/navbar.js";
import Homepage from "./pages/homepage.js"


function App() {
  return(
     <Router>
            <Nav />
            <Routes>
                <Route path="/home" element={<Homepage />} />
            </Routes>
        </Router>
  );
}

export default App;
