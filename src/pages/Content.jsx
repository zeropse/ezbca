import subjects from "../data/subjects";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-8">
      <Header />
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl text-center border border-gray-200">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-8">Contents</h1>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Class 3C Notes</h2>
          <p className="text-lg text-gray-700 mt-3">
            Choose a subject to view the notes for that subject.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={`/content/${subject.slug}`}
              className="w-full"
            >
              <button className="bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 cursor-pointer w-full border border-blue-600 hover:border-blue-700">
                {subject.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
