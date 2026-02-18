import iphone from '../assets/iphone.png';
import slackLogo from '../assets/slack.png';
import notionLogo from '../assets/notion.png';
import googleLogo from '../assets/google-workspace.png';
import adobeLogo from '../assets/adobe.png';
import figmaLogo from '../assets/figma.png';
import amazonLogo from '../assets/amazon.png';
import nikeLogo from '../assets/nike.png';
import adidasLogo from '../assets/adidas.png';
import { BrandPill } from './ui/BrandPills'
import {
  Slack,
  Command,
  Figma,
  Chrome,
  ShoppingBag,
  CreditCard,
  PenTool,
} from 'lucide-react'
export function HeroSection() {
  return (
    <section className="relative pt-32 pb-0 overflow-hidden bg-[#000000] min-h-screen flex flex-col items-center text-center px-4">
      {/* Green glow in center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(13,47,40,0.8),transparent_70%)] pointer-events-none" />
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

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

      <button className="relative z-10 px-8 py-4 text-base font-bold text-[#0d2f28] bg-[#66ff99] rounded-full hover:scale-105 transition-transform duration-200 mb-8 shadow-[0_0_20px_rgba(102,255,153,0.3)]">
        Join the Waitlist for Early Access
      </button>

      {/* Phone Mockup Area */}
      <div className="relative w-full mx-auto flex-1 flex items-end justify-center">
        {/* Phone */}
        <div className="relative z-20 w-full">
          <img src={iphone} alt="iPhone Mockup" className="w-full max-w-[400px] mx-auto object-contain" />
        </div>

        {/* Floating Pills */}
        <div className="absolute inset-0 w-full pointer-events-none">
          {/* Bottom Left Cluster */}
          <BrandPill
            iconImage={slackLogo}
            label="Slack"
            className="bottom-20 left-6 -rotate-6"
            style={{
              animation: 'float 6s ease-in-out infinite',
            }}
          />
          <BrandPill
            iconImage={notionLogo}
            label="Notion"
            className="bottom-16 left-28 rotate-6"
            style={{
              animation: 'float 7s ease-in-out infinite 1s',
            }}
          />
          <BrandPill
            // iconImage={googleLogo}
            label="Google Workspace"
            customLabel={
              <span className="text-sm font-medium">
                <span style={{ color: '#4285F4' }}>G</span>
                <span style={{ color: '#EA4335' }}>o</span>
                <span style={{ color: '#FBBC04' }}>o</span>
                <span style={{ color: '#4285F4' }}>g</span>
                <span style={{ color: '#34A853' }}>l</span>
                <span style={{ color: '#EA4335' }}>e</span>
                <span className="text-gray-300"> Workspace</span>
              </span>
            }
            className="bottom-2 left-5 -rotate-0"
            style={{
              animation: 'float 8s ease-in-out infinite 2s',
            }}
          />
          <BrandPill
            iconImage={adobeLogo}
            label="Adobe"
            className="bottom-20 left-52 rotate-12"
            style={{
              animation: 'float 5s ease-in-out infinite 0.5s',
            }}
          />
          <BrandPill
            iconImage={figmaLogo}
            label="Figma"
            className="bottom-2 left-52 rotate-0"
            style={{
              animation: 'float 6s ease-in-out infinite 1.2s',
            }}
          />

          {/* Bottom Right Cluster */}
          <BrandPill
            iconImage={slackLogo}
            label="Slack"
            className="bottom-20 right-6 -rotate-6"
            style={{
              animation: 'float 6s ease-in-out infinite 1.5s',
            }}
          />
          <BrandPill
            iconImage={notionLogo}
            label="Notion"
            className="bottom-16 right-28 rotate-6"
            style={{
              animation: 'float 7s ease-in-out infinite 0.5s',
            }}
          />
          <BrandPill
            iconImage={amazonLogo}
            label="Amazon"
            className="bottom-2 right-5 -rotate-0"
            style={{
              animation: 'float 8s ease-in-out infinite 2.5s',
            }}
          />
          <BrandPill
            iconImage={nikeLogo}
            label="Nike"
            className="bottom-20 right-52 rotate-12"
            style={{
              animation: 'float 5s ease-in-out infinite 1s',
            }}
          />
          <BrandPill
            iconImage={adidasLogo}
            label="Adidas"
            className="bottom-2 right-52 rotate-0"
            style={{
              animation: 'float 6s ease-in-out infinite 1.8s',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-15px) rotate(var(--tw-rotate)); }
        }
      `}</style>
    </section>);

}
