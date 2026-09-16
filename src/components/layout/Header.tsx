import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="mx-auto flex max-w-3xl items-center gap-3 px-4 pb-2 pt-8 sm:px-6">
      <Link to="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lieme-burgundy rounded-lg">
        <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full sm:h-12 sm:w-12">
          <img src="/logo-seal.png" alt="Selo da LIEME" className="h-full w-full scale-220 object-cover" />
        </span>
        <div className="leading-tight">
          <p className="font-serif text-lg font-semibold text-lieme-burgundy sm:text-xl">LIEME Quiz</p>
          <p className="text-xs text-lieme-ink-soft">Liga de Ética Médica e Medicina Legal</p>
        </div>
      </Link>
    </header>
  );
}
