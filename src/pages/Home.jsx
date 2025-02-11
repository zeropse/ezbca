import BackgroundSlider from "../components/BackgroundSlider";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/30 backdrop-blur-md shadow-md py-4 fixed top-0 left-0 right-0 z-20">
        <div className="container mx-auto flex justify-center">
          <img
            src="full-logo.png"
            alt="BCA Made Easy"
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative">
        <BackgroundSlider />
        <div className="text-center z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">BCA MADE EASY</h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Access BCA Class 3C notes and other useful resources with ease.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300 cursor-pointer">
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/30 backdrop-blur-md shadow-md py-4 fixed bottom-0 left-0 right-0 text-center z-20">
        <div className="container mx-auto">
          <span className="font-bold">
            Made by{" "}
            <a
              href="https://zeropse.xyz"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              zeropse
            </a>
          </span>
          <p className="text-sm text-gray-800 mt-2">
            &copy; {new Date().getFullYear()} BCA Made Easy. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
