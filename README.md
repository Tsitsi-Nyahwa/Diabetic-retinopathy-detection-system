# 🩺 Diabetic Retinopathy Detection System (V2)

An AI-powered **Mobile-enabled system** for detecting and classifying **Diabetic Retinopathy (DR)** from retinal fundus images using **Convolutional Neural Networks (CNNs)**.  
The system integrates **real-time image analysis**, **patient monitoring**, **data analytics**, and **secure authentication** for improved clinical workflows and early diagnosis.

---

## 🚀 Features

- AI-based detection of DR severity (No DR, Mild, Moderate, Severe, Blindness)  
- Real-time image upload and classification  
- Patient monitoring and health data analytics  
- Secure authentication using PyJWT and SHA-256 password hashing  
- Mobile android and iso compatibility  
- Gamified engagement features for patient awareness  
- Built with **React (Frontend Native)** and **Flask + PyTorch (Backend)**  

---

## 🧩 Tech Stack

| Component | Technology |
|------------|-------------|
| **Frontend Native** 
| **Backend** | Flask (Python) |
| **Model** | PyTorch (CNN) |
| **Auth & Security** | PyJWT, SHA-256, HTTPS |
| **Database** | MongoDB

---

## ⚙️ Installation Guide

### 🖥 Frontend Setup

1. Open your terminal and navigate to the project directory:
   ```bash
   cd Diabetic-Retinopathy-Detection-V2
   ```

2. Move into the frontend directory (if applicable) and install dependencies:
   ```bash
   npm i
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The React frontend should now be running on `http://localhost:5173` (default Vite port).

---

### 🧠 Backend Setup

1. Open a **new terminal** in the project’s root directory.  

2. Install **virtualenv** if not already installed:
   ```bash
   pip install virtualenv
   ```

3. Create and activate a virtual environment:
   ```bash
   virtualenv env
   # Activate on Windows:
   env\Scripts\activate
   # Activate on macOS/Linux:
   source env/bin/activate
   ```

4. Navigate to the backend folder:
   ```bash
   cd backend
   ```

5. Install all required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

6. Run the Flask application:
   ```bash
   python app.py
   ```

The backend should now be running on `http://127.0.0.1:5000`.

---

## 🧪 Model Information

- Framework: **PyTorch**
- Input size: **64 × 64 × 3**
- Classes: `No DR`, `Mild`, `Moderate`, `Severe`, `Blindness`
- Training accuracy: **89%**
- Validation accuracy: **84%**

---

## 🔒 Security

- **PyJWT** for authentication  
- **SHA-256** password hashing  
- **HTTPS** (SSL/TLS) for data encryption  
- **Role-based access control (RBAC)** for user permissions  

```

---

## 💡 Developer Notes

- Ensure both backend (`localhost:5000`) and frontend (`localhost:8081`) servers are running simultaneously.  
- Configure `.env` files for API URLs, secret keys, and database connections e.g EXPO_PUBLIC_IP_ADDRESS = http://192.168.136.144:5000  

