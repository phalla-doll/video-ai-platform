'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {name: 'Jan', revenue: 4000, engagement: 2400},
  {name: 'Feb', revenue: 3000, engagement: 1398},
  {name: 'Mar', revenue: 2000, engagement: 9800},
  {name: 'Apr', revenue: 2780, engagement: 3908},
  {name: 'May', revenue: 1890, engagement: 4800},
  {name: 'Jun', revenue: 2390, engagement: 3800},
  {name: 'Jul', revenue: 3490, engagement: 4300},
];

export default function RevenueChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="engagement"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorEngagement)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
