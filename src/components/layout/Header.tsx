import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="mx-auto flex max-w-3xl items-center gap-3 px-4 pb-2 pt-8 sm:px-6">
      <Link to="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lieme-burgundy rounded-lg">
        <span className="h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-[72px] sm:w-[72px]">
          <img src="/logo-seal.png" alt="Selo da LIEME" className="h-full w-full object-cover" />
        </span>
        <div className="leading-tight">
          <p className="font-serif text-lg font-semibold text-lieme-burgundy sm:text-xl">LIEME Quiz</p>
          <p className="text-xs text-lieme-ink-soft">Liga de Ética Médica e Medicina Legal</p>
        </div>
      </Link>
    </header>
  );
}
