import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'paper' | 'tint' | 'dark';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'paper',
  shadow = 'md',
  className = '',
  ...props
}) => {
  const bg = {
    paper: 'bg-paper',
    tint: 'bg-paper-tint',
    dark: 'bg-paper-dark',
  }[variant];

  const shadows = {
    none: '',
    sm: 'shadow-ink-sm',
    md: 'shadow-ink',
    lg: 'shadow-ink-lg',
  }[shadow];

  return (
    <div
      className={`border-2 border-ink rounded-lg ${bg} ${shadows} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
