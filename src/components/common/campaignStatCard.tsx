import React, { useEffect } from 'react';
import useCountAnimation from './hooks/useCountAnimation';

interface CampaignStatCardProps {
  value: number;
  suffix?: string;
  label: string;
  id?: string;
}

const CampaignStatCard: React.FC<CampaignStatCardProps> = ({ value, suffix = '', label, id }) => {
  // Create a unique ID that includes all the component's properties
  const uniqueId = `campaign-stats-${value}-${label.toLowerCase().replace(/\s+/g, '-')}-${suffix}`;

  useEffect(() => {
    console.log('CampaignStatCard mounted with ID:', {
      uniqueId,
      value,
      suffix,
      label,
      storageKey: `statsAnimated-${uniqueId}`
    });

    // Clear the animation state for testing
    localStorage.removeItem(`statsAnimated-${uniqueId}`);
  }, [uniqueId, value, suffix, label]);

  const animatedValue = useCountAnimation(value, 4000, uniqueId);

  console.log('CampaignStatCard rendering:', {
    uniqueId,
    animatedValue,
    currentValue: value,
    hasAnimated: localStorage.getItem(`statsAnimated-${uniqueId}`)
  });

  return (
    <div className="home-stats-item">
      <p className="home-stats-value">{animatedValue}{suffix}</p>
      <p>{label}</p>
    </div>
  );
};

export default CampaignStatCard;