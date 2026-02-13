import React from 'react';
export function WaitlistSection() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto bg-[#f8fafc] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2f28] mb-2">
            Join the waitlist
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Be the first to get updates on our upcoming beta release.
          </p>
        </div>

        <div className="flex-1 w-full max-w-md">
          <form className="flex gap-2 bg-white p-1.5 rounded-full border border-gray-200 shadow-sm focus-within:ring-2 focus-within:ring-[#0acf83] transition-shadow">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-400 text-sm"
              required />

            <button
              type="submit"
              className="px-6 py-2 bg-[#0d2f28] text-white text-sm font-bold rounded-full hover:bg-[#1a4f42] transition-colors">

              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>);

}