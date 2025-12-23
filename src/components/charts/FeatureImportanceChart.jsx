import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { featureImportance } from '../../data/featureImportance';

const modelOptions = [
  { id: 'rf-full', label: 'Random Forest (Full)' },
  { id: 'rf-pruned', label: 'Random Forest (Pruned)' },
  { id: 'dt-full', label: 'Decision Tree (Full)' },
  { id: 'dt-pruned', label: 'Decision Tree (Pruned)' },
];

export default function FeatureImportanceChart() {
  const [selectedModel, setSelectedModel] = useState('rf-full');

  const data = featureImportance[selectedModel]?.slice(0, 8) || [];

  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold">Feature Importance</h3>
          <p className="text-sm text-dark-400">Top predictors of cancellation</p>
        </div>
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          {modelOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 30, right: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={true} vertical={false} />
            <XAxis
              type="number"
              domain={[0, 0.5]}
              tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis
              type="category"
              dataKey="label"
              stroke="#64748b"
              fontSize={12}
              width={120}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
              }}
              formatter={(value) => [`${(value * 100).toFixed(1)}%`, 'Importance']}
            />
            <Bar dataKey="importance" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? '#3b82f6' : index < 3 ? '#60a5fa' : '#93c5fd'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 p-3 bg-primary-500/10 rounded-lg border border-primary-500/30">
        <p className="text-sm text-primary-300">
          <span className="font-semibold">Lead Time</span> consistently ranks as the most important
          predictor across all models, accounting for ~35% of prediction importance.
        </p>
      </div>
    </div>
  );
}
