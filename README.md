# Temporary Client Demo

## Project Overview
This project is a **Temporary Client Demo** web application that allows users to upload PDF and XML files via the frontend, which are then stored in a backend database. The application is built using **React (TypeScript) for the frontend** and **Express.js for the backend**, with **MongoDB or PostgreSQL** as the database.

## Features
- **File Upload**: Users can upload PDF and XML files from the frontend.
- **File Storage**: Uploaded files are stored in a database.
- **File Listing**: Users can view the list of uploaded files.
- **REST API**: Backend provides API routes for file management.
- **Secure Handling**: Uses Multer for file handling and CORS for security.

## Technology Stack
### Frontend (React + TypeScript)
- React (TypeScript)
- Axios (for API calls)
- React Dropzone (for drag-and-drop file uploads)
- React Router (for navigation)

### Backend (Express.js + Node.js)
- Express.js (for REST API)
- Multer (for file uploads)
- MongoDB with Mongoose **or** PostgreSQL with Sequelize (for database storage)
- dotenv (for environment variables)

## Folder Structure
```
📦 project-root
├── 📂 backend
│   ├── 📂 uploads               # Temporary file storage
│   ├── 📂 models                # Database models
│   │   ├── fileModel.js         # Schema for storing file metadata
│   ├── 📂 routes                # API endpoints
│   │   ├── fileRoutes.js        # Routes for file upload & retrieval
│   ├── 📂 config                # Configuration files
│   │   ├── db.js                # Database connection setup
│   ├── .env                     # Environment variables
│   ├── server.js                # Main Express server file
│   ├── package.json             # Backend dependencies
│   ├── package-lock.json        # Dependency lock file
│
├── 📂 frontend
│   ├── 📂 src
│   │   ├── 📂 components
│   │   │   ├── FileUpload.tsx   # File upload component
│   │   │   ├── FileList.tsx     # File listing component
│   │   ├── 📂 pages
│   │   │   ├── Home.tsx         # Home page (upload UI)
│   │   │   ├── Files.tsx        # File list display page
│   │   ├── App.tsx              # Main app component (routes setup)
│   │   ├── index.tsx            # Entry point for React app
│   │   ├── styles.css           # Stylesheets
│   ├── public
│   │   ├── index.html           # HTML template for React app
│   ├── .env                     # Environment variables
│   ├── package.json             # Frontend dependencies
│   ├── package-lock.json        # Dependency lock file
│
├── README.md                     # Documentation
```

## Installation & Setup
### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB or PostgreSQL** (if using local DB)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the **.env** file:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/temp-client-demo
   # OR for PostgreSQL
   DB_URI=postgres://user:password@localhost:5432/temp_client_demo
   ```
4. Start the backend server:
   ```sh
   node server.js
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```

## API Endpoints
### File Upload (POST)
```
POST /upload
Content-Type: multipart/form-data
Body: { file: <PDF/XML file> }
```
### Get Uploaded Files (GET)
```
GET /files
Response: [ { filename, fileType, uploadedAt } ]
```

## Future Enhancements
- ✅ Use **AWS S3 or Firebase Storage** for storing files.
- ✅ Implement **JWT Authentication** for secure file access.
- ✅ Add a **progress bar** for file uploads.
- ✅ Improve UI using **Material UI / Tailwind CSS**.

---

This project is designed for temporary client demonstration and can be expanded as needed. 🚀

<<<<<<< HEAD
=======
>>>>>>> 9c9e371 (project structure created)
=======
>>>>>>> 86d07ff (project structure check)
