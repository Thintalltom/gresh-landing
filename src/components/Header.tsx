import logo from '../assets/GreshLogo.png';
export function Header({ showWorks, setShowWorks }: { showWorks: boolean, setShowWorks: (value: boolean) => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0d2f28]/90 backdrop-blur-sm border-b border-white/5">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowWorks(false)}>
        <div className="text-[#0acf83]">
          {/* <Leaf className="w-6 h-6 fill-current" /> */}
          <img src={logo} alt='logo' className='w-6 h-6' />
        </div>
        <span className="text-2xl font-bold text-white tracking-tight">
          Gresh.
        </span>
      </div>

      <div className='flex gap-5'>

        <button onClick={() => setShowWorks(true)} className='text-[#33FF66] text-[14px] underline'> How it works</button>
        <button className="px-6 py-2 text-sm font-bold text-[#0d2f28] bg-[#33ff66] rounded-full hover:opacity-90 transition-opacity">
          WAITLIST
        </button>
      </div>
    </header>);

}