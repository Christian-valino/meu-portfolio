const highlights = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5V21h4.5v-7.5H3zm6.75-6V21h4.5V7.5h-4.5zM16.5 3v18H21V3h-4.5z" />
      </svg>
    ),
    title: "Business Intelligence",
    text: "Dashboards em Power BI, modelagem em esquema estrela, DAX e Power Query.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0113.36-4.66M19.5 12a7.5 7.5 0 01-13.36 4.66M16.5 7.5h1.86V5.64M7.5 16.5H5.64v1.86" />
      </svg>
    ),
    title: "Automação & Power Platform",
    text: "Fluxos com Power Automate, apps em Power Apps e portais em SharePoint integrados a CRM e SAP.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Dados & Programação",
    text: "SQL, Python (Pandas), Databricks e pipelines de tratamento, validação e qualidade de dados.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Sobre mim
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Dados a serviço da decisão
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-5 text-base leading-relaxed text-slate-300 lg:col-span-3 md:text-lg">
            <p>
              Atuo no time de{" "}
              <strong className="font-semibold text-white">
                Data Innovation & Digital
              </strong>{" "}
              da Nalco Water (Ecolab), com foco em{" "}
              <strong className="font-semibold text-white">
                Business Intelligence
              </strong>{" "}
              e automação de processos. Desenvolvo dashboards em{" "}
              <strong className="font-semibold text-sky-300">Power BI</strong>,
              modelagem de dados (esquema estrela,{" "}
              <strong className="font-semibold text-sky-300">DAX</strong>) e
              automação de fluxos com{" "}
              <strong className="font-semibold text-sky-300">
                Power Automate
              </strong>{" "}
              e{" "}
              <strong className="font-semibold text-sky-300">SharePoint</strong>.
            </p>
            <p>
              Já construí do início ao fim uma solução integrada de gestão de
              manutenção, unindo formulários digitais, automação e dashboard.
              Em formação em{" "}
              <strong className="font-semibold text-white">
                Tecnologia em Ciência de Dados pela FATEC Cotia
              </strong>
              , com projetos aplicados envolvendo indicadores, qualidade de
              dados e painéis analíticos.
            </p>
            <p className="rounded-2xl border border-sky-400/20 bg-sky-400/5 p-5 text-slate-200">
              🎯 Meu objetivo é transformar processos manuais e dados
              descentralizados em soluções digitais que facilitem o
              acompanhamento das operações e apoiem a tomada de decisão.
            </p>
          </div>

          <div className="space-y-4 lg:col-span-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-sky-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 text-sky-400">
                  {h.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{h.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
