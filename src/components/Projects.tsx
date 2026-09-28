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
    subtitle: "Sistema de recomendação com PLN · Em dupla com Bruno Silva",
    description:
      "Recomendação com PLN (TF-IDF, similaridade de cosseno) relacionando preferências musicais a interesses literários; back-end em Flask/REST API e front-end em JavaScript. Desenvolvido em dupla com Bruno Silva.",
    tags: ["Python", "Flask", "REST API", "JavaScript", "PLN"],
    link: "https://christian-valino.github.io/litsync-recomendacao-livros/",
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
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white
