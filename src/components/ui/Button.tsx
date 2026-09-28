import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'moss' | 'butter' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  children,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const base = "inline-flex items-center justify-center font-mono font-bold tracking-tight border-2 border-ink rounded transition-all select-none pressable";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5 shadow-ink-sm",
    md: "px-4 py-2.5 text-sm gap-2 shadow-ink",
    lg: "px-6 py-3.5 text-base gap-2.5 shadow-ink-lg",
  };

  const variantClasses = {
    primary: "bg-tomato text-paper hover:bg-tomato-dark border-ink",
    secondary: "bg-paper text-ink hover:bg-paper-tint border-ink",
    moss: "bg-moss text-paper hover:bg-moss-dark border-ink",
    butter: "bg-butter text-ink hover:bg-butter-light border-ink",
    ghost: "bg-transparent text-ink border-transparent shadow-none hover:bg-paper-tint",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed transform-none shadow-none pointer-events-none"
    : "";

  return (
    <button
      className={`${base} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
