import { useParams, Link } from "react-router-dom";
import subjects from "../data/subjects";
import NotFound from "../pages/NotFound";
import subjectNotes from "../data/subjectNotes";

const SubjectContent = () => {
  const { slug } = useParams();
  const subject = subjects.find((s) => s.slug === slug);
  const notes = subjectNotes[slug] || [];

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
      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-10 w-full max-w-4xl text-center border border-gray-200">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-700 mb-6 sm:mb-8">
            {subject.name} Notes
          </h1>
          {notes.length > 0 ? (
            <ul className="space-y-3 sm:space-y-4">
              {notes.map((note, index) => (
                <li key={index}>
                  <Link
                    to={note.link}
                    target="_blank"
                    className="block bg-blue-100 text-blue-700 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-200 transition-all duration-300"
                  >
                    {note.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg sm:text-xl text-gray-600 mb-2">
                No notes available for this subject yet.
              </p>
              <p className="text-lg sm:text-xl text-gray-600">
                If you have any notes for this subject, please share them with
                the site owner.
              </p>
            </div>
          )}
          <Link
            to="/content"
            className="mt-6 sm:mt-8 inline-block bg-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-300 transition-all duration-300"
          >
            Back to Subjects
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SubjectContent;
