const About = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About QuickNotes</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          A smarter, faster, and cleaner way to organize your thoughts, ideas, and tasks — all in one place.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg leading-7 max-w-4xl">
          QuickNotes was born out of frustration with clunky, slow, and cluttered note-taking apps. We wanted something
          beautiful, fast, and secure — something that doesn't get in your way but helps you flow. Whether you're a
          student, developer, creator, or planner — QuickNotes is for you. Built by Tanishq, with ❤️ for speed,
          simplicity and clarity.
        </p>
      </section>

      {/* Why We're Better */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8">Why QuickNotes is Better</h2>
        <ul className="space-y-6 text-lg list-disc list-inside">
          <li><strong>Speed:</strong> Built with the blazing-fast MERN stack, your notes load in milliseconds.</li>
          <li><strong>Security:</strong> Protected with JWT authentication — your data is private and secure.</li>
          <li><strong>Simple UI:</strong> No ads, no distractions — just pure writing and managing.</li>
          <li><strong>Dark Mode Ready:</strong> Coming soon, your eyes will thank you.</li>
          <li><strong>Offline-first (Planned):</strong> Access notes without internet. Sync when you're back online.</li>
        </ul>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6">Core Features</h2>
        <div className="grid md:grid-cols-2 gap-8 text-lg">
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-2">📝 Easy Note Creation</h3>
            <p>Just type and save. Simple input form to quickly jot your thoughts and ideas.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-2">🔐 JWT Authentication</h3>
            <p>Secure access to your dashboard. No one else can access your private notes.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-2">🛠️ Edit & Delete</h3>
            <p>Update your ideas, correct mistakes, or clear clutter with one click.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-2">⚡ Lightning Fast</h3>
            <p>No lag, no reloads — enjoy smooth navigation and operations built with React + Node.</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gradient-to-br from-purple-100 to-blue-100 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          To empower people with tools that help them think better, organize smarter, and achieve more — one note at a time.
        </p>
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto">
          We're building the simplest, fastest, and most delightful note-taking app — while keeping your data safe and your workflow distraction-free.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to take better notes?</h2>
        <p className="text-lg mb-6">Join hundreds of users already organizing their thoughts effortlessly.</p>
        <a
          href="/"
          className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
        >
          Go to HomePage →
        </a>
      </section>
    </div>
  );
};

export default About;
