const education = [
  {
    degree: "Tecnologia em Ciência de Dados",
    school: "FATEC Cotia",
    period: "Conclusão prevista: dez/2026",
    current: true,
  },
  {
    degree: "Técnico em Assistente Administrativo",
    school: "Senai São Paulo",
    period: "2017",
    current: false,
  },
];

const certifications = [
  {
    title: "Microsoft Power BI para Business Intelligence e Data Science",
    issuer: "Data Science Academy",
    detail: "72h · set/2025",
    icon: "📊",
  },
  {
    title: "Database Foundations",
    issuer: "Oracle",
    detail: "nov/2024",
    icon: "🗄️",
  },
  {
    title: "Database Design",
    issuer: "Oracle Database Academy",
    detail: "nov/2024",
    icon: "🏗️",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco",
    detail: "mai/2024",
    icon: "🐍",
  },
];

export default function Education() {
  return (
    <section id="formacao" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Formação & Certificações
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Educação contínua
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Formação acadêmica */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
              <span className="text-2xl">🎓</span> Formação acadêmica
            </h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-sky-400/25"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-white">{e.degree}</h4>
                      <p className="mt-0.5 text-sm font-medium text-sky-300">
                        {e.school}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        e.current
                          ? "border border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                          : "border border-white/10 bg-white/5 text-slate-400"
                      }`}
                    >
                      {e.current ? "Em andamento" : "Concluído"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-400">{e.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificações */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
              <span className="text-2xl">📜</span> Certificações
            </h3>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-sky-400/25"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/15 to-blue-600/15 text-xl">
                    {c.icon}
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white">{c.title}</h4>
                    <p className="text-sm text-slate-400">
                      {c.issuer} · {c.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
