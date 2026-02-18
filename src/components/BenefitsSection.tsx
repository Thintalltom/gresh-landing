import React from 'react';
export function BenefitsSection() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Card 1 - Dark Green */}
        <div className="sticky top-0 mb-6">
          <div className="bg-[#0D2F28] rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative min-h-[400px] flex flex-col justify-center">
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl font-serif md:text-5xl font-bold text-[#33FFC2] mb-6">
                Save more on transactions,
                <br />
                No hidden fees.
              </h2>
              <p className="text-gray-300 mb-8 max-w-lg">
                Free virtual cards, no monthly charges, and transparent USD/NGN rates. We show you the real cost upfront, so your money stays yours. Save more on every transaction, whether it’s a $2 app or a big ad campaign. No sneaky fees to ruin your day.
              </p>
              <button className="px-6 py-3 bg-[#33ff66] text-[#0d2f28] font-bold rounded-full hover:opacity-90 transition-opacity">
                Learn more
              </button>
            </div>
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Card 2 - Bright Teal/Green */}
        <div className="sticky top-0 mb-6">
          <div className="bg-[#33ffcc] rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative min-h-[400px] flex flex-col justify-center">
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0d2f28] mb-6" style={{ fontFamily: 'Bricolage Grotesque' }}>
                Say goodbye to frustrating
                <br />
                downtimes in dire time.
              </h2>
              <p className="text-[#0d2f28]/70 mb-8 max-w-lg">
                Our platform is built for near-100% uptime, with local partnerships and robust systems to ensure your payments go through. Pay for that urgent subscription or bill without delays, even during peak times like month-end.
              </p>
              <button className="px-6 py-3 bg-[#0d2f28] text-white font-bold rounded-full hover:opacity-90 transition-opacity">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 - Bright Green */}
        <div className="sticky top-0 mb-6">
          <div className="bg-[#33ff66] rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative min-h-[400px] flex flex-col justify-center">
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0d2f28] mb-6" style={{ fontFamily: 'Bricolage Grotesque' }}>
                Unlike slow or robotic support,
                <br />
                we offer 24/7 team support.
              </h2>
              <p className="text-[#0d2f28]/70 mb-8 max-w-lg">
                Our platform is built for near-100% uptime, with local partnerships and robust systems to ensure your payments go through. Pay for that urgent subscription or bill without delays, even during peak times like month-end.
              </p>
              <button className="px-6 py-3 bg-[#0d2f28] text-white font-bold rounded-full hover:opacity-90 transition-opacity">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}