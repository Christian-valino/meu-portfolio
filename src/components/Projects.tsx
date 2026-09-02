const projects = [
  {
    icon: "🏥",
    title: "Sistema de Indicadores de Saúde Pública",
    subtitle: "25 municípios da Grande SP · Solução BI end-to-end",
    description:
      "Dashboard Power BI com 4 páginas (Visão Executiva, Atenção Básica, Tendências, Qualidade dos Dados), modelagem star schema, medidas DAX e Power Query M. Pipeline em Python/Pandas para tratamento e validação, integrando população real (IBGE/Censo 2022) e dados sintéticos, com governança, DDL em SQL, dicionário de dados e documentação de regras de negócio e KPIs.",
    tags: ["Power BI", "DAX", "Power Query M", "Python", "SQL", "Star Schema"],
  },
  {
    icon: "🗳️",
    title: "Análise da Plataforma Cívica Opinate",
    subtitle: "PI III · FATEC Cotia",
    description:
      "Dashboard multi-página em Power BI com medidas DAX, a partir de bases sintéticas, para indicadores de uma plataforma de participação cívica.",
    tags: ["Power BI", "DAX", "Modelagem de dados"],
  },
  {
    icon: "🎵",
    title: "Music Sentiment Analysis",
    subtitle: "TCC · Processamento de Linguagem Natural",
    description:
      "Classificação de sentimento de comentários musicais em português com TF-IDF e Regressão Logística, com painel de resultados em HTML/Chart.js.",
    tags: ["Python", "TF-IDF", "Machine Learning", "Chart.js"],
  },
  {
    icon: "📚",
    title: "LitSync — Recomendação de Livros",
    subtitle: "Sistema de recomendação com PLN",
    description:
      "Recomendação com PLN (TF-IDF, similaridade de cosseno) relacionando preferências musicais a interesses literários; back-end em Flask/REST API e front-end em JavaScript.",
    tags: ["Python", "Flask", "REST API", "JavaScript", "PLN"],
    link: "https://christian-valino.github.io/litsync-recomendacao-livros/"
  },
  {
    icon: "🗃️",
    title: "FireStore Product Catalog",
    subtitle: "CRUD com banco NoSQL",
    description:
      "Sistema CRUD de catálogo de produtos com Firebase Firestore (NoSQL), painel web e script de integração em Python.",
    tags: ["Firebase", "Firestore", "NoSQL", "Python"],
    link: "https://christian-valino.github.io/firestore-product-catalog/",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
              Portfólio
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Projetos
            </h2>
            <p className="mt-3 max-w-2xl text-slate-400">
              Projetos aplicados de BI, ciência de dados e desenvolvimento —
              disponíveis no meu GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Christian-valino"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-sky-400/40 hover:text-sky-300"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a11 11 0 015.75 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            github.com/Christian-valino
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const Component = p.link ? "a" : "div";
            const linkProps = p.link
              ? {
                  href: p.link,
                  target: "_blank",
                  rel: "noreferrer",
                }
              : {};

            return (
              <Component
                key={p.title}
                {...linkProps}
                className={`group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all ${
                  p.link
                    ? "cursor-pointer hover:-translate-y-1 hover:border-sky-400/50 hover:bg-white/[0.06]"
                    : "hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.05]"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/15 to-blue-600/15 text-2xl">
                    {p.icon}
                  </div>
                  {p.link && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-sky-300">
                      LIVE DEMO ↗
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-sky-300">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {p.subtitle}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Component>
            );
          })}

          <a
            href="https://github.com/Christian-valino"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-transparent p-6 text-center transition-colors hover:border-sky-400/40 hover:bg-sky-400/5"
          >
            <svg
              className="h-10 w-10 text-slate-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a11 11 0 015.75 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            <p className="mt-4 font-semibold text-slate-300">
              Ver todos os projetos
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Explore o repositório completo no GitHub →
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}