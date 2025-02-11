const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-600">
        The page you are looking for does not exist.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-4 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Go back to the home page
      </button>
    </div>
  );
};

export default NotFound;
