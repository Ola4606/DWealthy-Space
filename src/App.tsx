import React from "react";
import BottomNavBar from "./components/BottomNavBar";
import NavBar from "./components/NavBar";
import MainHomePage from "./pagesComponent/home/MainHomePage";
import MainOppurtunityPage from "./pagesComponent/oppurtunity/MainOppurtunityPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./components/PageNotFound";
import MainContactPage from "./pagesComponent/contact/MainContactPage";
import MainAboutPage from "./pagesComponent/about/MainAboutPage";

function App() {
  return (
    <div className="bg-white">
      <Router>
        <ScrollToTop />
        <div className="px-24 py-10">
          <NavBar />

          <Routes>
            <Route path="/" element={<MainHomePage />} />
            <Route path="/opportunities" element={<MainOppurtunityPage />} />
            <Route path="/about" element={<MainAboutPage />} />
            <Route path="/contact" element={<MainContactPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>

        <BottomNavBar />
      </Router>
    </div>
  );
}

export default App;
