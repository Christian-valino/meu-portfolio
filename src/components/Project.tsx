const stack = ["SharePoint", "Microsoft Lists", "Power Automate", "Power BI"];

const problems = [
  "A centralização das informações",
  "A padronização dos registros",
  "O acompanhamento das manutenções",
  "A identificação de atividades pendentes",
  "A rastreabilidade do histórico dos equipamentos",
  "A geração de indicadores confiáveis",
  "A análise dos dados por região, distrito ou equipamento",
  "A comunicação entre os responsáveis",
  "A tomada de decisão baseada em dados",
];

const results = [
  {
    icon: "🗂️",
    title: "Centralização",
    text: "Ambiente único para registro das informações de manutenção.",
  },
  {
    icon: "🔔",
    title: "Automação",
    text: "Notificações automáticas e fluxos que eliminam etapas manuais.",
  },
  {
    icon: "📈",
    title: "Indicadores",
    text: "Dashboards interativos com indicadores operacionais em tempo real.",
  },
  {
    icon: "🔍",
    title: "Rastreabilidade",
    text: "Histórico padronizado e maior visibilidade sobre a operação.",
  },
];

export default function Project() {
  return (
    <section id="projeto" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Cabeçalho */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Projeto em destaque
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-5xl">
            3D Mapp{" "}
            <span className="rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-1 text-2xl align-middle text-white md:text-3xl">
              Beta
            </span>
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            Solução digital que arquitetei e construí do zero na Nalco Water
            (Ecolab) para centralizar informações de manutenção, automatizar
            processos e disponibilizar indicadores operacionais por meio de
            dashboards interativos.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-sm font-medium text-sky-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Visão geral */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-xl">
                🧭
              </span>
              <h3 className="text-xl font-semibold text-white">Visão geral</h3>
            </div>
            <div className="space-y-4 leading-relaxed text-slate-300">
              <p>
                O <strong className="text-white">3D Mapp Beta</strong> é uma
                solução desenvolvida para apoiar o gerenciamento e o
                monitoramento das atividades de manutenção relacionadas aos
                equipamentos e tecnologias{" "}
                <strong className="text-sky-300">3D TRASAR</strong>.
              </p>
              <p>
                A plataforma integra SharePoint, Microsoft Lists, Power Automate
                e Power BI, criando um ambiente centralizado para registro das
                informações, acompanhamento das atividades, automação de
                notificações e análise de indicadores operacionais.
              </p>
              <p>
                O projeto foi desenvolvido para aumentar a rastreabilidade das
                manutenções, padronizar os registros e oferecer maior
                visibilidade sobre a operação.
              </p>
            </div>
          </div>

          {/* Problema de negócio */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15 text-xl">
                ⚠️
              </span>
              <h3 className="text-xl font-semibold text-white">
                Problema de negócio
              </h3>
            </div>
            <p className="mb-4 leading-relaxed text-slate-300">
              Antes do desenvolvimento da solução, as informações de manutenção
              estavam distribuídas entre diferentes controles e fontes de dados.
              Essa estrutura dificultava:
            </p>
            <ul className="grid gap-2.5 sm:grid-cols-1">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-rose-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resultados */}
        <div className="mt-6 rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.06] to-teal-500/[0.03] p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-xl">
              ✅
            </span>
            <h3 className="text-xl font-semibold text-white">
              O que a solução entrega
            </h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-white/10 bg-[#0d1428]/60 p-5"
              >
                <span className="text-2xl">{r.icon}</span>
                <h4 className="mt-3 font-semibold text-white">{r.title}</h4>
                <p className="mt-1.5 text-sm text-slate-400">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
