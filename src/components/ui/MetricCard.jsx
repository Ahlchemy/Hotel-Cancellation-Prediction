import { motion } from 'framer-motion';

export default function MetricCard({
  label,
  value,
  subValue,
  icon: Icon,
  trend,
  color = 'primary',
  delay = 0,
}) {
  const colorClasses = {
    primary: 'text-primary-400 bg-primary-500/10 border-primary-500/20',
    success: 'text-success-400 bg-success-500/10 border-success-500/20',
    danger: 'text-danger-400 bg-danger-500/10 border-danger-500/20',
    warning: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  };

  const trendColors = {
    up: 'text-success-400',
    down: 'text-danger-400',
    neutral: 'text-dark-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`p-3 rounded-xl border ${colorClasses[color]}`}
        >
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        {trend && (
          <span className={`text-sm font-medium ${trendColors[trend]}`}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '—'}
          </span>
        )}
      </div>
      <p className="text-dark-400 text-sm mb-1">{label}</p>
      <p className="stat-number text-white">{value}</p>
      {subValue && (
        <p className="text-dark-400 text-sm mt-1">{subValue}</p>
      )}
    </motion.div>
  );
}

export function SmallMetricCard({ label, value, color = 'primary' }) {
  const colorClasses = {
    primary: 'border-primary-500/30',
    success: 'border-success-500/30',
    danger: 'border-danger-500/30',
  };

  return (
    <div className={`px-4 py-3 bg-dark-800/50 rounded-xl border ${colorClasses[color]}`}>
      <p className="text-dark-400 text-xs mb-1">{label}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}
