const jobs = [
  {
    role: "Innovation & Digital Intern",
    company: "Nalco Water (Ecolab)",
    period: "fev/2026 – atual",
    current: true,
    bullets: [
      "Arquitetei e construí do zero um sistema de gestão de manutenção para técnicos de campo: portal em SharePoint (Listas como base de dados), automação de fluxos e e-mails via Power Automate e dashboard em Power BI incorporado ao portal, centralizando todo o acompanhamento.",
      "Modelei a base de dados em esquema estrela e desenvolvi medidas DAX para os indicadores do dashboard de manutenção.",
      "Desenho a arquitetura de dados de múltiplas Listas do SharePoint para diferentes tipos de equipamento, garantindo estrutura consistente para consulta e atualização.",
      "Desenvolvo aplicações em Power Apps para coleta e gestão de dados, integradas a SharePoint, CRM e SAP.",
    ],
    tags: ["SharePoint", "Power Automate", "Power BI", "Power Apps", "DAX"],
  },
  {
    role: "Strategic Marketing Intern",
    company: "Nalco Water (Ecolab)",
    period: "fev/2025 – fev/2026",
    current: false,
    bullets: [
      "Mantive dashboards em Power BI para acompanhamento de indicadores de marketing, com coleta e estruturação de dados de mercado.",
      "Dei suporte a rotinas de marketing estratégico integradas a CRM e SAP.",
    ],
    tags: ["Power BI", "CRM", "SAP"],
  },
  {
    role: "Assistente Administrativo / Orçamentista",
    company: "Perfil Refrigeração",
    period: "mar/2023 – nov/2023",
    current: false,
    bullets: [
      "Elaborei orçamentos de manutenção de máquinas de frio alimentar (refrigeração comercial) para redes como Extra, Grupo Pão de Açúcar, Atacadão e St. Marche, com cadastro e controle no ERP TOTVS Protheus.",
    ],
    tags: ["TOTVS Protheus", "Orçamentos"],
  },
  {
    role: "Assistente de Crédito",
    company: "Vuon Card",
    period: "jun/2020 – fev/2023",
    current: false,
    bullets: [
      "Analisei e aprovei ou neguei solicitações de cartão de crédito private label usado nos supermercados Comper e Fort Atacadista, quando fora da regra automática de aprovação.",
      "Elaborei relatórios em Excel para acompanhamento de indicadores de crédito e melhoria de processos.",
    ],
    tags: ["Excel", "Análise de Crédito", "Relatórios"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Experiência profissional
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Trajetória
          </h2>
        </div>

        <div className="relative space-y-8 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-sky-400/60 before:via-white/15 before:to-transparent md:before:left-[19px]">
          {jobs.map((job) => (
            <article key={job.role + job.period} className="relative pl-12 md:pl-16">
              <span
                className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border md:h-10 md:w-10 ${
                  job.current
                    ? "border-sky-400/50 bg-sky-500/20 text-sky-300"
                    : "border-white/15 bg-[#111a30] text-slate-400"
                }`}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.098a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V14.15M16.5 6.75V5.25a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 007.5 5.25v1.5m9 0h-9m9 0h2.25A2.25 2.25 0 0121 9v2.4a2.25 2.25 0 01-1.6 2.155 41.4 41.4 0 01-14.8 0A2.25 2.25 0 013 11.4V9a2.25 2.25 0 012.25-2.25H7.5" />
                </svg>
              </span>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-sky-400/25">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-sky-300">
                      {job.company}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      job.current
                        ? "bg-emerald-400/10 text-emerald-300 border border-emerald-400/25"
                        : "bg-white/5 text-slate-400 border border-white/10"
                    }`}
                  >
                    {job.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
                      <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-sky-400/20 bg-sky-400/5 px-2.5 py-1 text-xs font-medium text-sky-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
