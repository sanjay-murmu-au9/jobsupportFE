import React from 'react';
import useCountAnimation from './hooks/useCountAnimation';

interface AnimatedStatCardProps {
  value: number;
  label: string;
}

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({ value, label }) => {
  const animatedValue = useCountAnimation(value);

  return (
    <div className="stat-card">
      <p className="stat-value">{animatedValue}%</p>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default AnimatedStatCard;