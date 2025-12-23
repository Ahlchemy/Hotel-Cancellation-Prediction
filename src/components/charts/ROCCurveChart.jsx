import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from 'recharts';
import { rocCurveData, modelMetrics } from '../../data/modelMetrics';

const modelColors = {
  dtFull: '#94a3b8',
  dtPruned: '#60a5fa',
  rfFull: '#22c55e',
  rfPruned: '#f59e0b',
};

export default function ROCCurveChart() {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">ROC Curves</h3>
      <p className="text-sm text-dark-400 mb-4">
        Area Under Curve (AUC) measures model discrimination ability
      </p>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rocCurveData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis
              dataKey="fpr"
              stroke="#64748b"
              fontSize={12}
              tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              label={{ value: 'False Positive Rate', position: 'bottom', fill: '#64748b', fontSize: 12 }}
            />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              label={{ value: 'True Positive Rate', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
              }}
              formatter={(value, name) => {
                const labels = {
                  dtFull: 'DT Full',
                  dtPruned: 'DT Pruned',
                  rfFull: 'RF Full',
                  rfPruned: 'RF Pruned',
                };
                return [`${(value * 100).toFixed(1)}%`, labels[name] || name];
              }}
            />
            <Legend
              formatter={(value) => {
                const labels = {
                  dtFull: `DT Full (AUC: ${modelMetrics[0].rocAuc.toFixed(2)})`,
                  dtPruned: `DT Pruned (AUC: ${modelMetrics[1].rocAuc.toFixed(2)})`,
                  rfFull: `RF Full (AUC: ${modelMetrics[2].rocAuc.toFixed(2)})`,
                  rfPruned: `RF Pruned (AUC: ${modelMetrics[3].rocAuc.toFixed(2)})`,
                };
                return <span className="text-dark-300 text-sm">{labels[value]}</span>;
              }}
            />
            <ReferenceLine
              segment={[{ x: 0, y: 0 }, { x: 1, y: 1 }]}
              stroke="#475569"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="dtFull"
              stroke={modelColors.dtFull}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="dtPruned"
              stroke={modelColors.dtPruned}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="rfFull"
              stroke={modelColors.rfFull}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="rfPruned"
              stroke={modelColors.rfPruned}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        {modelMetrics.map((model) => (
          <div
            key={model.id}
            className={`p-2 rounded-lg text-center ${
              model.isBest ? 'bg-success-500/10 border border-success-500/30' : 'bg-dark-700'
            }`}
          >
            <p className="text-xs text-dark-400">{model.shortName}</p>
            <p className={`font-bold ${model.isBest ? 'text-success-400' : ''}`}>
              {model.rocAuc.toFixed(3)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
