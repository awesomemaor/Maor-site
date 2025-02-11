import React from "react";

// רשימת התמונות והוידאו
const images = [
  "/public/gallerypage/image1.JPG",
  "/public/gallerypage/image2.JPG",
  "/public/gallerypage/image3.JPG",
  "/public/gallerypage/image4.JPG",
  "/public/gallerypage/image5.JPG",
  "/public/gallerypage/video1.mp4",
  "/public/gallerypage/video2.mp4",
  "/public/gallerypage/video3.mp4",
  "/public/gallerypage/video4.mp4",
  "/public/gallerypage/video5.mp4",
];

const Gallery = () => {
  return (
    <div id="gallery" className="relative min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
      {/* כותרת */}
      <div className="relative z-10 text-center py-20">
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 animate-neon-glow">
          גלריית הזכרונות 🎉
        </h1>
        <p className="text-gray-300 text-xl mt-4">רגעים בלתי נשכחים ממעורלדת!</p>
      </div>

      {/* הגלריה */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-10 pb-20">
        {images.map((item, index) => (
          <div key={index} className="relative group">
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-2xl">
              {item.endsWith(".mp4") ? (
                <video
                  className="w-full h-full object-cover"
                  controls
                  loop
                  muted
                  autoplay
                  src={item}
                />
              ) : (
                <img
                  className="w-full h-full object-cover"
                  src={item}
                  alt={`gallery-image-${index}`}
                />
              )}
            </div>
            {/* כיתוב מעל כל תמונה */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-xl font-semibold">רגע קסום!</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;