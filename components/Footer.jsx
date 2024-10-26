export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo और Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Saraswati Shishu Mandir</h2>
            <p className="text-gray-300">
              शिक्षा और संस्कारों का संगम। हम भविष्य के आदर्श नागरिक तैयार करने के
              लिए प्रतिबद्ध हैं।
            </p>
          </div>
  
          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">हमसे संपर्क करें</h3>
            <p className="text-gray-400">
              📍 **पता:** Main Road, Kichha, Uttarakhand - 263148
            </p>
            <p className="text-gray-400">📧 **ईमेल:** contact@saraswati.com</p>
            <p className="text-gray-400">📞 **फोन:** +91 9876543210</p>
          </div>
  
          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">हमें फ़ॉलो करें</h3>
            <div className="flex space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-orange-500 transition"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-500 transition"
              >
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-sky-400 transition"
              >
                <img
                  src="/icons/twitter.png"
                  alt="Twitter"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
  
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">जल्दी पहुंचें</h3>
            <ul className="space-y-2">
              <li className="hover:underline hover:text-orange-400 transition">
                <a href="/">होम</a>
              </li>
              <li className="hover:underline hover:text-orange-400 transition">
                <a href="/about">हमारे बारे में</a>
              </li>
              <li className="hover:underline hover:text-orange-400 transition">
                <a href="/events">इवेंट्स</a>
              </li>
              <li className="hover:underline hover:text-orange-400 transition">
                <a href="/album">गैलरी</a>
              </li>
            </ul>
          </div>
        </div>
  
        <div className="mt-12 text-center text-gray-400">
          © 2024 Saraswati Shishu Mandir Kichha. सभी अधिकार सुरक्षित।
        </div>
      </footer>
    );
  }
  