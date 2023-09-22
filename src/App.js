import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./layout/ScrollToTop";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/js/bootstrap.bundle.min";
// // import "./App.scss";
// import Header from "./layout/header";
// import Footer from "./layout/footer";
import { Home } from "./components/home";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/updateWeb" element={<UpdateWeb />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
