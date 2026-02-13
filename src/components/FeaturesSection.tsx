import React from 'react';
import { Plus, CreditCard, PieChart, Wallet } from 'lucide-react';
import atm from '../assets/atm.png';
import tracking from '../assets/Tracking.png';
import funding from '../assets/Wallet.png';
export function FeaturesSection() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0acf83] font-medium text-sm tracking-wider uppercase mb-2 block">
            What we offer (MVP Stage)
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Everything You Need to Spend Smarter
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We're your partner for paying globally, and keeping your money in
            check. Whether you're a freelancer paying for Upwork or a business
            subscribing for automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="USD & NGN virtual cards for your transactions"
            icon={atm}
            illustration="card" />

          <FeatureCard
            title="Smart spending tracker"
            icon={tracking}
            illustration="chart" />

          <FeatureCard
            title="Seamless wallet funding"
            icon={funding}
            illustration="wallet" />

        </div>
      </div>
    </section>);

}
function FeatureCard({
  title,
  icon,
  illustration




}: { title: string; icon: React.ReactNode | string; illustration: 'card' | 'chart' | 'wallet'; }) {
  return (
    <div className="group relative bg-[#f8fafc] rounded-3xl p-8 h-[400px] flex flex-col justify-between overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Illustration Area */}
      <div className="flex-1 flex items-center justify-center relative">
        {typeof icon === 'string' ? (
          <img src={icon} alt={title} className="w-full h-64 object-contain" />
        ) : (
          icon
        )}
        {false && illustration === 'card' &&
          <div className="relative">
            <div className="w-40 h-24 bg-[#0acf83] rounded-xl shadow-lg transform -rotate-12 z-10 relative flex items-center justify-center">
              <div className="w-8 h-5 bg-yellow-400 rounded opacity-80 ml-auto mr-4"></div>
            </div>
            <div className="w-40 h-24 bg-[#e2e8f0] rounded-xl shadow-sm absolute top-4 left-4 transform rotate-6"></div>
            <div className="absolute -top-4 -right-4 text-[#0acf83] opacity-50">
              <Plus />
            </div>
            <div className="absolute -bottom-4 -left-4 text-[#0acf83] opacity-50">
              <Plus />
            </div>
          </div>
        }

        {false && illustration === 'chart' &&
          <div className="relative">
            <div className="w-48 h-32 bg-white border-2 border-[#0acf83]/20 rounded-xl p-3 flex items-end gap-2 transform rotate-3">
              <div className="w-8 h-12 bg-[#0acf83]/40 rounded-t"></div>
              <div className="w-8 h-20 bg-[#0acf83]/60 rounded-t"></div>
              <div className="w-8 h-16 bg-[#0acf83] rounded-t"></div>
              <div className="w-8 h-24 bg-[#0d2f28] rounded-t"></div>
            </div>
            <div className="absolute -right-6 -top-6 text-[#0acf83]">
              <Plus />
            </div>
          </div>
        }

        {false && illustration === 'wallet' &&
          <div className="relative">
            <div className="w-40 h-32 bg-[#0acf83] rounded-2xl shadow-xl relative overflow-hidden transform -rotate-3">
              <div className="absolute top-4 right-4 w-4 h-4 bg-[#0d2f28] rounded-full opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/5"></div>
            </div>
            <div className="w-32 h-24 bg-[#d1fae5] rounded-xl absolute -top-4 -right-4 -z-10 transform rotate-12"></div>
          </div>
        }
      </div>

      <div className="flex items-end justify-between mt-6">
        <h3 className="text-xl font-bold text-[#1a1a1a] max-w-[80%]">
          {title}
        </h3>
        <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 hover:bg-[#0acf83] hover:text-white transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>);

}