import React from 'react';
import AnimatedStatCard from '../common/AnimatedStatCard';
import CampaignStatCard from '../common/campaignStatCard';

const AnimationTest: React.FC = () => {
  const clearAnimationState = () => {
    localStorage.removeItem('statsAnimated-hero-stats');
    localStorage.removeItem('statsAnimated-campaign-stats');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Animation Test</h2>
      <button
        onClick={clearAnimationState}
        style={{
          marginBottom: '2rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          borderRadius: '0.375rem',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Reset Animations
      </button>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Hero Stats (Fast Animation - 2s)</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <AnimatedStatCard value={56} label="Test Hero Stat 1" />
          <AnimatedStatCard value={83} label="Test Hero Stat 2" />
        </div>
      </div>

      <div>
        <h3>Campaign Stats (Slow Animation - 4s)</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <CampaignStatCard value={85} suffix="k+" label="Test Campaign Stat 1" />
          <CampaignStatCard value={27} suffix="+" label="Test Campaign Stat 2" />
        </div>
      </div>
    </div>
  );
};

export default AnimationTest;