import { useParams, Link } from "react-router-dom";
import subjects from "../data/subjects";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";

const subjectNotes = {
  "aptitude-notes": [
    { title: "Introduction to Aptitude", link: "#" },
    { title: "Numerical Ability", link: "#" },
    { title: "Verbal Reasoning", link: "#" },
  ],
  "spm-notes": [
    { title: "Software Project Planning", link: "#" },
    { title: "Risk Management", link: "#" },
    { title: "Project Scheduling", link: "#" },
  ],
};

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-8">
      <Header />
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl text-center border border-gray-200 mt-24 mb-24">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8">
          {subject.name} Notes
        </h1>
        {notes.length > 0 ? (
          <ul className="space-y-4">
            {notes.map((note, index) => (
              <li key={index}>
                <Link
                  to={note.link}
                  className="block bg-blue-100 text-blue-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-200 transition-all duration-300"
                >
                  {note.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xl text-gray-600">
            No notes available for this subject yet.
          </p>
        )}
        <Link
          to="/content"
          className="mt-8 inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300"
        >
          Back to Subjects
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default SubjectContent;
