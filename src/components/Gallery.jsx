import React from 'react';

const galleryItems = [
  { type: 'image', src: '/gallerypage/image1.jpg', alt: 'תמונה 1' },
  { type: 'image', src: '/gallerypage/image2.jpg', alt: 'תמונה 2' },
  { type: 'image', src: '/gallerypage/image3.jpg', alt: 'תמונה 3' },
  { type: 'video', src: '/gallerypage/video1.mp4', alt: 'סרטון 1' },
  { type: 'video', src: '/gallerypage/video2.mp4', alt: 'סרטון 2' },
  { type: 'video', src: '/gallerypage/video3.mp4', alt: 'סרטון 3' },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <h1 className="text-center text-4xl font-bold mb-12">גלריית הזכרונות</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            ) : (
              <video
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover"
                autoPlay
                muted
                loop
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;