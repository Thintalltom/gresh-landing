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
Create and use virtual cards with transparent pricing. What you see is what you pay! No surprise charges, No hidden fees.
              </p>
              <button className="px-6 py-3 bg-[#33ff66] text-[#0d2f28] font-bold rounded-full hover:opacity-90 transition-opacity">
                See how pricing works
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
               Say goodbye to failed payments 

                <br />
               and downtime
              </h2>
              <p className="text-[#0d2f28]/70 mb-8 max-w-lg flex justify-end">
                Gresh is built on reliable infrastructure to ensure your payments go through. Whether it’s a monthly subscription or a critical business expense, we’ve got you covered
              </p>
              <button className="px-6 py-3 bg-[#0d2f28] text-white font-bold rounded-full hover:opacity-90 transition-opacity">
                Why Gresh is more reliable
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 - Bright Green */}
        <div className="sticky top-0 mb-6">
          <div className="bg-[#33ff66] rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative min-h-[400px] flex flex-col justify-center">
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0d2f28] mb-6" style={{ fontFamily: 'Bricolage Grotesque' }}>
                Human support.
                <br />
                Anytime you need it.
              </h2>
              <p className="text-[#0d2f28]/70 mb-8 max-w-lg">
               GreshFi’s team is responsive and local, making you feel heard, ready to help anytime, day or night. Got a declined payment at 2 AM? We’re on it, with fast, friendly help that feels like talking to a friend.
              </p>
              <button className="px-6 py-3 bg-[#0d2f28] text-white font-bold rounded-full hover:opacity-90 transition-opacity">
                Contact support anytime
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}