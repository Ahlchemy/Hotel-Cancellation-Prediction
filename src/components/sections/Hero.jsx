import { motion } from 'framer-motion';
import { ArrowDown, Database, Brain, Target, TrendingUp } from 'lucide-react';
import { datasetStats } from '../../data/chartData';
import { getBestModel } from '../../data/modelMetrics';

export default function Hero() {
  const bestModel = getBestModel();

  const stats = [
    {
      icon: Database,
      value: datasetStats.totalRecords.toLocaleString(),
      label: 'Bookings Analyzed',
    },
    {
      icon: Brain,
      value: '4',
      label: 'ML Models Compared',
    },
    {
      icon: Target,
      value: `${(bestModel.testAccuracy * 100).toFixed(1)}%`,
      label: 'Best Accuracy',
    },
    {
      icon: TrendingUp,
      value: `${bestModel.rocAuc.toFixed(2)}`,
      label: 'ROC AUC Score',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              Machine Learning Project
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-6 leading-tight"
          >
            Hotel Booking{' '}
            <span className="gradient-text">Cancellation Prediction</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-dark-300 mb-8 max-w-2xl mx-auto"
          >
            Using machine learning to predict which hotel bookings are likely to be
            canceled, enabling proactive revenue management and optimized inventory
            control.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#problem"
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors"
            >
              Explore the Analysis
            </a>
            <a
              href="#results"
              className="px-8 py-3 bg-dark-700 hover:bg-dark-600 border border-dark-600 font-medium rounded-xl transition-colors"
            >
              View Results
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="card-hover text-center"
              >
                <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <p className="text-2xl sm:text-3xl font-bold font-display">{stat.value}</p>
                <p className="text-sm text-dark-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#problem"
            className="flex flex-col items-center text-dark-400 hover:text-primary-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
