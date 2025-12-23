import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../layout/Section';
import { modelMetrics } from '../../data/modelMetrics';
import { GitBranch, Trees, Settings, CheckCircle } from 'lucide-react';
import Badge from '../ui/Badge';
import ProgressBar from '../ui/ProgressBar';

const modelIcons = {
  'Decision Tree': GitBranch,
  'Random Forest': Trees,
};

export default function ModelingSection() {
  return (
    <Section id="models">
      <SectionHeader
        badge="Machine Learning"
        title="Model Development"
        subtitle="Building and comparing classification models to predict booking cancellations."
      />

      {/* Methodology Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: 'Train/Test Split',
            value: '70% / 30%',
            description: 'Stratified split to maintain class balance',
          },
          {
            title: 'Cross-Validation',
            value: '5-Fold CV',
            description: 'Used for hyperparameter tuning',
          },
          {
            title: 'Optimization Metric',
            value: 'F1 Score',
            description: 'Balance between precision and recall',
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card text-center"
          >
            <p className="text-2xl font-bold font-display text-primary-400 mb-1">{item.value}</p>
            <p className="font-semibold mb-1">{item.title}</p>
            <p className="text-sm text-dark-400">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Model Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {modelMetrics.map((model, index) => {
          const Icon = modelIcons[model.type] || GitBranch;
          const isTree = model.type === 'Decision Tree';

          return (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`card ${model.isBest ? 'ring-2 ring-success-500/50' : ''}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-3 rounded-xl ${
                      model.isBest
                        ? 'bg-success-500/10 text-success-400'
                        : 'bg-primary-500/10 text-primary-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{model.name}</h3>
                    <p className="text-sm text-dark-400">{model.type}</p>
                  </div>
                </div>
                {model.isBest && <Badge variant="success">Best Model</Badge>}
              </div>

              {/* Description */}
              <p className="text-sm text-dark-300 mb-4">{model.description}</p>

              {/* Model Parameters */}
              {(model.bestParams || model.treeDepth) && (
                <div className="mb-4 p-3 bg-dark-700 rounded-lg">
                  <div className="flex items-center gap-2 mb-2 text-sm font-medium">
                    <Settings className="w-4 h-4 text-dark-400" />
                    <span>Parameters</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {model.treeDepth && (
                      <>
                        <span className="text-dark-400">Tree Depth:</span>
                        <span className="font-mono">{model.treeDepth}</span>
                      </>
                    )}
                    {model.leaves && (
                      <>
                        <span className="text-dark-400">Leaves:</span>
                        <span className="font-mono">{model.leaves}</span>
                      </>
                    )}
                    {model.nEstimators && (
                      <>
                        <span className="text-dark-400">N Estimators:</span>
                        <span className="font-mono">{model.nEstimators}</span>
                      </>
                    )}
                    {model.bestParams?.maxDepth && (
                      <>
                        <span className="text-dark-400">Max Depth:</span>
                        <span className="font-mono">{model.bestParams.maxDepth}</span>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Performance Metrics */}
              <div className="space-y-3">
                <ProgressBar
                  label="Test Accuracy"
                  value={model.testAccuracy}
                  color={model.testAccuracy > 0.85 ? 'success' : 'primary'}
                />
                <ProgressBar
                  label="Precision"
                  value={model.precision}
                  color={model.precision > 0.8 ? 'success' : 'primary'}
                />
                <ProgressBar
                  label="Recall"
                  value={model.recall}
                  color={model.recall > 0.7 ? 'success' : 'warning'}
                />
                <ProgressBar
                  label="F1 Score"
                  value={model.f1Score}
                  color={model.f1Score > 0.75 ? 'success' : 'primary'}
                />
              </div>

              {/* ROC AUC Badge */}
              <div className="mt-4 pt-4 border-t border-dark-700 flex items-center justify-between">
                <span className="text-sm text-dark-400">ROC AUC Score</span>
                <span
                  className={`text-lg font-bold ${
                    model.rocAuc > 0.9 ? 'text-success-400' : 'text-primary-400'
                  }`}
                >
                  {model.rocAuc.toFixed(3)}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Model Selection Reasoning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 p-6 bg-success-500/10 border border-success-500/30 rounded-2xl"
      >
        <div className="flex items-start gap-4">
          <CheckCircle className="w-8 h-8 text-success-400 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Why Random Forest (Full)?</h3>
            <ul className="text-dark-300 space-y-2">
              <li>
                <strong>Highest F1 Score (0.80):</strong> Best balance between precision and recall
              </li>
              <li>
                <strong>Excellent ROC AUC (0.92):</strong> Superior discrimination ability
              </li>
              <li>
                <strong>Robust Predictions:</strong> Ensemble averaging reduces variance
              </li>
              <li>
                <strong>Business Fit:</strong> High recall (74%) catches most cancellations for proactive
                management
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
