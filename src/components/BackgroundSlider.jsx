import { useState, useEffect } from "react";

const images = ["/cal1.JPG", "/cal2.jpg"];

export default function BackgroundSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex
              ? "opacity-30"
              : index === prevImageIndex && isTransitioning
              ? "opacity-10"
              : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
}
