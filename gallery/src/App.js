import React from "react";
import ImageGallery from "./components/ImageGallery.jsx";
import { images } from "./data/images.js";
import "./index.css";

export default function App() {
  return (
    <main className="app-container">
      <header className="site-header">
        <h1 className="brand">Image Gallery</h1>
      </header>
      <ImageGallery images={images} />
    </main>
  );
}