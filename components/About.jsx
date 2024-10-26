export default function About() {
    return (
      <div className="bg-orange-50 min-h-screen p-10">
        <header className="bg-orange-600 text-white text-center py-4 text-3xl font-bold">
          Saraswati Shishu Mandir Kichha
        </header>
  
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
              src="im2.jpg"
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
  }
  