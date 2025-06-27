import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ThankYou = () => {
  const navigate = useNavigate();

  // Optional: auto-redirect after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 8000); // 8 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md border border-purple-200 p-10 rounded-2xl shadow-2xl max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
          🎉 Thank You for Registering!
        </h1>

        <p className="text-gray-800 text-lg md:text-xl mb-6">
          Your QuickNotes account has been created successfully. We’re excited to have you on board!
        </p>

        <p className="text-gray-700 mb-6">
          You can now login and start organizing your thoughts, ideas, and notes all in one place.
        </p>

        <button
          onClick={() => navigate('/login')}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition"
        >
          Go to Login
        </button>

        <div className="mt-8 text-sm text-gray-600">
          You will be redirected to login automatically in a few seconds...
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
