const groups = [
  {
    title: "Business Intelligence",
    color: "from-amber-400/20 to-yellow-500/10 border-amber-400/30",
    badge: "text-amber-300 bg-amber-400/10 border-amber-400/25",
    icon: "📊",
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Modelagem em esquema estrela",
      "Visualização de dados",
      "Excel avançado (VBA, Power Query)",
    ],
  },
  {
    title: "Power Platform & Microsoft",
    color: "from-sky-400/20 to-blue-500/10 border-sky-400/30",
    badge: "text-sky-300 bg-sky-400/10 border-sky-400/25",
    icon: "☁️",
    skills: [
      "Power Automate",
      "Power Apps",
      "SharePoint",
      "Microsoft Lists",
      "Automação de processos",
      "Gestão de acessos e permissões",
    ],
  },
  {
    title: "Dados & Programação",
    color: "from-emerald-400/20 to-teal-500/10 border-emerald-400/30",
    badge: "text-emerald-300 bg-emerald-400/10 border-emerald-400/25",
    icon: "🐍",
    skills: [
      "SQL",
      "Python (Pandas)",
      "Databricks",
      "Oracle Database",
      "Qualidade e tratamento de dados",
      "Documentação de soluções",
    ],
  },
  {
    title: "Sistemas Corporativos",
    color: "from-violet-400/20 to-purple-500/10 border-violet-400/30",
    badge: "text-violet-300 bg-violet-400/10 border-violet-400/25",
    icon: "🏢",
    skills: ["SAP", "CRM", "TOTVS Protheus", "Firebase Firestore"],
  },
];

const languages = [
  { lang: "Português", level: "Nativo", flag: "🇧🇷" },
  { lang: "Inglês", level: "Intermediário (leitura)", flag: "🇺🇸" },
  { lang: "Italiano", level: "Básico · Cidadania italiana", flag: "🇮🇹" },
];

export default function Skills() {
  return (
    <section id="competencias" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Competências
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Competências técnicas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Habilidades voltadas para dados, automação, Power Platform e
            sistemas corporativos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.title}
              className={`rounded-2xl border bg-gradient-to-b p-6 ${g.color} transition-transform hover:-translate-y-1`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{g.icon}</span>
                <h3 className="text-lg font-semibold text-white">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium ${g.badge}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Idiomas */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-2xl">🌍</span>
            <h3 className="text-lg font-semibold text-white">Idiomas</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {languages.map((l) => (
              <div
                key={l.lang}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <span className="text-2xl">{l.flag}</span>
                <div>
                  <p className="font-semibold text-white">{l.lang}</p>
                  <p className="text-xs text-slate-400">{l.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
