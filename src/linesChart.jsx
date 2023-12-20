import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const years = [
  new Date(1990, 0, 1),
  new Date(1991, 0, 1),
  new Date(1992, 0, 1),
  new Date(1993, 0, 1),
  new Date(1994, 0, 1),
  new Date(1995, 0, 1),
  new Date(1996, 0, 1),
  new Date(1997, 0, 1),
  new Date(1998, 0, 1),
 
  
];

const FranceGDPperCapita = [
  0, 23, 43, 35, 44, 45, 56, 37, 40 
];

const GermanyGDPperCapita = [
  25, 23, 26,24, 25, 32, 30, 24, 19
];

export default function StackedAreas() {
  return (
    <LineChart
      xAxis={[
        {
          id: 'Years',
          data: years,
          scaleType: 'time',
          valueFormatter: (date) => '',
        },
      ]}
      series={[
        {
          id: 'France',
          data: FranceGDPperCapita,
          stack: 'total',
          area: true,
          showMark: false,
          color: '#FAD292',
        },
        {
          id: 'Germany',
          data: GermanyGDPperCapita,
          stack: 'total',
          area: true,
          showMark: false,
          color: '#83d8ae',
        },
      ]}
      width={600}
      height={300}
    //   margin={{ left: 70 }}
    />
  );
}
