'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {
  BarChart3,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  PieChart,
  FileText,
} from 'lucide-react';
import {cn} from '@/lib/utils';

const navigation = [
  {name: 'Overview', href: '/dashboard', icon: LayoutDashboard},
  {name: 'Campaigns', href: '/dashboard/campaigns', icon: BarChart3},
  {name: 'Influencers', href: '/dashboard/influencers', icon: Users},
  {name: 'Reports', href: '/dashboard/reports', icon: FileText},
  {name: 'Settings', href: '/dashboard/settings', icon: Settings},
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
            <span className="font-serif text-lg font-bold">R</span>
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">
            ReelUp
          </span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 h-5 w-5 flex-shrink-0',
                  isActive
                    ? 'text-gray-900'
                    : 'text-gray-400 group-hover:text-gray-500'
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-gray-200 p-4">
        <button className="group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
          <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
          Sign out
        </button>
      </div>
    </div>
  );
}
