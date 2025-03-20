import React, { useEffect, useState } from "react";
import "./NasaGallery.css"; // Import the CSS file

const NASA_API_KEY = "vXokw0BeURDGqspmOwAkDjiiojNUyhY90k5WYeoU"; // Replace with your API key

const NasaGallery = () => {
  const [images, setImages] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch images from NASA API
  const fetchImages = (date = "") => {
    let API_URL = date
      ? `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`
      : `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&count=10`;



    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setImages(date ? [data] : data))
      .catch((error) => console.error("Error fetching NASA data:", error));
  };

  useEffect(() => {
    fetchImages();
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Add image to favorites
  const addToFavorites = (image) => {
    if (!favorites.some((fav) => fav.url === image.url)) {
      const updatedFavorites = [...favorites, image];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      alert("Added to favorites!");
    } else {
      alert("This image is already in favorites.");
    }
  };

  // Remove image from favorites
  const removeFromFavorites = (image) => {
    const updatedFavorites = favorites.filter((fav) => fav.url !== image.url);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Toggle favorite images view
  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  // Toggle light/dark theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };

  return (
<div className={`gallery-container ${darkMode ? "dark" : ""}`}>
{/* Header with title and buttons */}
      <header className="gallery-header">
        <h1 className="header-title">🚀 NASA Astronomy Gallery 🌌</h1>
        <div className="buttons">
          <button className="theme-btn" onClick={toggleTheme}>
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
          <button className="toggle-btn" onClick={toggleFavorites}>
            {showFavorites ? "📷 View Gallery" : "⭐ View Favorites"}
          </button>
        </div>
      </header>

      {/* Search Bar */}
      {!showFavorites && (
        <div className="search-bar">
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
          <button onClick={() => fetchImages(searchDate)}>🔍 Search</button>
        </div>
      )}

      {/* Image Grid */}
      <div className="image-grid">
        {(showFavorites ? favorites : images).map((item, index) => (
          <div key={index} className="image-card">
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <img src={item.url} alt={item.title} className="nasa-image" />
            {showFavorites ? (
              <button className="remove-btn" onClick={() => removeFromFavorites(item)}>
                ❌ Remove
              </button>
            ) : (
              <button className="favorite-btn" onClick={() => addToFavorites(item)}>
                ⭐ Add to Favorites
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NasaGallery;