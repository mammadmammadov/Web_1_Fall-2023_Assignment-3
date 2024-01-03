import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import FlashcardPage from "./FlashcardPage";
import ContactForm from "./ContactForm";
import NoPage from "./NoPage";
import Navbar from "./Navbar";
import "../assets/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Web_1_Fall-2023_Assignment-3" element={<Home />} />
        <Route path="/flashcards" element={<FlashcardPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
