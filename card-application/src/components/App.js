import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Flashcards from "./Flashcards";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Navbar from "./Navbar";
import "../assets/App.css";
import ContactPage from "./ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
