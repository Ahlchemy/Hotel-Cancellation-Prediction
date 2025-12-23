export const modelMetrics = [
  {
    id: 'dt-full',
    name: 'Decision Tree (Full)',
    shortName: 'DT Full',
    type: 'Decision Tree',
    trainAccuracy: 0.9964,
    testAccuracy: 0.8240,
    precision: 0.7407,
    recall: 0.7116,
    f1Score: 0.7258,
    rocAuc: 0.7983,
    treeDepth: 32,
    leaves: 935,
    description: 'Unpruned decision tree with full depth. High training accuracy but shows signs of overfitting.',
    confusionMatrix: {
      trueNegative: 1608,
      falsePositive: 222,
      falseNegative: 257,
      truePositive: 634
    }
  },
  {
    id: 'dt-pruned',
    name: 'Decision Tree (Pruned)',
    shortName: 'DT Pruned',
    type: 'Decision Tree',
    trainAccuracy: 0.9075,
    testAccuracy: 0.8442,
    precision: 0.7982,
    recall: 0.7015,
    f1Score: 0.7467,
    rocAuc: 0.8767,
    treeDepth: 10,
    leaves: 263,
    bestParams: {
      maxDepth: 10,
      minSamplesLeaf: 1,
      minSamplesSplit: 2
    },
    description: 'Pruned decision tree optimized via GridSearchCV. Better generalization with reduced overfitting.',
    confusionMatrix: {
      trueNegative: 1672,
      falsePositive: 158,
      falseNegative: 266,
      truePositive: 625
    }
  },
  {
    id: 'rf-full',
    name: 'Random Forest (Full)',
    shortName: 'RF Full',
    type: 'Random Forest',
    trainAccuracy: 0.9962,
    testAccuracy: 0.8795,
    precision: 0.8709,
    recall: 0.7419,
    f1Score: 0.8012,
    rocAuc: 0.9210,
    nEstimators: 100,
    description: 'Ensemble of 100 decision trees. Strong performance with robust predictions.',
    confusionMatrix: {
      trueNegative: 1732,
      falsePositive: 98,
      falseNegative: 230,
      truePositive: 661
    },
    isBest: true
  },
  {
    id: 'rf-pruned',
    name: 'Random Forest (Pruned)',
    shortName: 'RF Pruned',
    type: 'Random Forest',
    trainAccuracy: 0.9540,
    testAccuracy: 0.8776,
    precision: 0.8710,
    recall: 0.7351,
    f1Score: 0.7973,
    rocAuc: 0.9262,
    nEstimators: 200,
    bestParams: {
      maxDepth: 15,
      minSamplesLeaf: 1,
      minSamplesSplit: 2,
      nEstimators: 200
    },
    description: 'Hyperparameter-tuned Random Forest. Highest ROC AUC with excellent discrimination.',
    confusionMatrix: {
      trueNegative: 1733,
      falsePositive: 97,
      falseNegative: 236,
      truePositive: 655
    }
  }
];

export const getBestModel = () => modelMetrics.find(m => m.isBest) || modelMetrics[2];

export const rocCurveData = [
  { fpr: 0, tpr: 0 },
  { fpr: 0.05, tpr: 0.45, dtFull: 0.42, dtPruned: 0.50, rfFull: 0.55, rfPruned: 0.58 },
  { fpr: 0.10, tpr: 0.58, dtFull: 0.52, dtPruned: 0.62, rfFull: 0.68, rfPruned: 0.70 },
  { fpr: 0.15, tpr: 0.65, dtFull: 0.58, dtPruned: 0.70, rfFull: 0.76, rfPruned: 0.78 },
  { fpr: 0.20, tpr: 0.72, dtFull: 0.65, dtPruned: 0.76, rfFull: 0.82, rfPruned: 0.83 },
  { fpr: 0.30, tpr: 0.80, dtFull: 0.72, dtPruned: 0.84, rfFull: 0.88, rfPruned: 0.89 },
  { fpr: 0.40, tpr: 0.85, dtFull: 0.78, dtPruned: 0.88, rfFull: 0.92, rfPruned: 0.93 },
  { fpr: 0.50, tpr: 0.88, dtFull: 0.82, dtPruned: 0.91, rfFull: 0.94, rfPruned: 0.95 },
  { fpr: 0.60, tpr: 0.91, dtFull: 0.86, dtPruned: 0.93, rfFull: 0.96, rfPruned: 0.96 },
  { fpr: 0.70, tpr: 0.94, dtFull: 0.89, dtPruned: 0.95, rfFull: 0.97, rfPruned: 0.97 },
  { fpr: 0.80, tpr: 0.96, dtFull: 0.92, dtPruned: 0.97, rfFull: 0.98, rfPruned: 0.98 },
  { fpr: 0.90, tpr: 0.98, dtFull: 0.95, dtPruned: 0.98, rfFull: 0.99, rfPruned: 0.99 },
  { fpr: 1, tpr: 1 }
];
