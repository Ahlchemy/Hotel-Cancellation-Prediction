import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Clock, Target, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ExecutiveSummary() {
  return (
    <section className="py-16 bg-dark-850">
      <div className="section-container">
        {/* Main Impact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-success-500/20 via-primary-500/10 to-success-500/20 border border-success-500/30 rounded-2xl p-8 mb-8"
        >
          <div className="text-center mb-8">
            <p className="text-success-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Bottom Line Impact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-success-400">$201,000</span>
              <span className="text-dark-200"> Annual Revenue Recovery</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              By identifying high-risk cancellations 30+ days in advance, enabling proactive intervention
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                value: '74%',
                label: 'Cancellations Detected Early',
                detail: '30+ days advance warning',
                color: 'text-primary-400',
              },
              {
                icon: DollarSign,
                value: '327%',
                label: 'First Year ROI',
                detail: '$201K return on $61K investment',
                color: 'text-success-400',
              },
              {
                icon: Clock,
                value: '3 mo',
                label: 'Payback Period',
                detail: 'Break-even in Q1',
                color: 'text-amber-400',
              },
              {
                icon: TrendingUp,
                value: '$850K',
                label: '5-Year Value',
                detail: 'Net present value',
                color: 'text-primary-400',
              },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-2`} />
                <p className={`text-3xl font-bold ${metric.color}`}>{metric.value}</p>
                <p className="text-white font-medium text-sm mt-1">{metric.label}</p>
                <p className="text-dark-400 text-xs mt-1">{metric.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current vs Future State */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card border-danger-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-danger-500/20 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-danger-400" />
              </div>
              <h3 className="text-lg font-semibold text-danger-400">Current State (No Model)</h3>
            </div>
            <ul className="space-y-3">
              {[
                { metric: 'Cancellations detected early', value: '0%' },
                { metric: 'Revenue at risk identified', value: '$0' },
                { metric: 'Preventable cancellations', value: '~10% (reactive only)' },
                { metric: 'Annual revenue recovered', value: '$0' },
              ].map((item) => (
                <li key={item.metric} className="flex justify-between items-center py-2 border-b border-dark-700">
                  <span className="text-dark-300">{item.metric}</span>
                  <span className="font-mono text-danger-400">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card border-success-500/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-success-500/20 rounded-lg">
                <CheckCircle className="w-6 h-6 text-success-400" />
              </div>
              <h3 className="text-lg font-semibold text-success-400">With ML Model</h3>
            </div>
            <ul className="space-y-3">
              {[
                { metric: 'Cancellations detected early', value: '74%', improvement: '+74 pts' },
                { metric: 'Revenue at risk identified', value: '$542K', improvement: '+$542K' },
                { metric: 'Preventable cancellations', value: '~25% (proactive)', improvement: '+15 pts' },
                { metric: 'Annual revenue recovered', value: '$201K', improvement: '+$201K' },
              ].map((item) => (
                <li key={item.metric} className="flex justify-between items-center py-2 border-b border-dark-700">
                  <span className="text-dark-300">{item.metric}</span>
                  <div className="text-right">
                    <span className="font-mono text-success-400">{item.value}</span>
                    <span className="text-xs text-success-500 ml-2">({item.improvement})</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Investment Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-700"
        >
          <h3 className="text-lg font-semibold mb-4 text-center">Investment Required</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-primary-400">$45,000</p>
              <p className="text-dark-300 font-medium">Pilot Program</p>
              <p className="text-dark-500 text-sm">3-month trial at 2 properties</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-400">$125,000</p>
              <p className="text-dark-300 font-medium">Full Deployment</p>
              <p className="text-dark-500 text-sm">All properties + training</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-success-400">$201,000</p>
              <p className="text-dark-300 font-medium">Year 1 Return</p>
              <p className="text-dark-500 text-sm">327% ROI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
