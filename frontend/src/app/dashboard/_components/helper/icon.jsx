import { icons } from 'lucide-react';

const Icon = ({ name, size }) => {
  const LucideIcon = icons[name];

  return <LucideIcon  size={size} />;
};

export default Icon;