export interface Client {
  id: string;
  name: string;
  sector: string;
  annualRevenue: number;
  bankServices: string[];
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string;
}

export interface ClientFinancialData {
  averageBalance: number;
  overdraftDays: number;
  creditFlow: number;
  debitFlow: number;
  stabilityScore: number;
  overdraftScore: number;
  creditLineScore: number;
}