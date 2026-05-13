import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function GlassCard({
  children,
  className,
  innerClassName,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'p-2 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] shadow-2xl backdrop-blur-md',
        className,
      )}
    >
      <div
        className={cn(
          'rounded-[calc(2.5rem-0.5rem)] bg-surface/40 p-6 h-full border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]',
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  icon,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(62,124,177,0.3)]',
    secondary:
      'bg-white/10 text-white hover:bg-white/20 border border-white/10',
    ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'group relative flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300',
        variants[variant],
        className,
      )}
      {...(props as any)}
    >
      <span>{children}</span>
      {icon && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
          <motion.div
            initial={false}
            whileHover={{ x: 2, y: -2 }}
            className="flex items-center justify-center"
          >
            {icon}
          </motion.div>
        </div>
      )}
    </motion.button>
  );
}
