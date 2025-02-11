const Content = () => {
  const subjects = [
    { name: "Aptitude", link: "/aptitude-notes" },
    { name: "SPM", link: "/spm-notes" },
    { name: "English Grooming", link: "/english-grooming-notes" },
    { name: "Cloud Computing", link: "/cloud-computing-notes" },
    { name: "Professional Ethics", link: "/professional-ethics-notes" },
    { name: "DATA Science R", link: "/data-science-r-notes" },
    { name: "DATA Science R - LAB", link: "/data-science-r-lab-notes" },
    { name: "CASD", link: "/casd-notes" },
    { name: "CASD - LAB", link: "/casd-lab-notes" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-8">
      <header className="py-4 fixed top-0 left-0 right-0 z-20">
        <div className="container mx-auto flex justify-center">
          <img
            src="full-logo.png"
            alt="BCA Made Easy"
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </header>
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
            <a key={index} href={subject.link} className="w-full">
              <button className="bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 cursor-pointer w-full border border-blue-600 hover:border-blue-700">
                {subject.name}
              </button>
            </a>
          ))}
        </div>
      </div>
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

export default Content;
