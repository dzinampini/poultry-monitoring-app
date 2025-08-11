'use client';
import { useState } from 'react';

export default function InferImagePage() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch('/api/infer', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <section className="mt-5 container infer-section">
      <div className="text-center mb-4">
        <h2 className="fw-bold">🐓 Infer Poultry Image</h2>
        <p className="text-muted">
          Upload an image of your poultry excreta to get an instant health analysis result.
        </p>
      </div>

      <form
        onSubmit={handleUpload}
        className="p-4 border rounded shadow-sm bg-light"
      >
        <div className="mb-3 text-center">
          <input
            type="file"
            accept="image/*"
            name="file"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>

        {preview && (
          <div className="text-center mb-3">
            <img
              src={preview}
              alt="Preview"
              className="img-fluid rounded"
              style={{ maxHeight: '250px', objectFit: 'cover' }}
            />
          </div>
        )}

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? '🔍 Analyzing...' : '📤 Upload & Infer'}
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-4 p-4 border rounded shadow-sm bg-white">
          <h5 className="fw-bold mb-2">Analysis Result</h5>
          <p>
            <strong>Status:</strong> {result.status}
          </p>
          <p>
            <strong>Confidence:</strong> {(result.confidence * 100).toFixed(1)}%
          </p>
        </div>
      )}
    </section>
  );
}
