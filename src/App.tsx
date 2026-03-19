
import angolaFlag from './assets/angola-flag.png'
import botswanaFlag from './assets/botswana-flag.png'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10">
      <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-[#D62828]/20 blur-3xl orb-float" />
      <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-[#2A9D8F]/20 blur-3xl orb-float [animation-delay:1.2s]" />

      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl items-center justify-center">
        <div className="w-full rounded-3xl border border-white/50 bg-white/65 p-8 text-center shadow-2xl shadow-[#1D3557]/15 backdrop-blur-xl md:p-12 fade-up">
          <p className="inline-block rounded-full border border-[#1D3557]/20 bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-[#1D3557] uppercase fade-up delay-1">
            Em Breve • Coming Soon
          </p>

          <h1 className="app-title mt-6 text-4xl leading-tight text-[#111827] md:text-6xl fade-up delay-1">
            Site está em desenvolvimento
          </h1>
          <p className="mt-4 text-lg text-[#374151] md:text-2xl fade-up delay-2">Website is under development</p>

          <div
            className="mx-auto mt-8 flex w-fit items-center justify-center gap-4 rounded-2xl border border-white/70 bg-white/70 px-5 py-3 shadow-lg shadow-[#1D3557]/10 fade-up delay-2"
            aria-label="Bandeiras de Angola e Botswana"
          >
            <img
              src={angolaFlag}
              alt="Bandeira de Angola"
              className="h-12 w-auto rounded-sm ring-1 ring-black/10 md:h-16"
            />
            <span className="h-8 w-px bg-[#94A3B8] md:h-10" aria-hidden="true" />
            <img
              src={botswanaFlag}
              alt="Bandeira do Botswana"
              className="h-12 w-auto rounded-sm ring-1 ring-black/10 md:h-16"
            />
          </div>

          <div className="mt-8 space-y-3 fade-up delay-2">
            <p className="text-xl font-semibold text-[#0F172A] md:text-3xl">Câmara de Comércio e Indústria Angola - Botswana</p>
            <p className="text-lg font-medium text-[#334155] md:text-2xl">Angola - Botswana Chamber of Commerce and Industry</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
