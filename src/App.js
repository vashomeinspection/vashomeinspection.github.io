import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import Preloader from "../src/Components/Preload.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import ScrollToTop from "./Components/ScrollTop.js";

import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Reviews from "./Components/Reviews/reviews";
import Services from "./Components/Services/services";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route  path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;