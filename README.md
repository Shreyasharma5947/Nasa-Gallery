# 🚀 NASA Astronomy Gallery - React App 🌌

A **React** application that uses **NASA's Astronomy Picture of the Day (APOD)** API to display breathtaking images of the universe. The app allows users to search for images by date, add them to favorites, and toggle between light and dark themes.

---

## 🌍 **Live Demo**  
https://galley.vtubug.com/
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

## 🚀 How to Deploy on GitHub

### Step 1️⃣: Initialize Git & Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Shreyasharma5947/nasa-gallery.git
git push -u origin main
```

### Step 2️⃣: Deployed in
    https://galley.vtubug.com/

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

# Accessing NASA Gallery on Mobile using Ngrok

Follow these steps to access your NASA Gallery on your phone using **ngrok**:

## ✅ Prerequisites
- Ensure **ngrok** is installed on your computer.
- Your NASA Gallery app should be running locally.
- Your phone and computer should be connected to the same Wi-Fi network.

---

## 🚀 Step 1: Start the Local Server
1. Open **Command Prompt** on your computer.
2. Navigate to your project directory using the `cd` command:
    ```bash
    cd path\to\your\nasa-gallery
    ```
3. Start the server using one of the following commands:
    - **For Python**:  
      ```bash
      python -m http.server 8000
      ```
    - **For Node.js**:  
      ```bash
      npm start
      ```
4. Ensure your app is running locally at:  
    ```
    http://localhost:8000
    ```

---

## 🌐 Step 2: Start Ngrok
1. Open a new **Command Prompt** window.
2. Run the following command to expose your local server:
    ```bash
    ngrok http 3000
    ```
    - Replace `3000` with your actual port if it's different.
3. Once ngrok is running, it will generate a public URL like:
    ```
    Forwarding                    https://abc123.ngrok-free.app -> http://localhost:8000
    ```
4. Copy the **ngrok URL**.

---

## 📱 Step 3: Access the Gallery on Your Phone
1. Open a browser on your phone.
2. Paste the **ngrok URL** (e.g., `https://abc123.ngrok-free.app`) into the address bar.
3. Enjoy your NASA Gallery from your mobile device!

---

## ⚡ Troubleshooting
- Ensure your firewall or antivirus is not blocking ngrok.
- Restart ngrok if the link expires.
- Verify that your local server is running and accessible on `http://localhost:3000`.

---

Feel free to reach out if you encounter any issues! 😊



## 📜 License

This project is licensed under the **MIT License**.

