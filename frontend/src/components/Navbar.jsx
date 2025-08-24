import { useState, forwardRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "COURSE", path: "/courses" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav
      ref={ref}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + School Name */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images.jpeg"
              alt="School Logo"
              width={40}
              height={40}
              className="rounded-full border-2 border-white shadow-md"
            />
            <span className="text-orange-400   [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)] font-bold text-2xl md:xl tracking-wide">
              सरस्वती शिशु मंदिर
            </span>
          </div>

          {/* Menu Items - Desktop */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative text-white font-semibold tracking-wide transition duration-300 group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white hover:text-yellow-200 focus:outline-none"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-gradient-to-b from-orange-600 to-orange-500 flex flex-col items-center justify-center space-y-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-yellow-200"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.path}
                  className="text-white text-2xl font-bold tracking-wider hover:text-yellow-200 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

export default Navbar;
