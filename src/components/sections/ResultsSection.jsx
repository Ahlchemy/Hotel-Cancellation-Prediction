import { useState } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../layout/Section';
import ModelComparisonChart from '../charts/ModelComparisonChart';
import FeatureImportanceChart from '../charts/FeatureImportanceChart';
import { modelMetrics, getBestModel } from '../../data/modelMetrics';
import { Trophy, TrendingUp, Target, Zap, ChevronDown, AlertTriangle, Shield, Clock, DollarSign } from 'lucide-react';
import Badge from '../ui/Badge';

export default function ResultsSection() {
  const [selectedModel, setSelectedModel] = useState('random-forest-full');
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const bestModel = getBestModel();
  const selectedModelData = modelMetrics.find((m) => m.id === selectedModel);

  return (
    <Section id="results" dark>
      <SectionHeader
        badge="Results"
        title="What This Means for Your Business"
        subtitle="Translating model performance into actionable business outcomes and revenue impact."
      />

      {/* Business Impact Summary - Lead with Business Value */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 p-8 bg-gradient-to-r from-success-500/10 to-primary-500/10 border border-success-500/30 rounded-2xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-success-500/20 rounded-xl">
            <Trophy className="w-8 h-8 text-success-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-semibold">{bestModel.name}</h3>
              <Badge variant="success">Recommended</Badge>
            </div>
            <p className="text-dark-300">Best performing model for production deployment</p>
          </div>
        </div>

        {/* Business-Translated Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              value: '74%',
              label: 'Cancellations Detected Early',
              detail: 'Identified 30+ days before check-in',
              color: 'text-primary-400',
            },
            {
              icon: Shield,
              value: '95%',
              label: 'Reliable Predictions',
              detail: 'Only 5% false alarms on good bookings',
              color: 'text-success-400',
            },
            {
              icon: DollarSign,
              value: '$542K',
              label: 'At-Risk Revenue Identified',
              detail: 'Annual high-risk bookings flagged',
              color: 'text-amber-400',
            },
            {
              icon: Clock,
              value: '30+ days',
              label: 'Advance Warning',
              detail: 'Time to take preventive action',
              color: 'text-primary-400',
            },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-dark-800/50 rounded-xl"
            >
              <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
              <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
              <p className="text-white font-medium text-sm mt-1">{metric.label}</p>
              <p className="text-dark-400 text-xs mt-1">{metric.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* What This Means Box */}
        <div className="mt-6 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <p className="text-dark-200 text-base leading-relaxed">
            <span className="font-semibold text-white">What this means:</span> For every 100 bookings flagged as high-risk,
            87 will actually cancel. This allows targeted intervention (deposits, engagement) on the right customers
            without annoying loyal guests who intend to show up.
          </p>
        </div>
      </motion.div>

      {/* Model Comparison Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <ModelComparisonChart />
      </motion.div>

      {/* Feature Importance - Business Context */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <FeatureImportanceChart />
      </motion.div>

      {/* Model Limitations & Risks - For Credibility */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="card border-amber-500/30">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg font-semibold">Model Limitations & Risk Factors</h3>
          </div>
          <p className="text-dark-300 mb-4">
            For a complete business assessment, consider these factors when implementing:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'Data Recency',
                description: 'Model trained on 2015-2017 data. Recommend retraining with recent data to account for post-pandemic booking behavior shifts.',
                severity: 'medium',
              },
              {
                title: 'Short Lead Time Bookings',
                description: 'Model less accurate for bookings <7 days lead time (23% of dataset). Performance drops to ~72% accuracy for last-minute bookings.',
                severity: 'low',
              },
              {
                title: 'External Factors Not Included',
                description: 'Does not account for: economic conditions, local events, weather disruptions, or competitor pricing changes.',
                severity: 'medium',
              },
              {
                title: 'Monitoring Required',
                description: 'Recommend weekly accuracy tracking with automated alerts if performance drops below 80% threshold.',
                severity: 'low',
              },
            ].map((limitation, index) => (
              <div
                key={limitation.title}
                className={`p-4 rounded-lg border ${
                  limitation.severity === 'high'
                    ? 'bg-danger-500/10 border-danger-500/30'
                    : limitation.severity === 'medium'
                    ? 'bg-amber-500/10 border-amber-500/30'
                    : 'bg-dark-700/50 border-dark-600'
                }`}
              >
                <h4 className="font-semibold mb-1">{limitation.title}</h4>
                <p className="text-sm text-dark-300">{limitation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Technical Details - Collapsible */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <button
          onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
          className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors mb-4"
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform ${showTechnicalDetails ? 'rotate-180' : ''}`}
          />
          <span className="text-sm font-medium">
            {showTechnicalDetails ? 'Hide' : 'View'} Technical Details (Confusion Matrix, ROC Curves)
          </span>
        </button>

        {showTechnicalDetails && (
          <div className="space-y-8 opacity-90">
            {/* Confusion Matrix */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Confusion Matrix</h3>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="px-3 py-1.5 bg-dark-700 border border-dark-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {modelMetrics.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>
              {selectedModelData && selectedModelData.confusionMatrix && (
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="p-4 bg-success-500/20 rounded-lg text-center">
                    <p className="text-2xl font-bold text-success-400">
                      {selectedModelData.confusionMatrix.tn}
                    </p>
                    <p className="text-xs text-dark-400">True Negative</p>
                    <p className="text-xs text-dark-500 mt-1">Correctly predicted: Won't cancel</p>
                  </div>
                  <div className="p-4 bg-danger-500/20 rounded-lg text-center">
                    <p className="text-2xl font-bold text-danger-400">
                      {selectedModelData.confusionMatrix.fp}
                    </p>
                    <p className="text-xs text-dark-400">False Positive</p>
                    <p className="text-xs text-dark-500 mt-1">False alarm: Predicted cancel, didn't</p>
                  </div>
                  <div className="p-4 bg-danger-500/20 rounded-lg text-center">
                    <p className="text-2xl font-bold text-danger-400">
                      {selectedModelData.confusionMatrix.fn}
                    </p>
                    <p className="text-xs text-dark-400">False Negative</p>
                    <p className="text-xs text-dark-500 mt-1">Missed: Didn't predict, but canceled</p>
                  </div>
                  <div className="p-4 bg-success-500/20 rounded-lg text-center">
                    <p className="text-2xl font-bold text-success-400">
                      {selectedModelData.confusionMatrix.tp}
                    </p>
                    <p className="text-xs text-dark-400">True Positive</p>
                    <p className="text-xs text-dark-500 mt-1">Correctly predicted: Will cancel</p>
                  </div>
                </div>
              )}
            </div>

            {/* ROC Curves */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">ROC Curves Comparison</h3>
                <img
                  src="/visualizations/18_roc_curves.png"
                  alt="ROC Curves for all models"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold mb-4">Feature Importance Comparison</h3>
                <img
                  src="/visualizations/19_feature_importance_comparison.png"
                  alt="Feature importance across models"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Technical Metrics Table */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Full Model Metrics</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-dark-700">
                      <th className="text-left py-2 px-3">Model</th>
                      <th className="text-right py-2 px-3">Accuracy</th>
                      <th className="text-right py-2 px-3">Precision</th>
                      <th className="text-right py-2 px-3">Recall</th>
                      <th className="text-right py-2 px-3">F1 Score</th>
                      <th className="text-right py-2 px-3">ROC AUC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modelMetrics.map((model) => (
                      <tr key={model.id} className="border-b border-dark-800">
                        <td className="py-2 px-3 font-medium">{model.name}</td>
                        <td className="text-right py-2 px-3">{(model.testAccuracy * 100).toFixed(1)}%</td>
                        <td className="text-right py-2 px-3">{(model.precision * 100).toFixed(1)}%</td>
                        <td className="text-right py-2 px-3">{(model.recall * 100).toFixed(1)}%</td>
                        <td className="text-right py-2 px-3">{model.f1Score.toFixed(3)}</td>
                        <td className="text-right py-2 px-3">{model.rocAuc.toFixed(3)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Key Takeaways - Business Focused */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {[
          {
            title: 'Lead Time is the #1 Predictor',
            description:
              'Bookings made 90+ days in advance are 3x more likely to cancel. Focus early intervention efforts on long-lead bookings.',
          },
          {
            title: 'Special Requests Signal Commitment',
            description:
              'Guests with 4+ special requests have only 2.1% cancellation rate vs 43.5% for those with none. Encourage engagement.',
          },
          {
            title: 'Online Bookings Need Attention',
            description:
              'Online travel agency bookings cancel at 2x the rate of direct bookings. Consider different deposit policies by channel.',
          },
        ].map((takeaway, index) => (
          <motion.div
            key={takeaway.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <h4 className="font-semibold mb-2">{takeaway.title}</h4>
            <p className="text-sm text-dark-300">{takeaway.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
