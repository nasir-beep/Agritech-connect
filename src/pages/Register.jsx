import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    farmType: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      navigate("/login");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 md:py-12 px-4">
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-6 md:mb-8">
          <Link to="/" className="inline-block text-3xl md:text-4xl font-bold text-primary">
            Agritech Connect
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">Create Account</h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm md:text-base">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div>
              <label className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-fiel"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-fiel"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2 font-medium">Farm Type</label>
              <select
                name="farmType"
                value={formData.farmType}
                onChange={handleChange}
                className="input-fiel">
                <option value="">Select farm type</option>
                <option value="crops">Crop Farming</option>
                <option value="livestock">Livestock</option>
                <option value="mixed">Mixed Farming</option>
                <option value="organic">Organic Farming</option>
                <option value="Agritech Agent">Agritech Agent</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2 font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-field"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>

          <div className="mt-6 md:mt-8 ext-center">
            <p className="text-sm md:text-base text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Login here
              </Link>
            </p>

            <div className="mt-4 text-center sm:hidden">
              <Link to="/" className="text-sm text-gray-600 hover:text-primary">← Back to Home</Link>
            </div>
          </div>
        </div>
     </div>
    </div>
  );
}

export default Register;