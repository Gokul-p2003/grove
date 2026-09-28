import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const CheckStampIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 12.5L9.5 18L20 6.5"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DropIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 3C12 3 5 11 5 15.5C5 19.0899 8.13401 22 12 22C15.866 22 19 19.0899 19 15.5C19 11 12 3 12 3Z"
      fill="currentColor"
      stroke="#1F1B16"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M9 16C9 14.3431 10.3431 13 12 13"
      stroke="#F4EEE0"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const SeedIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 21C16.4183 21 20 16.5 20 12C20 7.5 12 3 12 3C12 3 4 7.5 4 12C4 16.5 7.58172 21 12 21Z"
      fill="currentColor"
      stroke="#1F1B16"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M12 7V17M12 12L8 14M12 12L16 14"
      stroke="#1F1B16"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const SpadeIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2C8 2 6 6 6 10C6 13 9 15 12 16C15 15 18 13 18 10C18 6 16 2 12 2Z"
      fill="currentColor"
      stroke="#1F1B16"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M12 16V22M9 22H15"
      stroke="#1F1B16"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="5" fill="currentColor" stroke="#1F1B16" strokeWidth="2.2" />
    <path
      d="M12 2V4M12 20V22M2 12H4M20 12H22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
      stroke="#1F1B16"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

export const RibbonIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="9" r="6" fill="currentColor" stroke="#1F1B16" strokeWidth="2.2" />
    <path
      d="M8.5 14L7 22L12 19L17 22L15.5 14"
      fill="currentColor"
      stroke="#1F1B16"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9" r="2.5" fill="#1F1B16" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      fill="currentColor"
      stroke="#1F1B16"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="5" width="18" height="16" rx="2" fill="currentColor" stroke="#1F1B16" strokeWidth="2.2" />
    <path d="M3 10H21M8 3V7M16 3V7" stroke="#1F1B16" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="8" cy="14" r="1.2" fill="#1F1B16" />
    <circle cx="12" cy="14" r="1.2" fill="#1F1B16" />
    <circle cx="16" cy="14" r="1.2" fill="#1F1B16" />
  </svg>
);

export const CrossIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M4 7H20M10 11V17M14 11V17M5 7L6 20H18L19 7M9 7V4H15V7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SparkleIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L14 9L21 12L14 15L12 22L10 15L3 12L10 9L12 2Z"
      fill="currentColor"
      stroke="#1F1B16"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const TrophyIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 21H16M12 17V21M6 4H18V9C18 12.3137 15.3137 15 12 15C8.68629 15 6 12.3137 6 9V4Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 7H3C2.44772 7 2 7.44772 2 8C2 10.5 4 12 6 12M18 7H21C21.5523 7 22 7.44772 22 8C22 10.5 20 12 18 12"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

export const ShopIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 9L4 3H20L21 9M3 9C3 10.5 4.5 12 6 12C7.5 12 9 10.5 9 9M3 9V21H21V9M9 9C9 10.5 10.5 12 12 12C13.5 12 15 10.5 15 9M15 9C15 10.5 16.5 12 18 12C19.5 12 21 10.5 21 9"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
