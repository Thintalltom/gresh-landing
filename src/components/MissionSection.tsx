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

      <div className="relative z-10  mx-auto  w-full">
        <span className="text-[20px] font-bold tracking-widest text-gray-400 uppercase mb-4 block">
          OUR AIM
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight ">
          Making global payments accessible to everyone
        </h2>
        <p className=" text-center text-[20px] text-[#E1E6E7] max-w-3xl mx-auto">
          We believe access to global digital services shouldn’t depend on where you live.
          Gresh is built to give Africans reliable access to the global economy.
        </p>
      </div>
    </section>);

}