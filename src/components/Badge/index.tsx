import { BadgeCustom } from './style';

interface BadgeProps {
  children: React.ReactNode;
  type?: 'success' | 'info' | 'warning';
}

const Badge = ({ children, type = 'success' }: BadgeProps) => {
  return <BadgeCustom type={type}>{children}</BadgeCustom>;
};

export { Badge };
