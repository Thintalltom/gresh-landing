import React from 'react';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
import setup1 from '../assets/setup1.png';
import setup2 from '../assets/setup2.png';
import setup3 from '../assets/setup3.png';
import logo from '../assets/GreshLogo.png';
const infoGrid = [
  {
    image: setup1,
    title: 'Get started in minutes',
    description: 'Designed for freelancers, creators, and digital natives \n who pay online often.',
    info: [
      'Quick signup with secure KYC',
      'Easy wallet funding',
      'Create and manage cards instantly'
    ]
  },
  {
    image: setup2,
    title: 'Fund Your Wallet with Ease.',
    description: 'Top up your wallet instantly and keep your money moving with clear rates \n and no unnecessary charges. Built for everyday online spending.',
    info: [
      'Instant wallet funding with transparent rates',
      'Fair exchange, no hidden markups',
      'Real-time balance and transaction insights'
    ]
  },
  {
    image: setup3,
    title: 'Get Your Virtual Card Instantly.',
    description: 'Create and manage virtual cards for global and local online payments\n all from one wallet.',
    info: [
      'Create multiple virtual cards anytime',
      'Use cards globally for subscriptions and online services',
      'Freeze, replace, or manage cards with full control'
    ]
  }
]
export function AccountSetupSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentItem = infoGrid[currentIndex];

  return (
    <section className="py-0 bg-[#1a1a1a] text-white overflow-hidden flex items-end min-h-screen">

      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end pb-0">
        {/* Phone Mockup - Left Side */}
        <img src={currentItem.image} alt={currentItem.title} className="w-full max-w-md mx-auto object-contain" />

        {/* Content - Right Side */}
        <div className='pb-10'>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6">
            <img src={logo} alt='logo' className='w-6 h-6' />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {currentItem.title}
          </h2>

          <p className="text-gray-400 mb-8 max-w-md">
            {currentItem.description}
          </p>

          <ul className="space-y-4 mb-10">
            {currentItem.info.map((item, i) =>
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#33ff66]" />
                <span className="text-gray-300">{item}</span>
              </li>
            )}
          </ul>

          <div className="flex gap-4">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + infoGrid.length) % infoGrid.length)}
              className={`w-24 h-12 rounded-full border border-white/10 flex items-center justify-center transition-colors ${
                currentIndex === 0 ? 'bg-[#696969] hover:bg-white/20' : 'hover:bg-white/5'
              }`}>
              <ArrowLeft className="w-5 h-5 text-gray-400 font-extrabold" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % infoGrid.length)}
              className={`w-24 h-12 rounded-full border border-white/10 flex items-center justify-center transition-colors ${
                currentIndex === infoGrid.length - 1 ? 'bg-[#696969] hover:bg-white/20' : 'hover:bg-white/5'
              }`}>
              <ArrowRight className="w-5 h-5 text-white font-extrabold" />
            </button>
          </div>
        </div>
      </div>
    </section>);

}