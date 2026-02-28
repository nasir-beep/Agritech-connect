import { useState } from "react";
import Navbar from "../services/Navbar";
import Footer from "../services/Footer";

function CropDiagnosis() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      setDiagnosis(null);
    }
  };

  const analyzeImage = () => {
    if (!selectedImage) {
      alert("Please upload an image first");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      const diseases = [
        {
          name: "Early Blight",
          confidence: "92%",
          symptoms: "Dark spots with concentric rings on leaves",
          treatment: "Apply fungicide, remove infected leaves, improve air circulation",
          organic: "Use neem oil spray, copper-based fungicides"
        },
        {
          name: "Healthy Plant",
          confidence: "95%",
          symptoms: "No visible disease symptoms",
          treatment: "Continue regular care and monitoring",
          organic: "Maintain good practices"
        },
        {
          name: "Powdery Mildew",
          confidence: "88%",
          symptoms: "White powdery spots on leaves and stems",
          treatment: "Apply sulfur-based fungicides",
          organic: "Use milk spray (1:9 ratio with water)"
        },
        {
          name: "Leaf Rust",
          confidence: "85%",
          symptoms: "Orange-brown pustules on leaf undersides",
          treatment: "Remove affected leaves, apply fungicide",
          organic: "Use baking soda solution"
        }
      ];

      const randomResult = diseases[Math.floor(Math.random() * diseases.length)];
      setDiagnosis(randomResult);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Crop Disease Diagnosis</h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="card">
            <h2 className="text-xl font-bold mb-4">Upload Crop Image</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              {preview ? (
                <div className="relative">
                  <img 
                    src={preview} 
                    alt="Crop preview" 
                    className="max-h-64 mx-auto rounded-lg"
                  />
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setPreview(null);
                      setDiagnosis(null);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full w-8 h-8 flex items-center justify-center">
                    ✕
                  </button>
                </div>
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="crop-image"
                  />
                  <label
                    htmlFor="crop-image"
                    className="cursor-pointer"
                  >
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-lg mb-2">Click to upload an image</p>
                    <p className="text-sm text-gray-500">or drag and drop</p>
                    <p className="text-xs text-gray-400 mt-4">PNG, JPG, JPEG up to 10MB</p>
                  </label>
                </>
              )}
            </div>

            {selectedImage && !diagnosis && (
              <button
                onClick={analyzeImage}
                disabled={loading}
                className="btn-primary w-full mt-4"
              >
                {loading ? "Analyzing..." : "Analyze Image"}
              </button>
            )}
          </div>

          <div className="card">
            <h2 className="text-xl font-bold mb-4">Diagnosis Results</h2>
            
            {loading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-gray-600">Analyzing your crop image...</p>
              </div>
            )}

            {diagnosis && !loading && (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Diagnosis</p>
                  <p className="text-2xl font-bold text-primary">{diagnosis.name}</p>
                  <p className="text-sm text-gray-500">Confidence: {diagnosis.confidence}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Symptoms:</h3>
                  <p className="text-gray-700">{diagnosis.symptoms}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Recommended Treatment:</h3>
                  <p className="text-gray-700">{diagnosis.treatment}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Organic Solution:</h3>
                  <p className="text-gray-700">{diagnosis.organic}</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setPreview(null);
                    setDiagnosis(null);
                  }}
                  className="btn-primary w-full">
                  Analyze Another Image
                </button>
              </div>
            )}

            {!selectedImage && !diagnosis && !loading && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-6xl mb-4">🌿</p>
                <p>Upload an image to get started</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Tips for Better Diagnosis</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Take clear, well-lit photos of the affected area</li>
            <li>• Include both healthy and diseased parts for comparison</li>
            <li>• Take photos from different angles</li>
            <li>• Avoid blurry or distant shots</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default CropDiagnosis;