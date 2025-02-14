const Header = () => {
  return (
    <header className="py-4 fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-center">
        <img
          src="/full-logo.png"
          alt="BCA Made Easy"
          className="h-16 md:h-20 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;
