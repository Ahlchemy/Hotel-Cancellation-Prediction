export default function Badge({ children, variant = 'default', size = 'md' }) {
  const variants = {
    default: 'bg-dark-700 text-dark-200 border-dark-600',
    primary: 'bg-primary-500/10 text-primary-400 border-primary-500/30',
    success: 'bg-success-500/10 text-success-400 border-success-500/30',
    danger: 'bg-danger-500/10 text-danger-400 border-danger-500/30',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    info: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full border
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status }) {
  const statusConfig = {
    best: { label: 'Best Model', variant: 'success' },
    good: { label: 'Good', variant: 'primary' },
    overfitting: { label: 'Overfitting', variant: 'warning' },
    baseline: { label: 'Baseline', variant: 'default' },
  };

  const config = statusConfig[status] || statusConfig.baseline;

  return <Badge variant={config.variant}>{config.label}</Badge>;
}
