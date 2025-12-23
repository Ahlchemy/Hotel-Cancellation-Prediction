import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { modelMetrics } from '../../data/modelMetrics';

export default function ModelComparisonChart({ metric = 'all' }) {
  const data = modelMetrics.map((m) => ({
    name: m.shortName,
    fullName: m.name,
    accuracy: m.testAccuracy * 100,
    precision: m.precision * 100,
    recall: m.recall * 100,
    f1: m.f1Score * 100,
    auc: m.rocAuc * 100,
    isBest: m.isBest,
  }));

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">Model Performance Comparison</h3>
      <p className="text-sm text-dark-400 mb-4">
        Test set performance across all metrics
      </p>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              domain={[60, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
              }}
              formatter={(value, name) => [`${value.toFixed(1)}%`, name]}
              labelFormatter={(label, payload) => payload[0]?.payload?.fullName || label}
            />
            <Legend
              formatter={(value) => (
                <span className="text-dark-300 text-sm capitalize">{value}</span>
              )}
            />
            <Bar dataKey="accuracy" fill="#3b82f6" name="Accuracy" radius={[2, 2, 0, 0]} />
            <Bar dataKey="precision" fill="#8b5cf6" name="Precision" radius={[2, 2, 0, 0]} />
            <Bar dataKey="recall" fill="#22c55e" name="Recall" radius={[2, 2, 0, 0]} />
            <Bar dataKey="f1" fill="#f59e0b" name="F1 Score" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function AccuracyComparisonChart() {
  const data = modelMetrics.map((m) => ({
    name: m.shortName,
    train: m.trainAccuracy * 100,
    test: m.testAccuracy * 100,
    gap: (m.trainAccuracy - m.testAccuracy) * 100,
    isBest: m.isBest,
  }));

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">Train vs Test Accuracy</h3>
      <p className="text-sm text-dark-400 mb-4">
        Smaller gap indicates better generalization
      </p>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              domain={[70, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
              }}
              formatter={(value) => [`${value.toFixed(1)}%`]}
            />
            <Legend
              formatter={(value) => (
                <span className="text-dark-300 text-sm">
                  {value === 'train' ? 'Train Accuracy' : 'Test Accuracy'}
                </span>
              )}
            />
            <Bar dataKey="train" fill="#60a5fa" name="train" radius={[2, 2, 0, 0]} />
            <Bar dataKey="test" fill="#22c55e" name="test" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
