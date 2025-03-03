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
      <main className="flex-grow flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 lg:p-12 w-full max-w-4xl text-center border border-gray-200">
          <Toaster position="top-right" reverseOrder={false} />

          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-6 sm:mb-8">
            Contents
          </h1>

          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Class 3C Notes
            </h2>
            <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
              Choose a subject to view the notes for that subject.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {subjects.map((subject, index) => (
              <Link
                key={index}
                to={`/content/${subject.slug}`}
                className="w-full"
              >
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer w-full border border-blue-400 hover:border-blue-500">
                  {subject.name}
                </button>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content;
