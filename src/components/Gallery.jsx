import React, { useState, useEffect } from "react";
import { galleryItems } from "./styles/galleryItems"; // ייבוא רשימת התמונות והסרטונים

// פונקציה לערבוב אקראי של האלמנטים
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

export default function Gallery() {
  const [shuffledItems, setShuffledItems] = useState([]);

  useEffect(() => {
    setShuffledItems(shuffleArray([...galleryItems]));
  }, []);

  return (
    <section id="gallery" className="p-4 sm:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {shuffledItems.map((item, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-lg shadow-lg transition-transform duration-200 hover:scale-105"
            style={{
              aspectRatio: item.width / item.height, // שמירה על פרופורציות נכונות
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy" // טעינה עצלה לתמונות
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}