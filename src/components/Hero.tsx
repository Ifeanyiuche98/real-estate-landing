export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 text-center">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-300">
          Real Estate Cash Offers
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Sell Your Home As-Is. For The Right Price.
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          A premium landing page experience for homeowners who want a fast,
          simple, and trusted way to request a cash offer.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="#offer"
            className="rounded-full bg-amber-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Get Your Cash Offer
          </a>

          <a
            href="tel:+10000000000"
            className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}