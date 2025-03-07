import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="py-4 fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container mx-auto flex justify-center">
        <img
          src="/full-logo.png"
          alt="BCA Made Easy"
          className="h-16 md:h-20 w-auto transition-transform hover:scale-105 duration-300"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </header>
  );
}
