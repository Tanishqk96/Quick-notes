import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const url = "https://quick-notes-3ifl.onrender.com"
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleclick = () =>{
    navigate('/successfullreg')
  }
  const onSubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault();

    // Optional: simple client-side validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios.post(`${url}/api/register`, JSON.stringify({
  fullName,
  email,
  password,
}), {
  headers: { 'Content-Type': 'application/json' }
});
  };

  return (
    <div className="relative min-h-screen bg-[url('/pic1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-white/30" />

      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <form onSubmit={onSubmitHandle} className="bg-white/10 backdrop-blur-sm p-8 font-semibold text-black rounded-lg shadow-2xl w-full max-w-sm space-y-6 border border-black/10">
          <h1 className="text-4xl text-center font-extrabold mb-2">Register</h1>
          <p className="text-center text-sm">Create your QuickNotes account</p>

          <div>
            <label htmlFor="name" className="block mb-1">Full Name</label>
            <input
              id="name"
              type="text"
              value={fullName}
              onChange={(e) => { setFullName(e.target.value); console.log("Name:", e.target.value); }}
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded border border-black/20 text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); console.log("Email:", e.target.value); }}
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
              onChange={(e) => { setPassword(e.target.value); console.log("Password:", e.target.value); }}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded border border-black/20 text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => { setConfirmPassword(e.target.value); console.log("Confirm Password:", e.target.value); }}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded border border-black/20 text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex justify-between text-sm">
            <a href="/login" className="hover:underline">Already have an account?</a>
            <a href="#" className="hover:underline">Need help?</a>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleclick}
              className="bg-black text-white font-bold px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
