const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-pink-600 to-red-500 text-white h-20 flex items-center justify-center relative shadow-inner">
      <div className="text-center">
        <h1 className="text-lg md:text-xl font-bold tracking-wide">
          Made with{" "}
          <span className="animate-pulse text-red-300 text-2xl mx-1">❤️</span>
          by <span className="underline underline-offset-4 hover:text-yellow-300 transition duration-300">Tanishq</span>.
        </h1>
        <p className="text-sm mt-1 opacity-80 hidden md:block">Crafted with passion, pixels & purpose 💻✨</p>
      </div>
    </footer>
  );
};

export default Footer;
