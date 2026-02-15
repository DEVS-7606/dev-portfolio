interface TextProps {
  children: React.ReactNode;
  variant: 'heading' | 'subheading' | 'body' | 'caption' | 'label';
  color?: string;
  className?: string;
}

const textVariants = {
  heading: "font-black leading-tight tracking-tight",
  subheading: "font-semibold",
  body: "font-medium",
  caption: "text-xs",
  label: "text-[10px] font-bold uppercase tracking-wider",
};

export const Text = ({ children, variant, color, className = '' }: TextProps) => (
  <div 
    className={`${textVariants[variant]} ${className}`}
    style={color ? { color } : undefined}
  >
    {children}
  </div>
);
