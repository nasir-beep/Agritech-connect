import { Routes, Route } from "react-router-dom";
import Navbar from "./services/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Simple home page
function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Welcome to Agritech-Connect
        </h1>
        <p className="text-gray-600">
          Your app is now working! Let's add more features.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App