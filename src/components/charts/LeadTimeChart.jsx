import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import { leadTimeData } from '../../data/chartData';

const getBarColor = (rate) => {
  if (rate < 20) return '#22c55e';
  if (rate < 40) return '#3b82f6';
  if (rate < 60) return '#f59e0b';
  return '#ef4444';
};

export default function LeadTimeChart() {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">Cancellation Rate by Lead Time</h3>
      <p className="text-sm text-dark-400 mb-4">
        Bookings made far in advance have dramatically higher cancellation rates
      </p>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={leadTimeData} layout="vertical" margin={{ left: 20, right: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={true} vertical={false} />
            <XAxis
              type="number"
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis
              type="category"
              dataKey="category"
              stroke="#64748b"
              fontSize={12}
              width={100}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
              }}
              formatter={(value) => [`${value}%`, 'Cancellation Rate']}
              labelStyle={{ color: '#f8fafc' }}
            />
            <Bar dataKey="cancellationRate" radius={[0, 4, 4, 0]}>
              {leadTimeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.cancellationRate)} />
              ))}
              <LabelList
                dataKey="cancellationRate"
                position="right"
                formatter={(value) => `${value}%`}
                fill="#f8fafc"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-3 bg-danger-500/10 rounded-lg border border-danger-500/30">
        <p className="text-sm text-danger-300">
          <span className="font-semibold">Key Finding:</span> Bookings made 365+ days in advance have a
          <span className="font-bold text-danger-400"> 95.5% cancellation rate</span> compared to just
          14.2% for last-minute bookings.
        </p>
      </div>
    </div>
  );
}
