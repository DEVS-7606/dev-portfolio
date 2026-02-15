interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  color?: string;
  className?: string;
}

export const Badge = ({ children, variant = 'primary', color, className = '' }: BadgeProps) => {
  const baseStyles = "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300";
  
  const variantStyles = {
    primary: "bg-white/20 backdrop-blur-sm text-white",
    secondary: "text-white group-hover:shadow-lg",
  };

  const style = variant === 'secondary' && color ? {
    backgroundColor: color,
    boxShadow: `0 2px 8px ${color}40`,
  } : undefined;

  return (
    <span 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75" />
      {children}
    </span>
  );
};
