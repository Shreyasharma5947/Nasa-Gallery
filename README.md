# 🚀 NASA Astronomy Gallery - React App 🌌

A **React** application that uses **NASA's Astronomy Picture of the Day (APOD)** API to display breathtaking images of the universe. The app allows users to search for images by date, add them to favorites, and toggle between light and dark themes.

---

## 📌 Features

✅ **Fetch NASA images**: View stunning images using the NASA APOD API.

✅ **Search by Date**: Search for images by selecting a date.

✅ **Favorite Images**: Add images to a favorites gallery for quick access.

✅ **Remove from Favorites**: Manage your favorite images easily.

✅ **Light/Dark Mode**: Toggle between light and dark themes for an optimal viewing experience.

✅ **Responsive Design**: Fully responsive for desktop and mobile devices.

✅ **Deployed on Vercel**: Easily accessible through a public link.

---
## 📥 Prerequisites

Ensure you have the following installed before proceeding:

- **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)**
- **[Node.js and npm](https://nodejs.org/)**
- **[Git](https://git-scm.com/)**

To check if they are installed, run the following commands:
```bash
node -v
npm -v
git --version
```

---

## 📂 Folder Structure

```bash
nasa-gallery
├── public
├── src
│   ├── NasaGallery.js
│   ├── NasaGallery.css
│   ├── App.js
│   ├── index.js
│   ├── themeContext.js
├── .gitignore
├── package.json
├── README.md
```

---

## ⚡ How to Set Up & Run the Project Locally

### Step 1️⃣: Clone the Repository
```bash
git clone https://github.com/Shreyasharma5947/nasa-gallery.git
cd nasa-gallery
```

### Step 2️⃣: Install Dependencies
```bash
npm install
```

### Step 3️⃣: Start the Development Server
```bash
npm start
```
- The app will run at **http://localhost:3000/**.

---

## 🚀 How to Deploy on GitHub & Vercel

### Step 1️⃣: Initialize Git & Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Shreyasharma5947/nasa-gallery.git
git push -u origin main
```

### Step 2️⃣: Deploy on Vercel
1. Visit **[Vercel](https://vercel.com/)** and sign in using your GitHub account.
2. Click on **"New Project"** → Select your repository → **Deploy**.
3. Once deployed, copy the provided link (e.g., `https://nasa-gallery.vercel.app/`).

---

## 🎨 Screenshots

| Light Mode | Dark Mode |
|-------------|-----------|
| ![Light Mode](https://via.placeholder.com/400x300?text=Light+Mode) | ![Dark Mode](https://via.placeholder.com/400x300?text=Dark+Mode) |


## 🧑‍💻 API Key Configuration

Make sure you have a valid NASA API key. Replace the placeholder in your code with your own API key:
```javascript
const NASA_API_KEY = "YOUR_NASA_API_KEY";
```
You can obtain the key from [NASA API](https://api.nasa.gov/).

---

## 📜 License

This project is licensed under the **MIT License**.

