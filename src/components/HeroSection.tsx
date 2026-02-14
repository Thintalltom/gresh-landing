import React from 'react';
import { ArrowRight, CreditCard, Wifi } from 'lucide-react';
import { SiAdobeillustrator, SiNike, SiNotion, SiApple } from "react-icons/si";
import { FaFacebook, FaAmazon, FaSlack } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import iphone from '../assets/iphone.png';
export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#0d2f28] to-[#051a16] min-h-screen flex flex-col items-center text-center px-4">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Announcement Badge */}
      {/* <div className="inline-flex items-center gap-2 px-1 py-1 pr-3 mb-8 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm">
        <span className="px-2 py-0.5 text-xs font-bold text-[#0d2f28] bg-[#33ff66] rounded-full">
          Release
        </span>
        <span className="text-sm text-gray-300">
          Our beta launch is set for September 2025!
        </span>
        <ArrowRight className="w-4 h-4 text-[#33ff66]" />
      </div> */}

      {/* Main Content */}
      <h3 className="max-w-4xl mx-auto mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-[56px] tracking-tight">
       One wallet. Limitless virtual cards.
    
      </h3>

      <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-400 md:text-xl">
       Create multiple virtual cards, fund them easily, and pay for global services without unnecessary charges or restrictions.
      </p>

      <button className="px-8 py-4 text-base font-bold text-[#0d2f28] bg-[#33ff66] rounded-full hover:scale-105 transition-transform duration-200 mb-8 shadow-[0_0_20px_rgba(51,255,102,0.3)]">
        Join the Waitlist for Early Access
      </button>

      {/* Phone Mockup Area */}
      <div className="relative w-full max-w-screen mx-auto top-20 flex-1 flex items-center justify-center">
        {/* Floating Badges - Left */}
        <div className="absolute top-10 left-0 w-64 h-96 hidden md:block">
          <div className="absolute top-0 left-2 rotate-6">
            <Badge icon={<FaSlack className="w-3 h-3" />} label="Slack" />
          </div>
          <div className="absolute top-16 left-8 -rotate-3">
            <Badge icon={<SiNotion className="w-3 h-3" />}     label="Notion" />
          </div>
          <div className="absolute top-32 left-1 rotate-12">
            <Badge icon={<SiAdobeillustrator className="w-3 h-3" />} label="Adobe" />
          </div>
          <div className="absolute top-48 left-6 -rotate-6">
            <Badge icon={<FcGoogle className="w-3 h-3" />} label="Google Workspace" />
          </div>
          <div className="absolute top-32 left-1 rotate-12">
            <Badge icon={<SiNike className="w-3 h-3" />} label="Nike" />
          </div>
          <div className="absolute top-48 left-6 -rotate-6">
            <Badge icon="N" label="Nike" />
          </div>
        </div>

        {/* Floating Badges - Right */}
          <div className="absolute top-10 right-0 w-64 h-96 hidden md:block">
          <div className="absolute top-2 right-4 -rotate-12">
            <Badge icon={<FaSlack className="w-3 h-3" />} label="Slack" />
          </div>
          <div className="absolute top-20 right-10 rotate-6">
            <Badge icon={<SiNike className="w-3 h-3" />} label="Nike" />
          </div>
          <div className="absolute top-36 right-28 -rotate-12">
            <Badge icon={<SiAdobeillustrator className="w-3 h-3" />} label="Adobe" />
          </div>
          <div className="absolute top-52 right-28 rotate-9">
            <Badge icon={<FaAmazon className="w-3 h-3" />} label="Amazon" />
          </div>
          <div className="absolute top-36 right-2 -rotate-3">
            <Badge icon={<SiNotion className="w-3 h-3" />} label="Notion" />
          </div>
          <div className="absolute top-52 right-0 rotate-9">
            <Badge icon={<SiApple className="w-3 h-3" />} label="Apple" />
          </div>
        </div>

        {/* Phone Device */}
        <div className=''>
          <img src={iphone} alt="iPhone Mockup" className="w-full max-w-[400px] mx-auto" />
        </div>
      </div>
    </section>);

}
function Badge({ icon, label }: { icon: string | React.ReactNode; label: string; }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-full shadow-xl">
      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-[10px] font-bold text-white">
        {typeof icon === 'string' ? icon : icon}
      </div>
      <span className="text-sm font-medium text-gray-300">{label}</span>
    </div>);

}