export default function Events() {
    const events = [
      { id: 1, title: "स्वतंत्रता दिवस समारोह", img: "/im1.jpg" },
      { id: 2, title: "वार्षिक खेल दिवस", img: "/im2.jpg" },
      { id: 3, title: "गणतंत्र दिवस", img: "/im3.jpg" },
    ];
  
    return (
      <div className="bg-orange-50 min-h-screen p-10">
        <header className="bg-orange-600 text-white text-center py-4 text-3xl font-bold">
          हमारे इवेंट्स
        </header>
  
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-4"
            >
              <img
                src={event.img}
                alt={event.title}
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <h2 className="text-xl font-bold text-orange-700">{event.title}</h2>
            </div>
          ))}
        </section>
      </div>
    );
  }
  