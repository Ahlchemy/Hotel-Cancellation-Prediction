import { motion } from 'framer-motion';

export default function ConfusionMatrix({ data, title, isBest = false }) {
  const { trueNegative, falsePositive, falseNegative, truePositive } = data;
  const total = trueNegative + falsePositive + falseNegative + truePositive;

  const cells = [
    {
      value: trueNegative,
      label: 'True Negative',
      position: 'top-left',
      color: 'bg-success-500/20 border-success-500/30',
      textColor: 'text-success-400',
    },
    {
      value: falsePositive,
      label: 'False Positive',
      position: 'top-right',
      color: 'bg-danger-500/10 border-danger-500/20',
      textColor: 'text-danger-400',
    },
    {
      value: falseNegative,
      label: 'False Negative',
      position: 'bottom-left',
      color: 'bg-danger-500/10 border-danger-500/20',
      textColor: 'text-danger-400',
    },
    {
      value: truePositive,
      label: 'True Positive',
      position: 'bottom-right',
      color: 'bg-success-500/20 border-success-500/30',
      textColor: 'text-success-400',
    },
  ];

  return (
    <div className={`card ${isBest ? 'ring-2 ring-success-500/50' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold">{title}</h4>
        {isBest && (
          <span className="px-2 py-1 text-xs font-medium bg-success-500/20 text-success-400 rounded-full">
            Best Model
          </span>
        )}
      </div>

      {/* Matrix Grid */}
      <div className="mb-4">
        {/* Header Row */}
        <div className="grid grid-cols-3 gap-1 mb-1">
          <div className="p-2"></div>
          <div className="p-2 text-center text-xs text-dark-400">Predicted: No</div>
          <div className="p-2 text-center text-xs text-dark-400">Predicted: Yes</div>
        </div>

        {/* Actual: No Row */}
        <div className="grid grid-cols-3 gap-1 mb-1">
          <div className="p-2 text-xs text-dark-400 flex items-center">Actual: No</div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-4 rounded-lg border ${cells[0].color} text-center`}
          >
            <p className={`text-2xl font-bold ${cells[0].textColor}`}>{cells[0].value}</p>
            <p className="text-xs text-dark-400 mt-1">TN</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`p-4 rounded-lg border ${cells[1].color} text-center`}
          >
            <p className={`text-2xl font-bold ${cells[1].textColor}`}>{cells[1].value}</p>
            <p className="text-xs text-dark-400 mt-1">FP</p>
          </motion.div>
        </div>

        {/* Actual: Yes Row */}
        <div className="grid grid-cols-3 gap-1">
          <div className="p-2 text-xs text-dark-400 flex items-center">Actual: Yes</div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`p-4 rounded-lg border ${cells[2].color} text-center`}
          >
            <p className={`text-2xl font-bold ${cells[2].textColor}`}>{cells[2].value}</p>
            <p className="text-xs text-dark-400 mt-1">FN</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`p-4 rounded-lg border ${cells[3].color} text-center`}
          >
            <p className={`text-2xl font-bold ${cells[3].textColor}`}>{cells[3].value}</p>
            <p className="text-xs text-dark-400 mt-1">TP</p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="p-2 bg-dark-700 rounded-lg">
          <span className="text-dark-400">Accuracy:</span>
          <span className="ml-2 font-mono">
            {(((truePositive + trueNegative) / total) * 100).toFixed(1)}%
          </span>
        </div>
        <div className="p-2 bg-dark-700 rounded-lg">
          <span className="text-dark-400">Precision:</span>
          <span className="ml-2 font-mono">
            {((truePositive / (truePositive + falsePositive)) * 100).toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}
