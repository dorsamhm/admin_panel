import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
    yAxis: [
        {
            label: '$ (thousands)',
        },
    ],
    width: 500,
    height: 300,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(0, 0)',
        },
    },
};
const dataset = [
    {
        NetProfit: 44,
        Revenue: 76,
        FreeCashFlow: 35,
        month: 'Fev',
    },
    {
        NetProfit: 55,
        Revenue: 85,
        FreeCashFlow: 41,
        month: 'Mar',
    },
    {
        NetProfit: 57,
        Revenue: 101,
        FreeCashFlow: 36,
        month: 'Apr',
    },
    {
        NetProfit: 56,
        Revenue: 98,
        FreeCashFlow: 26,
        month: 'May',
    },
    {
        NetProfit: 61,
        Revenue: 87,
        FreeCashFlow: 45,
        month: 'June',
    },
    {
        NetProfit: 58,
        Revenue: 105,
        FreeCashFlow: 48,
        month: 'July',
    },
    {
        NetProfit: 63,
        Revenue: 91,
        FreeCashFlow: 52,
        month: 'Aug',
    },
    {
        NetProfit: 60,
        Revenue: 114,
        FreeCashFlow: 53,
        month: 'Sept',
    },
    {
        NetProfit: 66,
        Revenue: 94,
        FreeCashFlow: 41,
        month: 'Oct',
    },

];

const valueFormatter = (value) => `$ ${value} thousands`;

export default function BarsDataset() {
    return (
        <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[
                { dataKey: 'NetProfit', label: 'Net Profit', valueFormatter,},
                { dataKey: 'Revenue', label: 'Revenue', valueFormatter },
                { dataKey: 'FreeCashFlow', label: 'Free Cash Flow', valueFormatter, color: '#fdb462' },
            ]
            }
            {...chartSetting}
        />
    );
}
