import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    setTimeout(() => {

      login({ 
        email, 
        name: email.split('@')[0] 
      });
      navigate("/");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 md:p-12 px-4">
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-6 md:mb-8">
          <Link to="/" className="inline-block text-3xl md:text-4xl font-bold text-primary">
            Agritech Connect
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2x1 font-bold text-center mb-6 md:mb-8">Welcome Back</h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm md:text-base">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="mb-4">
              <label className="block text-gray-700text-sm md:text-base mb-1 md:mb-2 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                placeholder="Enter your email"/>
            </div>

            <div>
              <label className="block text-gray-700 text-sm md:text-base mb-1 md:mb-2 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                placeholder="Enter your password"/>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3.5 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : "Login"}
            </button>
          </form>

          <div className="mt-6 md:mt-8 text-center">
            <p className="text-sm md:text-base text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary font-semibold hover:underline">
                Register here
              </Link>
            </p>
          </div>

          <div className="mt-6 md:mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center">Demo Credentials:</p>
            <p className="flex items-center text-xs text-gray-500 mt-2">Any email/password works for demo</p>
          </div>
        </div>

        <div className="mt-4 text-center sm:hidden">
          <Link to="/" className="text-sm text-gray-600 hover:text-primary">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;