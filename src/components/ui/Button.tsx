import { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-lieme-burgundy text-lieme-cream hover:bg-lieme-burgundy-dark',
  secondary: 'bg-lieme-cream-alt text-lieme-ink hover:bg-lieme-cream-alt/70 border border-lieme-ink/10',
  ghost: 'bg-transparent text-lieme-burgundy hover:bg-lieme-burgundy/10',
};

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-sans font-semibold transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lieme-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-lieme-cream',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
