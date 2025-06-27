const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 bg-[url('./pic4.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-center px-4">
      <div className="mb-32 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
          Welcome to QuickNotes 📝
        </h1>

        <p className="text-black text-lg font-semibold md:text-xl mb-4">
          Your simple, fast, and organized way to take notes. Create, edit, and manage your thoughts in one place — securely and easily.
        </p>

        <p className="text-black text-md md:text-lg mb-4">
          Whether you're a student, professional, or creative thinker — QuickNotes helps you focus on what matters.
        </p>

        <p className="text-black text-md md:text-lg mb-6">
          Sync across devices. No distractions. Just you and your ideas — anytime, anywhere.
        </p>

        <div className="space-x-4 mb-6">
          <a
            href="/login"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Get Started
          </a>
          <a
            href="/register"
            className="bg-purple-600 text-white border border-purple-600 px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Sign Up
          </a>
        </div>

        <div className="mt-10 text-sm text-black font-bold">
          No ads. No clutter. Just pure note-taking ✨
        </div>
      </div>
    </div>
  );
};

export default Home;
