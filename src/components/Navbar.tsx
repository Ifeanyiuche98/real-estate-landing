export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <div className="text-xl font-bold text-white">
          Good Times Property
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="text-sm text-slate-300 hover:text-white">
            How It Works
          </a>

          <a href="#" className="text-sm text-slate-300 hover:text-white">
            Markets
          </a>

          <a href="#" className="text-sm text-slate-300 hover:text-white">
            Reviews
          </a>
        </nav>

        <a
          href="#offer"
          className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
        >
          Get Offer
        </a>
      </div>
    </header>
  );
}