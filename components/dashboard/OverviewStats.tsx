'use client';

import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Users,
  Activity,
  CreditCard,
} from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    changeType: 'positive',
    icon: DollarSign,
  },
  {
    name: 'Active Influencers',
    value: '2,350',
    change: '+180.1%',
    changeType: 'positive',
    icon: Users,
  },
  {
    name: 'Engagement Rate',
    value: '12.23%',
    change: '-19%',
    changeType: 'negative',
    icon: Activity,
  },
  {
    name: 'Active Campaigns',
    value: '573',
    change: '+201',
    changeType: 'positive',
    icon: CreditCard,
  },
];

export default function OverviewStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {stat.value}
              </p>
            </div>
            <div className="rounded-full bg-gray-100 p-3 text-gray-600">
              <stat.icon className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            {stat.changeType === 'positive' ? (
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
            ) : (
              <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
            )}
            <span
              className={
                stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
              }
            >
              {stat.change}
            </span>
            <span className="ml-2 text-gray-500">from last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}
