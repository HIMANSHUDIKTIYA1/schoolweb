import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="bg-orange-50 min-h-screen">
      {/* Header Section */}
      <header className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/im2.jpg" // तुम्हारी भेजी हुई इमेज का path (public फोल्डर में रखना)
          alt="School Background"
          fill
          className="object-cover object-center"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/75"></div>

        {/* Logo + Title */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Logo */}
          <Image
            src="/images.jpeg" // Vidya Bharti Logo का path
            alt="Vidya Bharti Logo"
            width={90}
            height={90}
            className="mb-4 rounded-full border-4 border-white shadow-lg"
          />

          {/* School Name */}
          <motion.h1
            className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            SARASWATI SHISHU MANDIR KICHHA
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="text-orange-300 text-lg md:text-xl mt-2 font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            संस्कार और शिक्षा का संगम
          </motion.p>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="flex flex-col items-center lg:flex-row lg:justify-between mt-10 px-10 space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-orange-700 mb-4">
            हमारे बारे में
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            **Saraswati Shishu Mandir Kichha** में हम शिक्षा के साथ संस्कारों का
            भी विकास करते हैं। हमारा उद्देश्य छात्रों को शारीरिक, मानसिक और
            नैतिक रूप से मजबूत बनाना है ताकि वे समाज के अच्छे नागरिक बन सकें।
            हमारे स्कूल में आधुनिक शिक्षा के साथ भारतीय परंपराओं और मूल्यों का
            समावेश होता है।
          </p>
        </div>

        <div className="lg:w-1/2">
          <img
            src="/im2.jpg"
            alt="School Image"
            className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>

      <div className="mt-20 text-center">
        <button className="px-8 py-3 bg-orange-500 text-white rounded-full text-lg shadow-lg transition hover:bg-orange-700">
          और जानें
        </button>
      </div>
    </div>
  );
};

export default About;
