import { motion } from 'framer-motion';
import { Clock, TrendingDown, Users, Building2, History, ArrowRight } from 'lucide-react';

const iconMap = {
  Clock,
  TrendingDown,
  Users,
  Building2,
  History,
};

export default function InsightCard({ insight, index = 0 }) {
  const Icon = iconMap[insight.icon] || Clock;

  const colorClasses = {
    primary: {
      bg: 'bg-primary-500/10',
      border: 'border-primary-500/30',
      text: 'text-primary-400',
      badge: 'bg-primary-500/20 text-primary-300',
    },
    success: {
      bg: 'bg-success-500/10',
      border: 'border-success-500/30',
      text: 'text-success-400',
      badge: 'bg-success-500/20 text-success-300',
    },
    danger: {
      bg: 'bg-danger-500/10',
      border: 'border-danger-500/30',
      text: 'text-danger-400',
      badge: 'bg-danger-500/20 text-danger-300',
    },
    warning: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      text: 'text-amber-400',
      badge: 'bg-amber-500/20 text-amber-300',
    },
  };

  const colors = colorClasses[insight.color] || colorClasses.primary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card ${colors.border} border-2 hover:shadow-xl transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${colors.bg}`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
          {insight.importance} importance
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3">{insight.title}</h3>

      {/* Finding */}
      <p className="text-dark-300 text-sm mb-4">{insight.finding}</p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {insight.stats.map((stat, i) => (
          <div
            key={i}
            className={`px-3 py-2 rounded-lg ${
              stat.trend === 'high' ? 'bg-danger-500/10' : 'bg-success-500/10'
            }`}
          >
            <p className="text-xs text-dark-400">{stat.label}</p>
            <p className={`font-bold ${
              stat.trend === 'high' ? 'text-danger-400' : 'text-success-400'
            }`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recommendation */}
      <div className="pt-4 border-t border-dark-700">
        <div className="flex items-start gap-2">
          <ArrowRight className={`w-4 h-4 mt-0.5 ${colors.text} flex-shrink-0`} />
          <p className="text-sm text-dark-300">
            <span className="font-medium text-white">Action:</span>{' '}
            {insight.recommendation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
