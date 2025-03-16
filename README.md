<<<<<<< HEAD
# Temporary Client Demo

## Project Overview
This project is a **Temporary Client Demo** web application that allows users to upload PDF and XML files via the frontend, which are then stored in a backend database. The application is built using **React (TypeScript) for the frontend** and **Express.js for the backend**, with **MongoDB or PostgreSQL** as the database.

## Features
- **File Upload**: Users can upload PDF and XML files from the frontend.
- **File Storage**: Uploaded files are stored in a database.
- **File Listing**: Users can view the list of uploaded files.
- **REST API**: Backend provides API routes for file management.
- **Secure Handling**: Uses Multer for file handling and CORS for security.
=======
# Data AI Agent

![Web Page Preview](./screenshot.png)

## Project Overview
This project is a **Data AI Agent** web application that allows users to upload files and input text via a user-friendly interface. The application is built using **React (TypeScript) for the frontend** and can be integrated with a backend for file processing and storage.

## Features
- **File Upload**: Users can upload files by clicking on the left panel.
- **Text Input**: Users can enter text on the right panel.
- **Modern UI**: A sleek, responsive UI built with Tailwind CSS.
- **Interactive Experience**: Smooth animations and transitions for enhanced usability.
>>>>>>> recovery-branch

## Technology Stack
### Frontend (React + TypeScript)
- React (TypeScript)
<<<<<<< HEAD
- Axios (for API calls)
- React Dropzone (for drag-and-drop file uploads)
- React Router (for navigation)

### Backend (Express.js + Node.js)
- Express.js (for REST API)
- Multer (for file uploads)
- MongoDB with Mongoose **or** PostgreSQL with Sequelize (for database storage)
- dotenv (for environment variables)
=======
- Tailwind CSS (for styling)
- Lucide React (for icons)
>>>>>>> recovery-branch

## Folder Structure
```
📦 project-root
<<<<<<< HEAD
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
=======
├── 📂 src
│   ├── 📂 components
│   │   ├── FileTextUploader.tsx   # Main component for file upload and text input
│   │   ├── styles.css             # Custom styles for UI
│   ├── 📂 pages
│   │   ├── Home.tsx               # Main landing page
│   ├── App.tsx                    # Main app component
│   ├── index.tsx                  # Entry point for React app
│   ├── package.json                # Project dependencies
│   ├── README.md                   # Documentation
>>>>>>> recovery-branch
```

## Installation & Setup
### Prerequisites
- **Node.js** (v16 or higher)
<<<<<<< HEAD
- **MongoDB or PostgreSQL** (if using local DB)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
=======

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/data-ai-agent.git
   cd data-ai-agent
>>>>>>> recovery-branch
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
<<<<<<< HEAD
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
=======
3. Start the development server:
>>>>>>> recovery-branch
   ```sh
   npm start
   ```

<<<<<<< HEAD
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

=======
## Future Enhancements
- ✅ Backend integration for file processing.
- ✅ Dark mode support.
- ✅ Drag-and-drop file upload.
- ✅ AI-powered text analysis.

This project serves as a foundation for AI-driven file and text processing applications. 🚀
>>>>>>> recovery-branch
