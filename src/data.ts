// Define an enum for report types
export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

// Define the data structure for reports
export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 700,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'Sales',
      amount: 100,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid3',
      source: 'Food',
      amount: 200,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};

// Define the interface for the data structure
interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}
