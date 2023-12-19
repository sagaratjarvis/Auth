import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import LoggedIn from "./components/LoggedIn";
// import Signup from "./components/Signup"
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signup />} />
        <Route exact path="/logged" element={<LoggedIn />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
