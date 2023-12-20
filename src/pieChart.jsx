
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 30, label: 'A' },
            { id: 1, value: 10, label: 'B' },
            { id: 2, value: 20, label: 'C' },
            { id: 3, value: 40, label: 'C' },
          ],
        },
      ]}
      width={400}
      height={300}
    />
  );
}