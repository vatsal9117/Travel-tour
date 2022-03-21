import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
              <Routes>
                <Route exact path={"/"} element={<Home />}/>
                <Route exact path={"/Login"} element={<Login />} />
                <Route exact path={"/SignUp"} element={<SignUp />} />
              </Routes>
            </Router>
    </div>
  );
}

export default App;