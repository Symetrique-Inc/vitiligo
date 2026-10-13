'use client';

import React from 'react';

interface PlaceholderTagProps {
  label?: string;
  className?: string;
}

export const PlaceholderTag: React.FC<PlaceholderTagProps> = ({
  label = 'Placeholder',
  className = '',
}) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono tracking-wider text-amber-700 bg-amber-50 border border-dashed border-amber-300 ml-1.5 align-middle select-none ${className}`}
      title="Placeholder item flagged for clinical/content review"
    >
      [{label}]
    </span>
  );
};
