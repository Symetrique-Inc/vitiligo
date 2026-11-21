import React from 'react';

export type TranslationStatus = 'MISSING' | 'DRAFT' | 'IN_REVIEW' | 'APPROVED' | 'PUBLISHED';

interface Props {
  status: TranslationStatus | string;
  size?: 'sm' | 'md';
}

export const TranslationStatusBadge: React.FC<Props> = ({ status, size = 'sm' }) => {
  const normStatus = (status || 'MISSING').toUpperCase();

  const config: Record<string, { label: string; bg: string; text: string; dot: string; border: string }> = {
    MISSING: {
      label: 'Missing',
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      dot: 'bg-rose-500',
      border: 'border-rose-200',
    },
    DRAFT: {
      label: 'Draft',
      bg: 'bg-amber-50',
      text: 'text-amber-800',
      dot: 'bg-amber-500',
      border: 'border-amber-200',
    },
    IN_REVIEW: {
      label: 'In Review',
      bg: 'bg-sky-50',
      text: 'text-sky-700',
      dot: 'bg-sky-500',
      border: 'border-sky-200',
    },
    APPROVED: {
      label: 'Approved',
      bg: 'bg-indigo-50',
      text: 'text-indigo-700',
      dot: 'bg-indigo-500',
      border: 'border-indigo-200',
    },
    PUBLISHED: {
      label: 'Published',
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      dot: 'bg-emerald-500',
      border: 'border-emerald-200',
    },
  };

  const current = config[normStatus] || config.MISSING;
  const isSm = size === 'sm';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${current.bg} ${current.text} ${current.border} ${
        isSm ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${current.dot}`} />
      <span>{current.label}</span>
    </span>
  );
};

