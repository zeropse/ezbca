import BackgroundSlider from "../components/BackgroundSlider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center relative">
        <BackgroundSlider />
        <div className="text-center z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">BCA MADE EASY</h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Access BCA Class 3C notes and other useful resources with ease.
          </p>
          <button
            onClick={() => navigate("/content")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
