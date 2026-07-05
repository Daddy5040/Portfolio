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
  primary: 'bg-[#F5A623] text-black shadow-[0_16px_44px_rgba(245,166,35,0.22)] hover:bg-[#ffc15a]',
  secondary: 'border border-white/12 bg-white/[0.04] text-[#F5F5F5] hover:border-[#F5A623]/50 hover:bg-[#F5A623]/10',
  ghost: 'text-[#A3A3A3] hover:text-[#F5F5F5]',
};

const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/50 focus:ring-offset-2 focus:ring-offset-[#050505]';

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.to !== undefined) {
    const { to, ...linkProps } = props;
    return <Link className={classes} to={to} {...linkProps}>{children}</Link>;
  }

  return <button className={classes} {...props}>{children}</button>;
}
