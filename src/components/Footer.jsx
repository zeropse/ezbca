const Footer = () => {
  return (
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
          &copy; {new Date().getFullYear()} BCA Made Easy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
