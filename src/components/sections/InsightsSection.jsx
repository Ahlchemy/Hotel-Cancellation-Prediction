import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../layout/Section';
import InsightCard from '../ui/InsightCard';
import { keyInsights, recommendations, businessRecommendations } from '../../data/insights';
import {
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  CreditCard,
  Shield,
  BarChart3,
  DollarSign,
  AlertTriangle,
  Calendar,
} from 'lucide-react';

const recommendationIcons = {
  'Dynamic Deposit Policy': CreditCard,
  'Pre-Arrival Engagement Campaign': Users,
  'Real-Time Risk Scoring': Shield,
  'Channel-Specific Policies': BarChart3,
  'Repeat Canceller Flagging': AlertTriangle,
};

export default function InsightsSection() {
  return (
    <Section id="insights">
      <SectionHeader
        badge="Insights"
        title="Key Findings & Recommendations"
        subtitle="Translating model insights into actionable business strategies with specific costs and expected returns."
      />

      {/* Key Insights */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-5 h-5 text-amber-400" />
          <h3 className="text-xl font-semibold">Key Discoveries</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyInsights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <InsightCard insight={insight} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recommendations with Costs */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <CheckCircle2 className="w-5 h-5 text-success-400" />
          <h3 className="text-xl font-semibold">Actionable Recommendations</h3>
        </div>

        <div className="space-y-4">
          {recommendations.map((rec, index) => {
            const Icon = recommendationIcons[rec.title] || CheckCircle2;
            return (
              <motion.div
                key={rec.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  {/* Main Content */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 bg-primary-500/10 rounded-xl flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{rec.title}</h4>
                      <p className="text-sm text-dark-300 mb-3">{rec.description}</p>

                      {/* Risk Note */}
                      {rec.risk && (
                        <p className="text-xs text-amber-400 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          {rec.risk}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-4">
                    <div className="bg-success-500/10 border border-success-500/30 px-3 py-2 rounded-lg text-center min-w-[100px]">
                      <p className="text-xs text-dark-400 mb-1">Impact</p>
                      <p className="text-sm font-semibold text-success-400">{rec.impact}</p>
                    </div>
                    <div className="bg-dark-700/50 border border-dark-600 px-3 py-2 rounded-lg text-center min-w-[100px]">
                      <p className="text-xs text-dark-400 mb-1">Cost</p>
                      <p className="text-sm font-semibold text-dark-200">{rec.cost}</p>
                    </div>
                    <div className="bg-dark-700/50 border border-dark-600 px-3 py-2 rounded-lg text-center min-w-[80px]">
                      <p className="text-xs text-dark-400 mb-1">Timeline</p>
                      <p className="text-sm font-semibold text-dark-200">{rec.timeline}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Implementation Roadmap with Costs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-6">
          <ArrowRight className="w-5 h-5 text-primary-400" />
          <h3 className="text-xl font-semibold">Implementation Roadmap</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {businessRecommendations.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="card relative"
            >
              {/* Connector */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-dark-600" />
              )}

              <div className="flex items-center justify-between mb-4">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    index === 0
                      ? 'bg-primary-500/20 text-primary-400'
                      : index === 1
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-success-500/20 text-success-400'
                  }`}
                >
                  {phase.phase}
                </div>
                <span className="text-lg font-bold text-primary-400">{phase.cost}</span>
              </div>

              <h4 className="font-semibold mb-1">{phase.title}</h4>
              <div className="flex items-center gap-2 text-sm text-dark-400 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{phase.timeline}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dark-300">
                    <CheckCircle2 className="w-4 h-4 text-dark-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-dark-700">
                <p className="text-xs text-dark-400 mb-1">Expected Return</p>
                <p className="text-sm font-medium text-success-400">{phase.expectedReturn}</p>
              </div>
              <div className="mt-2">
                <p className="text-xs text-dark-500">{phase.resources}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decision Point - Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 p-8 bg-gradient-to-r from-primary-500/10 to-success-500/10 border border-primary-500/30 rounded-2xl"
      >
        <h3 className="text-xl font-semibold mb-6 text-center">Decision Summary</h3>

        <div className="grid sm:grid-cols-4 gap-6 text-center mb-8">
          <div>
            <p className="text-3xl font-bold text-danger-400">$1.57M</p>
            <p className="text-sm text-dark-400">Current Annual Loss</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary-400">$125K</p>
            <p className="text-sm text-dark-400">Total Investment</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-success-400">$201K</p>
            <p className="text-sm text-dark-400">Year 1 Recovery</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-success-400">327%</p>
            <p className="text-sm text-dark-400">First Year ROI</p>
          </div>
        </div>

        <div className="bg-dark-800/50 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-center text-dark-200">
            <span className="font-semibold text-white">Recommended Next Step:</span> Approve $45,000 pilot program
            for 3-month validation at 2 properties. Go/no-go decision based on achieving 80% prediction accuracy target.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
