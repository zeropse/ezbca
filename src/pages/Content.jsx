import { Link } from "react-router-dom";
import subjects from "../data/subjects";
import { Toaster, toast } from "react-hot-toast";
import { useRef, useEffect } from "react";

const Content = () => {
  const toastShown = useRef(false);

  useEffect(() => {
    if (!toastShown.current) {
      toast.error("No Notes Added for Data Science - R", {
        duration: 1300,
      });
      toastShown.current = true;
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-10 w-full max-w-4xl text-center border border-gray-200">
          <Toaster position="top-right" reverseOrder={false} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-700 mb-4 sm:mb-6 lg:mb-8">
            Contents
          </h1>
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Class 3C Notes
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mt-2 sm:mt-3">
              Choose a subject to view the notes for that subject.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {subjects.map((subject, index) => (
              <Link
                key={index}
                to={`/content/${subject.slug}`}
                className="w-full"
              >
                <button className="bg-blue-500 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 cursor-pointer w-full border border-blue-600 hover:border-blue-700">
                  {subject.name}
                </button>
              </Link>
            ))}
          </div>
          <Link
            to="/"
            className="mt-6 sm:mt-8 inline-block bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-300 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Content;
