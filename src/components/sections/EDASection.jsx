import Section, { SectionHeader } from '../layout/Section';
import LeadTimeChart from '../charts/LeadTimeChart';
import MarketSegmentChart from '../charts/MarketSegmentChart';
import FeatureImportanceChart from '../charts/FeatureImportanceChart';
import { motion } from 'framer-motion';
import { correlationData, specialRequestsData } from '../../data/chartData';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function EDASection() {
  return (
    <Section id="eda" dark>
      <SectionHeader
        badge="Analysis"
        title="Exploratory Data Analysis"
        subtitle="Discovering patterns and relationships in the booking data to understand what drives cancellations."
      />

      {/* Main EDA Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <LeadTimeChart />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <MarketSegmentChart />
        </motion.div>
      </div>

      {/* Special Requests Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card mb-12"
      >
        <h3 className="text-lg font-semibold mb-2">Special Requests Impact</h3>
        <p className="text-sm text-dark-400 mb-6">
          Customers with more special requests show significantly lower cancellation rates
        </p>

        <div className="grid sm:grid-cols-5 gap-4">
          {specialRequestsData.map((item, index) => (
            <motion.div
              key={item.requests}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`h-32 rounded-lg flex items-end justify-center pb-2 mb-2 ${
                  item.cancellationRate > 30
                    ? 'bg-gradient-to-t from-danger-500/30 to-danger-500/5'
                    : item.cancellationRate > 15
                    ? 'bg-gradient-to-t from-amber-500/30 to-amber-500/5'
                    : 'bg-gradient-to-t from-success-500/30 to-success-500/5'
                }`}
                style={{
                  background: `linear-gradient(to top, ${
                    item.cancellationRate > 30
                      ? 'rgba(239, 68, 68, 0.3)'
                      : item.cancellationRate > 15
                      ? 'rgba(245, 158, 11, 0.3)'
                      : 'rgba(34, 197, 94, 0.3)'
                  } ${item.cancellationRate}%, transparent ${item.cancellationRate}%)`,
                }}
              >
                <span className="text-2xl font-bold">{item.cancellationRate}%</span>
              </div>
              <p className="text-sm font-medium">{item.requests} requests</p>
              <p className="text-xs text-dark-500">{item.count.toLocaleString()} bookings</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-success-500/10 border border-success-500/30 rounded-lg">
          <p className="text-sm text-success-300">
            <span className="font-semibold">Insight:</span> Customers who make 4+ special requests
            have only a 2.1% cancellation rate vs 43.5% for those with no requests. This suggests
            higher engagement correlates with commitment.
          </p>
        </div>
      </motion.div>

      {/* Correlation Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card"
      >
        <h3 className="text-lg font-semibold mb-2">Correlation with Cancellation</h3>
        <p className="text-sm text-dark-400 mb-6">
          How each feature correlates with the likelihood of cancellation
        </p>

        <div className="space-y-4">
          {correlationData.map((item, index) => (
            <motion.div
              key={item.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4"
            >
              <div className="w-32 sm:w-40 flex-shrink-0">
                <span className="text-sm font-medium">{item.feature}</span>
              </div>

              <div className="flex-1 flex items-center gap-2">
                {/* Negative bar (left side) */}
                <div className="w-1/2 flex justify-end">
                  {item.correlation < 0 && (
                    <div
                      className="h-6 bg-success-500/50 rounded-l"
                      style={{ width: `${Math.abs(item.correlation) * 200}%` }}
                    />
                  )}
                </div>

                {/* Center line */}
                <div className="w-0.5 h-8 bg-dark-600" />

                {/* Positive bar (right side) */}
                <div className="w-1/2">
                  {item.correlation > 0 && (
                    <div
                      className="h-6 bg-danger-500/50 rounded-r"
                      style={{ width: `${item.correlation * 200}%` }}
                    />
                  )}
                </div>
              </div>

              <div className="w-16 flex-shrink-0 flex items-center gap-1">
                {item.correlation > 0 ? (
                  <TrendingUp className="w-4 h-4 text-danger-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-success-400" />
                )}
                <span
                  className={`text-sm font-mono ${
                    item.correlation > 0 ? 'text-danger-400' : 'text-success-400'
                  }`}
                >
                  {item.correlation > 0 ? '+' : ''}
                  {item.correlation.toFixed(2)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
          <div className="p-3 bg-danger-500/10 rounded-lg border border-danger-500/30">
            <p className="text-danger-300">
              <span className="font-semibold">Positive correlation:</span> Higher values increase
              cancellation likelihood
            </p>
          </div>
          <div className="p-3 bg-success-500/10 rounded-lg border border-success-500/30">
            <p className="text-success-300">
              <span className="font-semibold">Negative correlation:</span> Higher values decrease
              cancellation likelihood
            </p>
          </div>
        </div>
      </motion.div>

      {/* Correlation Heatmap from Python Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card mt-12"
      >
        <h3 className="text-lg font-semibold mb-4">Full Correlation Matrix</h3>
        <p className="text-sm text-dark-400 mb-4">
          Complete correlation heatmap showing relationships between all numerical features
        </p>
        <img
          src="/visualizations/07_correlation_matrix.png"
          alt="Correlation matrix heatmap"
          className="w-full rounded-lg"
        />
      </motion.div>
    </Section>
  );
}
