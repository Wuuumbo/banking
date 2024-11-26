import React from 'react';
import CompaniesTable from './CompaniesTable';

// Mock data
const mockCompanies = [
  {
    id: '1',
    name: 'Tech Solutions SA',
    sector: 'Technology',
    annualRevenue: 1500000,
    bankServices: ['Current Account', 'Credit Line', 'Business Card'],
  },
  {
    id: '2',
    name: 'Green Energy SARL',
    sector: 'Energy',
    annualRevenue: 2800000,
    bankServices: ['Current Account', 'Investment Account'],
  },
  {
    id: '3',
    name: 'Construction Plus',
    sector: 'Construction',
    annualRevenue: 4200000,
    bankServices: ['Current Account', 'Credit Line', 'Leasing'],
  },
  {
    id: '4',
    name: 'Digital Marketing Pro',
    sector: 'Marketing',
    annualRevenue: 980000,
    bankServices: ['Current Account', 'Business Card'],
  },
  {
    id: '5',
    name: 'Food Services Express',
    sector: 'Food & Beverage',
    annualRevenue: 3100000,
    bankServices: ['Current Account', 'Credit Line', 'POS Terminal'],
  },
];

const CompaniesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Companies Database</h1>
      </div>
      <CompaniesTable companies={mockCompanies} />
    </div>
  );
};

export default CompaniesPage;