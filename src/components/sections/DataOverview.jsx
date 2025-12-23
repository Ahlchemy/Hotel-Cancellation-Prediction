import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../layout/Section';
import { Database, Hash, Type, Binary, Target } from 'lucide-react';
import { datasetStats, featureTypes, cancellationDistribution } from '../../data/chartData';
import CancellationRateChart from '../charts/CancellationRateChart';

const typeIcons = {
  Identifier: Hash,
  Numeric: Database,
  Categorical: Type,
  Binary: Binary,
  Target: Target,
};

const typeColors = {
  Identifier: 'text-dark-400 bg-dark-700',
  Numeric: 'text-primary-400 bg-primary-500/10',
  Categorical: 'text-amber-400 bg-amber-500/10',
  Binary: 'text-cyan-400 bg-cyan-500/10',
  Target: 'text-success-400 bg-success-500/10',
};

export default function DataOverview() {
  return (
    <Section id="data">
      <SectionHeader
        badge="Dataset"
        title="Data Overview"
        subtitle="Understanding the hotel booking dataset used for building the cancellation prediction model."
      />

      {/* Dataset Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {[
          { label: 'Total Bookings', value: datasetStats.totalRecords.toLocaleString() },
          { label: 'Features', value: datasetStats.features },
          { label: 'Cancellation Rate', value: `${datasetStats.cancellationRate}%` },
          { label: 'Train/Test Split', value: datasetStats.trainTestSplit },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card text-center"
          >
            <p className="text-3xl font-bold font-display mb-1">{stat.value}</p>
            <p className="text-sm text-dark-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Feature Table */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-lg font-semibold mb-4">Feature Dictionary</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="text-left py-2 px-2 text-dark-400 font-medium">Feature</th>
                  <th className="text-left py-2 px-2 text-dark-400 font-medium">Type</th>
                  <th className="text-left py-2 px-2 text-dark-400 font-medium hidden sm:table-cell">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureTypes.map((feature, index) => {
                  const Icon = typeIcons[feature.type] || Database;
                  return (
                    <motion.tr
                      key={feature.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.02 }}
                      className="border-b border-dark-800 hover:bg-dark-800/50"
                    >
                      <td className="py-2 px-2 font-mono text-xs">{feature.name}</td>
                      <td className="py-2 px-2">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs ${
                            typeColors[feature.type]
                          }`}
                        >
                          <Icon className="w-3 h-3" />
                          {feature.type}
                        </span>
                      </td>
                      <td className="py-2 px-2 text-dark-400 hidden sm:table-cell">
                        {feature.description}
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Target Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <CancellationRateChart />

          {/* Data Quality Note */}
          <div className="mt-4 p-4 bg-success-500/10 border border-success-500/30 rounded-xl">
            <h4 className="font-semibold text-success-400 mb-2">Data Quality</h4>
            <ul className="text-sm text-dark-300 space-y-1">
              <li>No missing values in the dataset</li>
              <li>Clean, well-structured booking records</li>
              <li>Balanced representation across features</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
