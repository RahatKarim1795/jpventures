import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-brand-teal-sky text-white hover:bg-brand-pastel-blue',
    secondary: 'bg-brand-dutch-blue text-white hover:bg-brand-noir-blue',
    outline: 'border-2 border-brand-dutch-blue text-brand-dutch-blue hover:bg-brand-dutch-blue hover:text-white',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}

