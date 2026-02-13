import bgImg from '../assets/TransBG.png';
export function MissionSection() {
  return (
    <section className="py-32 bg-[#0d2f28] relative overflow-hidden text-center px-4">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImg})`
          }}>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">
          OUR AIM
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Something along the lines of accessibility to the networking.
        </h2>
        <p className="text-gray-500 text-sm">
          still needs gresh pattern in background
        </p>
      </div>
    </section>);

}