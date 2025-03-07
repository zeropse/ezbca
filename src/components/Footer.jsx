export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md shadow-md py-6 fixed bottom-0 left-0 right-0 text-center z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <span className="font-bold text-base md:text-lg">
            Made by{" "}
            <a
              href="https://zeropse.xyz"
              className="text-primary hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              zeropse
            </a>
          </span>
          <p className="text-sm md:text-base text-muted-foreground mt-2">
            &copy; {new Date().getFullYear()} BCA Made Easy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
