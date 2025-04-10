import Header from "./Header";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <section className="text-gray-600 body-font relative">
          {/* Background Map */}
          <div className="absolute inset-0">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
          </div>

          {/* Form */}
          <div className="container px-4 sm:px-6 lg:px-8 py-24 mx-auto flex justify-center">
            <div className="w-full max-w-lg bg-gradient-to-t from-black to-gray-500 rounded-lg p-8 relative z-10 shadow-md">
              <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
              <p className="leading-relaxed mb-5 text-white">Fill your form</p>

              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-sky-200">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-sky-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-sky-200">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>

              <button className="text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
                Button
              </button>

              <p className="text-xs text-gray-300 mt-3">
                "Share your thoughts with us and help shape a better future through meaningful feedback today."
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
