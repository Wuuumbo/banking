import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { format } from 'date-fns';

interface CashFlowChartProps {
  data: Array<{
    date: string;
    balance: number;
    credits: number;
    debits: number;
  }>;
}

const CashFlowChart: React.FC<CashFlowChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Cash Flow Analysis
      </h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(date) => format(new Date(date), 'MMM dd')}
            />
            <YAxis />
            <Tooltip
              labelFormatter={(date) => format(new Date(date), 'MMM dd, yyyy')}
              formatter={(value: number) =>
                new Intl.NumberFormat('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(value)
              }
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2563eb"
              name="Balance"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="credits"
              stroke="#16a34a"
              name="Credits"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="debits"
              stroke="#dc2626"
              name="Debits"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CashFlowChart;