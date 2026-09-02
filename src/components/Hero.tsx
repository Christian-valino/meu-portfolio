export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* fundo decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm font-medium text-sky-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Data Innovation & Digital · Nalco Water (Ecolab)
          </p>
          <h1 className="animate-fade-up delay-100 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Christian Valino
            <span className="block text-2xl font-semibold text-slate-400 md:text-3xl mt-1">
              Mendes de Souza
            </span>
          </h1>
          <p className="animate-fade-up delay-100 mt-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
            Business Intelligence | Power BI, Power Automate & SharePoint | SQL
            e Python
          </p>
          <p className="animate-fade-up delay-200 mt-5 text-base leading-relaxed text-slate-400 md:text-lg">
            Transformo processos manuais e dados descentralizados em soluções digitais que centralizam informações, automatizam atividades e facilitam o acompanhamento das operações.
          </p>

          <div className="animate-fade-up delay-200 mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400 md:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Cotia, São Paulo
            </span>
            <a href="tel:+5511941851009" className="inline-flex items-center gap-1.5 transition-colors hover:text-sky-300">
              <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (11) 94185-1009
            </a>
            <a href="mailto:christianvalino19@gmail.com" className="inline-flex items-center gap-1.5 transition-colors hover:text-sky-300">
              <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              christianvalino19@gmail.com
            </a>
          </div>

          <div className="animate-fade-up delay-300 mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projeto"
              className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-transform hover:scale-105"
            >
              Ver projeto em destaque
            </a>
            <a
              href="https://www.linkedin.com/in/christian-valino"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:border-sky-400/40 hover:text-sky-300"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/Christian-valino"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:border-sky-400/40 hover:text-sky-300"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a11 11 0 015.75 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="animate-fade-up relative shrink-0">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-sky-400/40 to-blue-600/40 blur-xl" />
          <img
            src="/images/christian.png"
            alt="Christian Valino Mendes de Souza"
            className="relative h-56 w-56 rounded-3xl border border-white/15 object-cover shadow-2xl md:h-72 md:w-72"
          />
          <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/10 bg-[#111a30]/95 px-4 py-3 shadow-xl backdrop-blur">
            <p className="text-xs text-slate-400">Formação em</p>
            <p className="text-sm font-semibold text-sky-300">
              Ciência de Dados · FATEC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
