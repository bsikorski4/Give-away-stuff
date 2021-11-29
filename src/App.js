import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "./scss/main.scss"
import Register from "./components/Register";
import Logout from "./components/Logout";


function App() {
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>}>
                </Route>
                <Route path='/logowanie' element={<Login/>}>
                </Route>
                <Route path='/rejestracja' element={<Register/>}>
                </Route>
                <Route path='/wylogowano' element={<Logout/>}>
                </Route>
            </Routes>
        </Router>
    )

}

export default App;
