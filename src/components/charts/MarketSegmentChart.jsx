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
import { marketSegmentData } from '../../data/chartData';

export default function MarketSegmentChart() {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">Cancellation by Market Segment</h3>
      <p className="text-sm text-dark-400 mb-4">
        Online bookings show the highest cancellation risk
      </p>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={marketSegmentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis dataKey="segment" stroke="#64748b" fontSize={12} />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
              }}
              formatter={(value, name) => [
                `${value}%`,
                name === 'canceled' ? 'Canceled' : 'Not Canceled',
              ]}
            />
            <Legend
              formatter={(value) => (
                <span className="text-dark-300 text-sm">
                  {value === 'canceled' ? 'Canceled' : 'Not Canceled'}
                </span>
              )}
            />
            <Bar dataKey="notCanceled" stackId="a" fill="#22c55e" radius={[0, 0, 0, 0]} />
            <Bar dataKey="canceled" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
