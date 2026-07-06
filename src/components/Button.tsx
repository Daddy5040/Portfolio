import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type SharedButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsLinkProps = SharedButtonProps & {
  to: LinkProps['to'];
} & Omit<LinkProps, 'to' | 'className' | 'children'>;

type ButtonAsButtonProps = SharedButtonProps & {
  to?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;


const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[#F5A623] text-black shadow-[0_16px_44px_rgba(245,166,35,0.22)] hover:bg-[#ffc15a] hover:shadow-[0_22px_70px_rgba(245,166,35,0.34)]',
  secondary: 'border border-white/12 bg-white/[0.04] text-[#F5F5F5] hover:border-[#F5A623]/55 hover:bg-[#F5A623]/10 hover:shadow-[0_18px_55px_rgba(245,166,35,0.12)]',
  ghost: 'text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-white/[0.04]',
};

const base = 'group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold premium-transition hover:-translate-y-0.5 hover:scale-[1.015] active:translate-y-0 active:scale-[0.965] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/50 focus:ring-offset-2 focus:ring-offset-[#050505] before:absolute before:inset-0 before:-z-10 before:translate-x-[-120%] before:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.34),transparent)] before:transition-transform before:duration-700 hover:before:translate-x-[120%]';

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (props.to !== undefined) {
    const { to, ...linkProps } = props;
    return <Link className={classes} to={to} {...linkProps}>{children}</Link>;
  }

  return <button className={classes} {...props}>{children}</button>;
}
