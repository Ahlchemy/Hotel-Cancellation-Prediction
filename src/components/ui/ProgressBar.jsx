import { motion } from 'framer-motion';

export default function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  color = 'primary',
  size = 'md',
}) {
  const percentage = Math.min((value / max) * 100, 100);

  const colorClasses = {
    primary: 'bg-primary-500',
    success: 'bg-success-500',
    danger: 'bg-danger-500',
    warning: 'bg-amber-500',
    gradient: 'bg-gradient-to-r from-primary-500 to-primary-400',
  };

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm text-dark-300">{label}</span>}
          {showValue && (
            <span className="text-sm font-medium">
              {typeof value === 'number' && value < 1
                ? `${(value * 100).toFixed(1)}%`
                : `${value}%`}
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-dark-700 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full rounded-full ${colorClasses[color]}`}
        />
      </div>
    </div>
  );
}

export function ComparisonBar({ label, value1, value2, label1 = 'Train', label2 = 'Test' }) {
  const percentage1 = value1 * 100;
  const percentage2 = value2 * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-dark-400 w-12">{label1}</span>
          <div className="flex-1 bg-dark-700 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage1}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full bg-primary-500 rounded-full"
            />
          </div>
          <span className="text-xs font-mono w-14 text-right">{(value1 * 100).toFixed(1)}%</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-dark-400 w-12">{label2}</span>
          <div className="flex-1 bg-dark-700 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage2}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-success-500 rounded-full"
            />
          </div>
          <span className="text-xs font-mono w-14 text-right">{(value2 * 100).toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
}
