"use client";
export default function Album() {
    const photos = [
      "/im1.jpg",
      "/im2.jpg",
      "/school-img.jpg",
      "/im3.jpg",
      "/im4.jpg",
    ];
  
    return (
      <div className="bg-orange-50 min-h-screen p-10">
        <header className="bg-orange-600 text-white text-center py-4 text-3xl font-bold">
          स्कूल गैलरी
        </header>
  
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-10">
          {photos.map((photo, index) => (
            <div key={index} className="relative">
              <img
                src={photo}
                alt={`School Photo ${index + 1}`}
                className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </section>
      </div>
    );
  }
  