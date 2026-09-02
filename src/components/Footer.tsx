export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Christian Valino Mendes de Souza —
          Business Intelligence & Dados
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/christianvalino"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-sky-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Christian-valino"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-sky-400"
          >
            GitHub
          </a>
          <a
            href="mailto:christianvalino19@gmail.com"
            className="transition-colors hover:text-sky-400"
          >
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}
