import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const url = "https://quick-notes-3ifl.onrender.com"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ Moved inside the component

  const onsubmithandle = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${url}/api/login`, {
        email,
        password,
      });

      console.log(res.data);

      if (res.status === 200) {
        navigate('/takenotes'); // ✅ Navigate after successful login
        localStorage.setItem('token', res.data.token);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials. Please try again.");
    }
  };


  return (
    <div className="relative min-h-screen bg-[url('/pic1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-white/30" />
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <form onSubmit={onsubmithandle} className="bg-white/10 backdrop-blur-sm p-8 font-semibold text-black rounded-lg shadow-2xl w-full max-w-sm space-y-6 border border-black/10">
          <h1 className="text-4xl text-center font-extrabold mb-2">Login</h1>
          <p className="text-center text-sm">Access your QuickNotes account</p>

          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded border border-black/20 text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded border border-black/20 text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex justify-between text-sm">
            <a href="/register" className="hover:underline">Create account</a>
            <a href="/forgot-password" className="hover:underline">Forgot password?</a>
          </div>

          <div className="flex justify-center">
            <button
              type="submit" // ✅ no onClick, handled via form onSubmit
              className="bg-black text-white font-bold px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </div>
          <button onClick={() => navigate('/')}className="mt-4 bg-white text-black ml-8 border border-black/20 px-4 py-2 rounded hover:bg-gray-400 transition">
             Go Back To The Home Page
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
