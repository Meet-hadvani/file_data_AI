import React, { useState } from "react";
import { UploadCloud } from "lucide-react";
import "./styles.css";

export default function FileTextUploader() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="container">
      <h1 className="app-title">Data AI Agent</h1>
      <div className="card">
        
        {/* Left: File Upload */}
        <div className="left-panel" onClick={() => document.getElementById('file-upload')?.click()}>
          <UploadCloud className="icon" />
          <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
          <p className="file-name">{file ? file.name : "Click to upload file"}</p>
        </div>

        {/* Right: Text Input */}
        <div className="right-panel">
          <textarea
            placeholder="Enter text here..."
            className="text-input"
          />
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
}
