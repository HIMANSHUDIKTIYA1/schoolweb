export default function Main() {
    return (
      <div className="bg-orange-50 min-h-screen">
        
        <header className="bg-orange-600 text-white p-4 text-center font-bold text-2xl">
          🏫 My School 
        </header>
  
       
        <section className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20 space-y-10 lg:space-y-0">
        
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-orange-700 leading-snug animate-pulse">
              हमारे स्कूल में आपका स्वागत है!
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              शिक्षा का एक नया अनुभव प्राप्त करें और अपने भविष्य को संवारें।
              यहां आपको मिलेगा उच्चतम गुणवत्ता की शिक्षा, सहायक वातावरण और
              अनगिनत अवसर।
            </p>
            <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-700 text-white rounded-full text-lg shadow-md transition duration-300">
              अभी आवेदन करें
            </button>
          </div>
  
         
          <div className="relative w-full lg:w-1/2">
            <img
              src="/school-img.jpg"
              alt="School"
              className="rounded-2xl shadow-lg w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>
        </section>
  
      
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 lg:px-20 py-10">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-orange-700 mb-2">हमारा मिशन</h3>
            <p className="text-gray-600">
              हमारे स्कूल का उद्देश्य छात्रों को नैतिकता और शिक्षा में सर्वश्रेष्ठ
              बनाना है।
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-orange-700 mb-2">कोर्सेज</h3>
            <p className="text-gray-600">
              हम विभिन्न कोर्सेज और गतिविधियों की पेशकश करते हैं ताकि हर छात्र
              की रुचि को पोषित किया जा सके।
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-orange-700 mb-2">संपर्क करें</h3>
            <p className="text-gray-600">
              हमारे स्कूल से जुड़ने के लिए <strong>+91 98765 43210</strong> पर
              संपर्क करें या ईमेल भेजें।
            </p>
          </div>
          
        </section>
      </div>
    );
  }
  