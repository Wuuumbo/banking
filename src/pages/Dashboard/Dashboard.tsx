import React from 'react';
import ClientOverview from '../../components/Dashboard/ClientOverview';
import ScoreCard from '../../components/Dashboard/ScoreCard';
import CashFlowChart from '../../components/Dashboard/CashFlowChart';
import AlertsSection from '../../components/Dashboard/AlertsSection';
import YearlyCashFlowTable from '../../components/Dashboard/YearlyCashFlowTable';
import { subDays } from 'date-fns';

// Mock data
const mockClient = {
  id: '1',
  name: 'Entreprise ABC',
  sector: 'Technology',
  annualRevenue: 1000000,
  bankServices: ['Current Account', 'Credit Line', 'Business Card'],
};

// Generate 365 days of data
const generateYearlyData = () => {
  const today = new Date();
  return Array.from({ length: 365 }, (_, i) => {
    const date = subDays(today, 364 - i);
    const baseCredit = 15000 + Math.sin(i / 30) * 3000;
    const baseDebit = 14000 + Math.cos(i / 30) * 2500;
    const randomVariation = () => (Math.random() - 0.5) * 2000;

    const credits = baseCredit + randomVariation();
    const debits = baseDebit + randomVariation();
    const balance = 50000 + credits - debits + randomVariation();

    return {
      date: date.toISOString(),
      balance,
      credits,
      debits,
    };
  });
};

const mockCashFlowData = generateYearlyData();

const mockAlerts = [
  {
    id: '1',
    type: 'danger',
    message: 'Account balance below threshold for 5 consecutive days',
    date: '2 hours ago',
  },
  {
    id: '2',
    type: 'warning',
    message: 'Unusual increase in outgoing transfers detected',
    date: '5 hours ago',
  },
  {
    id: '3',
    type: 'info',
    message: 'Credit line usage approaching 80% of limit',
    date: '1 day ago',
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <ClientOverview client={mockClient} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ScoreCard
          title="Financial Stability"
          score={7.5}
          type="stability"
        />
        <ScoreCard
          title="Overdraft Risk"
          score={4.2}
          type="overdraft"
        />
        <ScoreCard
          title="Credit Line Opportunity"
          score={8.1}
          type="creditLine"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CashFlowChart data={mockCashFlowData.slice(-30)} />
        </div>
        <div>
          <AlertsSection alerts={mockAlerts} />
        </div>
      </div>

      <YearlyCashFlowTable data={mockCashFlowData} />
    </div>
  );
};

export default Dashboard;