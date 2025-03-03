import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import subjects from "../data/subjects";
import NotFound from "../pages/NotFound";
import { fetchDriveFiles } from "../data/api";

const SubjectContent = () => {
  const { slug } = useParams();
  const subject = subjects.find((s) => s.slug === slug);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (subject) {
      fetchDriveFiles(slug).then((fetchedNotes) => {
        setNotes(fetchedNotes);
        setLoading(false);
      });
    }
  }, [slug, subject]);

  if (!subject) {
    return (
      <div>
        <NotFound />
        <p>Subject Not Found!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <main className="flex-grow flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 lg:p-12 w-full max-w-4xl text-center border border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-8 sm:mb-10">
            {subject.name} Notes
          </h1>

          {loading ? (
            <div className="py-10">
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-lg text-gray-600">Loading notes...</p>
              </div>
            </div>
          ) : notes.length > 0 ? (
            <ul className="space-y-4 sm:space-y-5">
              {notes.map((note, index) => (
                <li key={index}>
                  <a
                    href={note.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-blue-50 text-blue-700 px-6 py-4 rounded-xl text-lg font-semibold hover:bg-blue-100 transition-all duration-300 border border-blue-200 shadow-sm flex items-center justify-between"
                  >
                    <span>{note.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-10 px-4">
              <div className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-xl text-gray-600 mb-2">
                  No notes available for this subject yet.
                </p>
                <p className="text-lg text-gray-500">
                  If you have any notes for this subject, please share them with
                  the site owner.
                </p>
              </div>
            </div>
          )}

          <div className="mt-10">
            <Link
              to="/content"
              className="inline-flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium"
            >
              Back to Subjects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubjectContent;
